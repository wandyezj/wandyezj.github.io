---
layout: page
---
# Read

## Books

{% for book in site.books %}
<p>
<a href="{{ book.wiki }}" >
{{ book.title }} - {{ book.author }} ({{ book.year }})
</a>
</p>
{% endfor %}

## Papers
