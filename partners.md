---
title: Partnerships
intro: "MOLGENIS has been applied in many ways. Find examples of our partnerships below."
layout: blue
---

{% assign sorted_by_end = site.partners | sort: "end"  %}
{% assign sorted_by_end_and_start = sorted_by_end | sort: "start" | reverse %}

{% for item in sorted_by_end_and_start %}
  <h1>{{ item.name }} 
    <small><small>{{ item.start }} - {{ item.end }}</small></small> 
    <img class="partner-logo" src="{{ item.logo }}">
  </h1>

  <p>{{ item.content | markdownify }}</p>

{% if item.tags %}
<p>MOLGENIS tools used:
{% for tag in item.tags %}
<a href="/tools/#{{ tag }}">{{ tag }}</a>{% unless forloop.last %}&nbsp;{% endunless %}
{% endfor %}
</p>
{% endif %}
{% endfor %}
