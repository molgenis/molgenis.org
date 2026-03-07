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
{% assign partner_item = site.partners | where: "slug", partner | first %}
{% if partner_item %}
<li><a href="/partners.html#{{partner_item.name | slugify}}">{{partner_item.name}}</a></li>
{% endif %}
{% endfor %}
</ul>
{% endif %}
</div>
</div>
{% endfor %}
