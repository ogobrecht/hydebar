/**
 * jQuery plugin svg2img - v1.0.1 - 2017-04-14
 * https://github.com/ogobrecht/jquery-plugin-svg2img
 * Copyright (c) 2017 Ottmar Gobrecht - MIT license
 */

/*! @file src/svg2img.js */

(function($) {

    $.fn.svg2img = function(options) {

        // define settings and some vars
        var settings = $.extend({}, $.fn.svg2img.defaults, options);
        var timing = {};

        timing.start = new Date().getTime();

        // helper functions for console log and warn
        var log = function(message) {
            if (settings.debug) {
                console.log('svg2img: ' + message);
            }
        };
        var warn = function(message) {
            console.warn('svg2img: ' + message);
        };

        // helper function to get all used styles for a DOM element
        // http://stackoverflow.com/questions/13204785/is-it-possible-to-read-the-styles-of-css-classes-not-being-used-in-the-dom-using
        var getUsedStyles = function(element) {
            var elem = $(element);
            var usedStyles = [],
                styleSheets = (element.ownerDocument || document).styleSheets;
            $(styleSheets).each(function(i, sheet) {
                $(sheet.cssRules).each(function(i, rule) {
                    var cssSelectorUsed = false;
                    try {
                        cssSelectorUsed = (elem.find(rule.selectorText).length > 0);
                    } catch (error) {
                        warn("Unable to check if CSS selector is used: " + rule.selectorText, error);
                    }
                    if (cssSelectorUsed) {
                        usedStyles.push(rule.cssText);
                    }
                });
            });
            return usedStyles;
        };

        // helper function to create formatted date string
        // http://stackoverflow.com/questions/17415579/how-to-iso-8601-format-a-date-with-timezone-offset-in-javascript
        var formatLocalDate = function() {
            var now = new Date();
            var pad = function(num) {
                var norm = Math.abs(Math.floor(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            return now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + '-' + pad(now.getHours()) +
                pad(now.getMinutes()) + pad(now.getSeconds());
        };


        // helper function to export one svg
        var svg2image = function(element) {
            var elem, fileName, svgText, blob;

            if (settings.debug) {
                timing.startExport = new Date().getTime();
                log('1 - start SVG export');
            }

            elem = $(element);
            fileName = (elem.attr('id') || elem.parent().attr('id') || 'export') + '-' + formatLocalDate() + '.svg';
            svgText = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">' +
                '<style type="text/css">' + getUsedStyles(elem.parent()[0]).join(' ') + '</style>' +
                elem.clone().wrap('<p/>').parent().html() + '</svg>';

            if (settings.debug) {
                timing.endClone = new Date().getTime();
                log('2 - clone of original SVG and collect styles done (' + (timing.endClone - timing.startExport) + 'ms)');
            }

            blob = new Blob([svgText], {
                type: "image/svg+xml;charset=utf-8"
            });

            saveAs(blob, fileName);

            if (settings.debug) {
                timing.endSvgExport = new Date().getTime();
                log('3 - save to blob done (' + (timing.endSvgExport - timing.endClone) + 'ms)');
                log('4 - runtime for file ' + fileName + ': ' + (timing.endSvgExport - timing.startExport) + 'ms');
            }

        };

        // MAIN
        this.each(function(i, node) {
            if (node.tagName === 'svg') {
                svg2image(node);
            } else {
                $(node).find('svg').each(function(i, svg) {
                    svg2image(svg);
                });
            }
        });

        return this;

    };

    // plugin defaults
    $.fn.svg2img.defaults = {
        debug: false
    };

}(jQuery));


/*! @file lib/FileSaver.js/FileSaver.js */

/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if ((typeof define !== "undefined" && define !== null) && (define.amd !== null)) {
  define("FileSaver.js", function() {
    return saveAs;
  });
}
