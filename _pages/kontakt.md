---
layout: page
title: titles.kontakt
namespace: contacts
permalink: /kontakt/
permalink_en: /contacts/
languages: ["en"]
order: 5
---
{%- if site.lang != site.languages[0] -%}
  {% tf _pages/kontakt.md %}
{%- else -%}
<div class="col-12 col-lg-10 col-xl-8">

</div>
{%- endif -%}