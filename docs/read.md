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

## Experience Books

{% assign books_experience = site.books | where:"genre", "experience" %}
{% for book in books_experience %}
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

{% assign books_literature = site.books | where:"genre", "literature" %}
{% for book in books_literature %}
{% assign wiki = book.wiki | escape %}
<p>
<a href="{{ wiki }}" >
{{ book.title | escape }} - {{ book.author | escape }} ({{ book.year | escape }})
</a>
</p>
{% endfor %}

