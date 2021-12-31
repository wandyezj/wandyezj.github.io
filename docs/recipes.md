---
layout: page
title: Recipes
permalink: /recipes/
---

{% for recipe in site.recipes %}
  <p>
    <a href="{{ recipe.url }}">
      {{ recipe.title }}
    </a>
  </p>
{% endfor %}