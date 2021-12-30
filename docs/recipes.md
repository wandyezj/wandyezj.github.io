---
layout: page
title: Recipes
permalink: /recipes/
---

{% for recipe in site.recipes %}
  <h2>
    <a href="{{ recipe.url }}">
      {{ recipe.title }}
    </a>
  </h2>
{% endfor %}