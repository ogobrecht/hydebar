---
title: Kramdown and the HTML Figure Element
subtitle: The search for a solution in Jekyll
tags: [general, example]
lang: en
---
Google search: `html figure tag for markdown`

- <https://stackoverflow.com/questions/19331362/using-an-image-caption-in-markdown-jekyll>
- <https://github.com/gettalong/kramdown/issues/48>
- <https://kramdown.gettalong.org/syntax.html#html-blocks>

Worth to mention: you can force Kramdown to render markdown in HTML elements like so - the key is `markdown="1"`:

```html
<figure markdown="1">
![test](img.jpg)
<figcaption>
My caption for the image above
</figcaption>
</figure>
```
