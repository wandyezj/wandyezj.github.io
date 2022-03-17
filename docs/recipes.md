---
layout: page
title: Recipes
permalink: /recipes/
---

{% for recipe in site.recipes %}
{% assign url = recipe.url | escape %}
{% assign title = recipe.title | escape %}
  <p>
    <a href="{{ url }}">
      {{ title }}
    </a>
  </p>
{% endfor %}