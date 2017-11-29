---
title: Example Slideshow
subtitle: A basic example for the Reveal.js integration
categories: [features]
tags: [reveal]
---
This post is an example to show you how to integrate an existing slideshow.

You call simply an include with the path to the slideshow:

{% raw %}
```liquid
{% include slides.html path="/slides/2017-11-22-example-presentation" %}
```
{% endraw %}

As a result you get all the necessary informations to start your slides - we do the include call right now:

{% include slides.html path="/slides/2017-11-22-example-presentation" %}

For more informations about the Reveal.js integration please see the features page [here][1].

For a bigger example you can also have a look at [this presentation][2] from my colleague Markus Dötsch and me, which was shown by Markus on the [DOAG Conference + Exhibition 2017][3] (in German, sorry...).

Happy presenting ;-)  
Ottmar

[1]: {{site.baseurl}}/features#revealjs-slideshow-integration
[2]: {{site.baseurl}}/posts/2017-11-05-dr-jekyll-and-mr-markdown-bloggen-fuer-entwickler
[3]: https://2017.doag.org/en/home/
