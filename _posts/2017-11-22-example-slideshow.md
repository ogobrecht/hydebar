---
title: Example Slideshow
subtitle: A basic example for the Reveal.js integration
categories: [features]
tags: [reveal]
lang: en
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

For more informations about the Reveal.js integration please see the features page [here]({{ site.baseurl}}/features#revealjs-slideshow-integration).

Happy presenting ;-)  
Ottmar
