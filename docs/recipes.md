---
layout: page
title: Recipes
permalink: /recipes/
---

{% for recipe in site.recipes %}
  <h2>
    <a href="{{ recipe.url }}">
      {{ recipe.relative_path }}
    </a>
  </h2>
{% endfor %}