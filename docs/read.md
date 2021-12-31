---
layout: page
---
# Read

## Books

{% assign books_not_academic = site.books | where_exp:"item","item.genre != 'academic'" %}
{% for book in books_not_academic %}
<p>
<a href="{{ book.wiki }}" >
{{ book.title }} - {{ book.author }} ({{ book.year }})
</a>
</p>
{% endfor %}

## Papers

{% assign books_academic = site.books | where:"genre", "academic" %}
{% for book in books_academic %}
<p>
<a href="{{ book.wiki }}" >
{{ book.title }} - {{ book.author }} ({{ book.year }})
</a>
</p>
{% endfor %}


Diffusion of innovations