---
layout: page
---
# Read




## Academic Books

{% assign books_academic = site.books | where:"genre", "academic" %}
{% for book in books_academic %}
{% assign wiki = book.wiki | escape %}
<p>
<a href="{{ wiki }}" >
{{ book.title | escape }} - {{ book.author | escape }} ({{ book.year | escape }})
</a>
</p>
{% endfor %}

## Papers

{% assign papers = site.papers %}
{% for paper in papers %}
{% assign link = paper.link | escape %}
{% assign citation = paper.citation | escape %}
<p>
<a href="{{ link }}" title="{{ citation }}">
{{ paper.title | escape }} - {{ paper.author | escape }} ({{ paper.year | escape }})
</a>
</p>
{% endfor %}


## Literature

{% assign books_not_academic = site.books | where_exp:"item","item.genre != 'academic'" %}
{% for book in books_not_academic %}
{% assign wiki = book.wiki | escape %}
<p>
<a href="{{ wiki }}" >
{{ book.title | escape }} - {{ book.author | escape }} ({{ book.year | escape }})
</a>
</p>
{% endfor %}
