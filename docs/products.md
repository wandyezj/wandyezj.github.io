---
layout: page
title: Products
permalink: /products/
---

{% for product in site.products %}
{% assign url = product.url | escape %}
{% assign title = product.title | escape %}
{% assign category = product.category | escape %}
  <p>
  {{ category }}
    <a href="{{ url }}">
      {{ title }}
    </a>
  </p>
{% endfor %}