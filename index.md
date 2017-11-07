---
title: Home
---
This is the `index.md` file in the root of your project. It lists the last five posts by calling this include: {% raw %}`{% include post-list-by-limit.html limit=5 %}`{% endraw %} and shows also links to your archive page and your atom feed. You should delete this paragraph ;-)

{% include post-list-by-limit.html limit=5 %}

{% include translation text='more_in_the' %} [{% include translation text='archive' %}]({{ site.baseurl }}/archive), {% include translation text='subscribe_via' %} [RSS]({{ site.baseurl }}/feed.xml)
