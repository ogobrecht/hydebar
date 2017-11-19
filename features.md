---
title: Notable Features
sidebar: 1
sidebar-title: Features
---

HydeBar is a fully responsive HTML5 Jekyll sidebar template for the static site generator Jekyll:

{% include toc header="" %}

Miss something? Create it, share it...

## Quickstart: Online in 5 minutes

Everything in your browser:

- Login to [GitHub](https://github.com/)
- Fork repository [HydeBar](https://github.com/ogobrecht/hydebar)
- Edit `_config.yml` (url, baseurl)
- Change repository settings
    - Rename to yourUserName.github.io
    - Activate GitHub Pages
- Done!

On the very first time when GitHub is generating your site this could take some minutes.

After this quick start it is time to look in detail to some more settings:

- `_data/authors`
- `_config.yml`
  - Permalink:
    - `/posts/:year-:month-:day-:title`
    - [Jekyll Docs: Permalinks](https://jekyllrb.com/docs/permalinks/)
  - Your brand color
  - Sidebar settings
  - ...
- `/about.md`
- `/imprint.md`
- `/privacy-statement.md`
- ...

And of course you should delete or overwrite the default content with your own ;-)


## No dependencies - runs on GitHub Pages

The template has no dependencies on external plugins - therefore it can run on GitHub Pages. Except for the Jekyll blackbox itself (which renders your site) everything is implemented with Liquid templates located in the directories `_layouts` and `_includes`. No hidden secrets and highly customizable to your needs :-)


## Responsive, CSS driven sidebar

HydeBar is a fully responsive HTML5 template. Except for the integration of the Reveal.js slideshow, Disqus comments and Google analytics it needs no activated JavaScript on the client side. The sidebar is complete CSS driven.

Per default there are some sections on the sidebar: Under the Header you will find a list of all pages which have the Front Matter variable `sidebar` set to a value higher then 0. The value is used to order the pages.

Then we have a list of all Categories used in the posts. After that a list of all tags. Then a list of all contact details from the site author - see also `_config.yml` and `_data/authors`.

The last section is a list of all pages with the Front Matter variable `sidebar-legal` set to a value higher then 0.

All section headers are automatically hidden, when no data is found for the section. You can configure the visibility of each section in the file `_config.yml` - per default all sections are shown:

```yaml
sidebar:
  pages: true
  categories: true
  tags: true
  contact: true
  legal: true
```


## Reveal.js slideshow integration

[Reveal.js](https://github.com/hakimel/reveal.js) ([demo](http://lab.hakim.se/reveal-js/)) supports directly Markdown - this is pretty cool, because we can write now also presentations in Markdown.

Clear - there are some special things when writing content for a presentation. The obvious question is how we mark the begin end the end of a slide. The answer: It depends on you - you can configure the slide separator as a regular expression. Per default we reuse the horizontal row - this seems to be very natural:

```markdown
## Example Presentation

-----

## Introduction

---

### A vertical slide

It is indicated by three dashes

-----

## The next horizontal slide

It is indicated by five dashes

---

### Again a vertical slide

- A reference-style link to a [Markdown cheatsheet][1]
- Another link to [GitHub-flavored Markdown][2]

[1]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links
[2]: https://help.github.com/categories/writing-on-github/

-----

## The End
### Questions?

```

***Some things to explain***

Reveal.js supports horizontal and vertical slides and by pressing the `Esc` key you get a nice overview of all slides. If you organize your slides in horizontal main points and vertical details you are able to navigate fast in your whole presentation when using the overview. For a list of all shortcuts press the `?` in a presentation

The default regular expression forces you to have a blank line before and after the horizontal row to be recognized as a slide separator. Because of that you can have also horizontal rows on a slide - simply omit the blank lines.

Markdown allows you to provide so called reference-style links - you put the URL outside of the current text to improve the readability. Reveal seems to slice the presentation into single slides first and then rendering each slide. Because of this you need to have all URLs of reference-style links on the same slide - otherwise your links would not work. No big deal but good to know.

The Reveal.js integration assumes, that you put each slideshow in an own directory. The reason for this is that you normally have many resources like images or other stuff, which should be saved together with your slides. Another reason is that we need for the start of the slideshow a reveal layout and for the slides itself an extra markdown file without Front Matter. Jekyll will then convert the slides to HTML with the default layout and also copy the file itself to the `_site` folder for the webserver. An example directory:

```
.
├── ...
├── slides
|   └── 2017-11-22-example-presentation
|       ├── assets
|       |   ├── image_1.png
|       |   ├── image_2.png
|       |   └── ...
|       ├── index.md   # with Front Matter
|       └── slides.md  # without Front Matter
├── ...
```

To start the example presentation in a post or page you call a helper include:

{% raw %}
```liquid
{% include slides.html path="/slides/2017-11-22-example-presentation" %}
```
{% endraw %}

You don't need to care about {% raw %}`{{ site.baseurl }}`{% endraw %} - this is handled by the include. We call it now here - as a result you get a whole block of informations to run your presentation:

{% include slides.html path="/slides/2017-11-22-example-presentation" %}

Do you want to have a PDF version of your slides? No problem, Reveal.js supports this with the help of Google Chrome or Chromium. You need to load a special CSS by passing in an URL parameter `.../slides/2017-11-22-example-presentation?print-pdf` and then print with the browsers built in "Save as PDF" function. All the details can be found [here](https://github.com/hakimel/reveal.js#pdf-export).

Reveal supports nine different themes out of the box. You can configure the default theme and other things in the `_config.yml`:

```yaml
slides:
  theme: solarized
  data-separator: "^\\r?\\n-----\\r?\\n$"
  data-separator-vertical: "^\\r?\\n---\\r?\\n$"
  data-separator-notes: "^Notes:"
```

You can overwrite these settings in your presentations `index.md`

```yaml
---
title: Example Presentation
lang: en
layout: slides
slides:
  theme: black
  data-separator-notes: "^My personal notes:"
---
```


## Posts archive page by year

The template delivers an archive page. This page uses the following include to render a list of all posts by year:

{% raw %}
```liquid
{% include post-list-by-year.html %}
```
{% endraw %}

This include is also used on the custom 404 error page.


## Category and tag index pages

Because we can not use external plugins for GitHub Pages we have to workaround this for category and tag pages.

The solution is to create for each category or tag an empty file with empty frontmatter in the directory `/categories` respective `/tags`. The default layout for these files is configured in `_config.yml`. The layouts  are taking the category/tag value from the file name and rendering then the list of all posts for this category/tag.

You should use only lowercase slugified keywords for your category and tag pages and also in your posts Front Matter. The labels for your categories are maintained in this file: `_data/labels.yml` - if you forgot to configure a label here then the category or tag name is used as the default in the Navigation and also on each post in the meta section - you will see it...

To check, if you don't have forgotten to create a category or tag page you can use [HTMLProofer](https://jekyllrb.com/docs/continuous-integration/travis-ci/#2-the-test-script). It is always a good idea to check all you links - the link to HTMLProofer is pointing to the Jekyll docs regarding continuous-integration.


## Atom feed

Because of the fact we support multiple authors and subtitles the default feed from Jekyll was not ok. We wanted also to customize the number of posts included in the feed. You can configure this limit in the `_config.yml`.

If you want to customize the feed feel free to edit the file `_layouts/feed.xml`. Please keep in mind, that the reference to your feed in the `_layouts/default.html`


## robots.txt, sitemap.xml
## Custom 404 error page which shows the post archive
## Support for multiple authors
## Support for subtitles
## UI localization - help needed for more languages
## Easy ToC creation: {% raw %}`{% include toc %}`{% endraw %}
## Figure captions with a helper CSS class

***Real figure elements written in raw HTML***

Markdown encourage you to use HTML when there is no easy Markdown syntax available - two examples:

{% raw %}
<figure markdown="1">
``````html
<figure markdown="1">
```js
var example = "dummy string";
```
<figcaption>A real figure caption for a code snippet</figcaption>
</figure>

<figure markdown="0">
<img
  src="{{site.baseurl}}/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/page-speed-statisch-desktop.png"
  alt="Page Speed" />
<figcaption>A real figure caption for an image</figcaption>
</figure>
``````
<figcaption>This is a real figure caption for a code snippet</figcaption>
</figure>
{% endraw %}


<figure markdown="0">
<img
  src="{{site.baseurl}}/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/page-speed-statisch-desktop.png"
  alt="Page Speed" />
<figcaption>This is a real figure caption for an image</figcaption>
</figure>


***Faked image and code captions***

With the helper CSS class `.figcaption` or simply `.caption`. We use here the possibility to add attributes to elements - a functionality from the Markdown converter [Kramdown](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions). The resulting paragraph with the class `caption` has a negative `margin-top` and is therefore more aligned to the previous element. Like the real figures it has also a different text color and decoration as the main text:

{% raw %}
``````md
```js
var example = "dummy string";
```

{:.caption}
Faked figure caption for a code snippet

![Page Speed]({{site.baseurl}}/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/page-speed-statisch-desktop.png)

{:.caption}
Faked figure caption for an image
``````
{% endraw %}


{:.caption}
This is a faked figure caption for a code snippet

![Page Speed]({{site.baseurl}}/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/page-speed-statisch-mobil.png)

{:.caption}
This is a faked figure caption for an image

***Conclusion***

If you want to be more semantic correct then use real figures and the possibility to place Markdown inside your figure elements. If you are lazy then use the possibility to add a class to your caption paragraph.


## Disqus comments
## Google analytics
## W3C compliant

The resulting site was checked again these compliance tests - you can check it again with the provided links:

- [Atom 1.0 feed](https://validator.w3.org/feed/check.cgi?url=https%3A//ogobrecht.github.io/hydebar/feed.xml)
- 
