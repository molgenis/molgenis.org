---
title: Communities
intro: "MOLGENIS helps to create long-term research collaborations via continuous partnerships:"
layout: blue
---

<a id="top"/>
<div style="width: 80%; margin: 0 auto; text-align: center;">
<p style="text-align: center">
{% for item in site.communities  %}
  <a href="#{{ item.name | slugify }}" style="text-wrap: nowrap">
    {{ item.name }}</a> {% unless forloop.last %}- {% endunless %}
{% endfor %}
</p>
</div>

{% for item in site.communities %}
<div>
  <h1 id="{{ item.name | slugify }}">{{ item.name }}</h1>
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
