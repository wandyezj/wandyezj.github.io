---
layout: page
title: Posts
permalink: /all/
---

{% for post in site.posts %}
[{{post.title}} ]({{post.url}})
{% endfor %}