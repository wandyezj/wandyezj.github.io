---
layout: page
---
# Read




## Academic Books

{% assign books_academic = site.books | where:"genre", "academic" %}
{% for book in books_academic %}
<p>
<a href="{{ book.wiki }}" >
{{ book.title }} - {{ book.author }} ({{ book.year }})
</a>
</p>
{% endfor %}

## Papers

## Literature

{% assign books_not_academic = site.books | where_exp:"item","item.genre != 'academic'" %}
{% for book in books_not_academic %}
<p>
<a href="{{ book.wiki }}" >
{{ book.title }} - {{ book.author }} ({{ book.year }})
</a>
</p>
{% endfor %}
