---
layout: page
title: Tags
permalink: /tags/
order: 1
---

<ul style="list-style: none;">
{% assign tags = site.tags %}
{% for tag in tags %}
    {% assign tag_name = tag[0] | escape %}
    {% assign tag_posts = tag[1] | escape %}
<li>
    <a href="#{{ tag_name }}" title="{{ tag_name }}">
        {{ tag_name }} <span>({{ tag_posts.size }})</span>
    </a>
</li>
{% endfor %}
</ul>

<ul style="list-style: none;">
{% for tag in tags %}
    {% assign tag_name = tag[0] | escape %}
    {% assign tag_posts = tag[1] | escape %}

<li id="{{ tag_name}}">{{ tag_name }}
    <ul style="list-style: none;">
{% for post in tag_posts %}
{% assign post_date = post.date | date:"%Y-%m-%d" | escape %}

<li>
{{ post_date }}
<!-- <time datetime="{{ post_date }}">{{ post_date }}</time> -->
<!-- <a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a> -->
</li>
</ul>
</li>
{% endfor %}
{% endfor %}
</ul>

