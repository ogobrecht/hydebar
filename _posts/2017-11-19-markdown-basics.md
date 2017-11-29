---
title: Markdown Basics
subtitle: Syntax for creating content
categories: [general]
tags: [markdown]
---

Here are some basic syntax to create posts and pages. For the complete Markdown syntax see [John Gruber's original specification](http://daringfireball.net/projects/markdown/) and the [kramdown quick reference](https://kramdown.gettalong.org/quickref.html) - kramdown is the Markdown renderer used by Jekyll and supports some Markdown extensions. For more details see the [complete kramdown syntax](https://kramdown.gettalong.org/syntax.html).

Don't use H1 headers in you posts and pages - every HTML page should have only one H1 header - and this H1 header is already occupied by your post or page title. As a best practice use only H2 and H3 headers - everything else is too deep. If you need such deep levels consider to split your post in multiple parts.

``````md

## H2 Header

### H3 Header

A paragraph with *emphasized text*, **bold text**, ***emphasized and bold***.
As an alternative for the star you can use the _underscore_. Text could also be
marked as ~~strikethrough~~ with two tildes.

* An unordered list item
  - Could also start with a minus sign
  + Or a plus sign
* An inline style link: [Jekyll](https://jekyllrb.com/ "With a title")  
* A reference style link: [Markdown Syntax][1]

1. An ordered list item
1. Another one
  - Unordered sub item
1. You don't need correct numbers
1. In the rendered HTML the numbers are correct

> A block quote
>
> > Nesting is possible
>
> > > Even multiple levels
>
> Back to base level

A picture with an optional image title:

![Google PageSpeed]({{site.baseurl}}/assets/images/page-speed-mobile.png "Image title")

Some source code:
```js
var example = "dummy JavaScript code";
```

A horizontal row:

---

[1]: https://daringfireball.net/projects/markdown/syntax

``````

***Result:***

## H2 Header

### H3 Header

A paragraph with *emphasized text*, **bold text**, ***emphasized and bold***.
As an alternative for the star you can use the _underscore_. Text could also be
marked as ~~strikethrough~~ with two tildes.

* An unordered list item
  - Could also start with a minus sign
  + Or a plus sign
* An inline style link: [Jekyll](https://jekyllrb.com/ "With a title")  
* A reference style link: [Markdown Syntax][1]

1. An ordered list item
1. Another one
  - Unordered sub item
1. You don't need correct numbers
1. In the rendered HTML the numbers are correct

> A block quote
>
> > Nesting is possible
>
> > > Even multiple levels
>
> Back to base level

A picture with an optional image title:

![Google PageSpeed]({{site.baseurl}}/assets/images/page-speed-mobile.png "Image title")

Some source code:
```js
var example = "dummy JavaScript code";
```

A horizontal row:

---

[1]: https://daringfireball.net/projects/markdown/syntax

Still reading? Congratulations: You know now the syntax for 80 percent of the normal content creation. Feels natural or what do you think?

Happy writing ;-)  
Ottmar
