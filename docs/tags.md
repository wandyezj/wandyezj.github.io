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
    {% assign tag_posts = tag[1] %}
<li>
    <a href="#{{ tag_name }}" title="{{ tag_name }}">
        {{ tag_name }} <span>({{ tag_posts.size | escape }})</span>
    </a>
</li>
{% endfor %}
</ul>


<!-- Indentation matters do not indent HTML-->
<ul style="list-style: none;">
{% for tag in tags %}
    {% assign tag_name = tag[0] | escape %}
    {% assign tag_posts = tag[1]  %}

<li id="{{ tag_name }}">
    {{ tag_name }}


<ul style="list-style: none;">
        {% for post in tag_posts %}
            {% assign post_date = post.date | date:"%Y-%m-%d" | escape %}
<li>
<time datetime="{{ post_date }}">{{ post_date }}</time>
<a href="{{ site.baseurl }}{{ post.url }}" title="{{ post.title | escape }}"> {{ post.title | escape }}</a>

</li>
        {% endfor %}
</ul>


</li>


{% endfor %}
</ul>

