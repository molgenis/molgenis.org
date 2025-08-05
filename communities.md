---
title: Communities
intro: "MOLGENIS aims to contribute to the creation long-term collaborations in broad research communities, systematically funded by series of partner projects"
layout: blue
---

<a id="top"/>
<p>
Example of MOLGENIS communities:
{% for item in site.communities  %}
  <a href="#{{ item.name | slugify }}">
    {{ item.name }}</a> {% unless forloop.last %}- {% endunless %}
{% endfor %}
</p>

{% for item in site.communities %}
<div>
  <h1 id="{{ item.name | slugify }}">{{ item.name }} community</h1>
  <div style="display: flex; column-gap: 2em;">
<div style="width: 70%">{{ item.content | markdownify }}</div>
<div>
{% if item.partners %}
Partnerships:
<ul>
{% for partner in item.partners %}
<li><a href="/partners.html#{{partner}}">{{partner}}</a></li>
{% endfor %}
</ul>
{% endif %}
</div>
</div>
{% endfor %}
