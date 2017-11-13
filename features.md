---
title: Notable Features
sidebar: 1
sidebar-title: Features
---

The Jekyll sidebar template is a fully responsive HTML5 theme/template for the site generator Jekyll. Except for the integration of the Reveal.js slideshow, Disqus comments and Google analytics it needs no activated JavaScript on the client side. The sidebar is complete CSS driven.

The template has no dependencies on external plugins - therefore it can run on GitHub Pages. Except for the Jekyll blackbox itself (which renders your site) everything is implemented with Liquid templates located in the directories `_layout` and `_includes`. No hidden secrets and highly customizable to your needs :-)

## Feature List

- Quickstart: Online in 5 Minutes
- No dependencies - runs on GitHub pages
- Responsive, CSS driven sidebar
- Reveal.js slideshow integration
- Archive page
- Category index/pages
- Tag index/pages
- Atom feed
- robots.txt, sitemap.xml
- 404 error page which shows the archive
- Multi author support
- UI localization - help needed for more languages...
- Easy ToC creation: {% raw %}`{% include toc %}`{% endraw %}
- Image and code captions with a helper CSS class
- Disqus comments
- Google analytics
- Miss something? Create it, share it...

HTML figure elements written in raw HTML - Markdown encourage you to use HTML when there is no easy Markdown syntax available:

<figure markdown="0">
<img
  src="/hydebar/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/editor-atom.png"
  alt="Atom editor" />
<figcaption>A real figure caption for an image</figcaption></figure>


<figure markdown="1">
```js
var test = "dummy JavaScript code"
```
<figcaption>A real figure caption for a code snippet</figcaption></figure>


Faked image and code captions with class `.figcaption` or simply `.caption` - we use here the possibility to add attributes to elements - a functionality from the Markdown converter [Kramdown](https://kramdown.gettalong.org/syntax.html#attribute-list-definitions) - the resulting paragraph with the class `caption` has a negative `margin-top` and is therefore more aligned to the previous element:

```md
![Atom Editor](/hydebar/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/editor-atom.png)

{:.caption}
Example caption for a picture
```

{:.caption}
Example caption for a Markdown code fragment


![Atom Editor](/hydebar/slides/2017-11-22-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler/assets/editor-atom.png)

{:.caption}
Example caption for an image

## Tag Pages

Because we can not use any external plugins for GitHub Pages we have to workaround this for tag pages.

The solution is to create for each tag an empty file with empty frontmatter in the directory `/tags`. In the `_config.yml` file is a default layout configured for each file this directory: `tag`. This layout takes the tag value from the file name and renders then the list of all posts for this tag.

You should use only lowercase slugyfied keywords for your tag pages and also as the tags in your posts frontmatter. The tag labels are maintained in this file: `_data/taglabels.yml` - if you forgot to configure a label for a tag here then the tag keyword is used as the default in the Navigation and also on each post in the meta section - you will see it.
