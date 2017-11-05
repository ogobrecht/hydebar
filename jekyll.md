---
title: Jekyll
lang: en
topic: 1
---
This is a page, because it is not located in the `_posts` directory. We use it here to list one of our main topics "Jekyll". To get a list of all posts with a specific tag we are calling here an include file with this notation:
{% raw %}`{% include post-list-by-tag.html tag='jekyll' %}`{% endraw %}.

Additionally we set in the front matter the variable topic to 1. This means, that the Page is listed in the sidebar under topics on the first place.

{% include post-list-by-tag.html tag='jekyll' %}
