---
layout: page
---

{% assign thoughts = site.thoughts %}
{% for thought in thoughts %}
{% assign url = thought.url | escape %}
{% assign title = thought.title | escape %}
<p>
    <a href="{{ url }}" >
        {{ title }}
    </a>
</p>
{% endfor %}