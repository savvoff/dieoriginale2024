---
layout: page
title: MEDIAL
t_title: titles.medial
image:
  path: ''
  height: ''
  width: ''
namespace: medial
permalink: "/medial/"
permalink_en: "/middle/"
languages:
- en
order: 2
sliders:
- label: medial
  type: carousel
  slide:
  - title: Bad Goisern
    image: assets/images/Bad-Goisern.jpg
    link: ''
    alt: Bad Goisern
    gallery_sw: false
    gallery: []
  - title: SADoG Resultat
    image: assets/images/SADoG-Resultat.jpg
    link: ''
    alt: SADoG Resultat
    gallery_sw: false
    gallery: []
  - title: Artculture
    image: assets/images/artculture.jpg
    link: ''
    alt: Artculture
    gallery_sw: false
    gallery: []
  - title: SADoG Aber
    image: assets/images/SADoG-Aber.jpg
    link: ''
    alt: SADoG Aber
    gallery_sw: false
    gallery: []
  - title: Copies & Limits
    image: assets/images/limits.jpg
    link: ''
    alt: Copies & Limits
    gallery_sw: false
    gallery: []
  - title: Fotostrecke 'Making of'
    image: assets/images/Making_of.jpg
    link: ''
    alt: Fotostrecke 'Making of'
    gallery_sw: false
    gallery: []
  - title: Saboteur
    image: assets/images/saboteur.jpg
    link: ''
    alt: Saboteur
    gallery_sw: false
    gallery: []

---
{%- if site.lang != site.languages[0] -%}
  {% tf _pages/medial.md %}
{%- else -%}
<div align="center">
  <div class="page-col">
    <h2 class="page__subtitle"><span>Die Macht der Bilder</span></h2>
    <br>
    <h3>artculture provincial (Das ist Kunst)</h3>
    <p>"Artculture Provincial“ zur Förderung der Gegenkultur in Europas Kulturhauptstadt. Satirische Begleiterscheinung zum aktuellen Verständnis für Kunst im Salzkammergut. Ein Projekt von <a href="http://dasproblem.at" target="_blank" rel="noopener noreferrer">DASProblem.at</a> + <a href="http://sign-of-liberty.com" target="_blank" rel="noopener noreferrer">Sign-of-Liberty.com</a> Gewidmet der europäischen Kulturhauptstadt 2024 gemäß ihrem Motto: "Kraft der Gegenkultur"</p>
  </div>
  {%- assign slider_1 = page.sliders | where: 'label', 'medial' -%}
  {%- include slider.html slides = slider_1 -%}
</div>

<div class="is-light_bg" align="center">
  <div class="page-col">
    <br> <br> <br>
    <h2 class="page__subtitle"><span>Series</span></h2>
    <br>
    <h5><strong>Kunst in Aktion</strong></h5>
    <p>Aktionismus zur Gegenkulturgestaltung gemäß eines der Mottos der europ. Kulturhauptstadt 2024.</p>
    <br>
    <h3><strong>Making of Series</strong></h3>
    <br>
  </div>
  <div class="accordion">
    <button class="accordion__button h4"><strong>Making of, 17.04.21</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>    
    <button class="accordion__button h4"><strong>Making of, 17.04.21</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <div class="page-col">
    <br><br>
    <h3><strong>Performance Series (Im Auftrag der Kunst )</strong></h3>
    <br>
  </div>
  <div class="accordion">
    <button class="accordion__button h4"><strong>Bad Goisern, 06.05.21 </strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>    
    <button class="accordion__button h4"><strong>Gmunden, 27.04.21</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <button class="accordion__button h4"><strong>Bad Ischl, 09.04.21</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <br> <br> <br>
</div>

<div align="center">
  <div class="page-col">
    <br> <br>
    <h2 class="page__subtitle"><span>Aus der Presse</span></h2>
    <br>
    <h5><strong>WAS SCHREIBT MAN ÜBER DIE KULTURHAUPTSTADT 2024</strong></h5>
    <p>Fundstücke der Berichterstattung über das Spektakel:</p>
    <br>
  </div>
  <div class="accordion">
    <button class="accordion__button h4"><strong>Lorem ipsum dolor sit amet</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>    
    <button class="accordion__button h4"><strong>Lorem ipsum dolor sit amet</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <br> <br>
</div>

<div class="is-light_bg" align="center">
  <div class="page-col">
    <br> <br> <br>
    <h2 class="page__subtitle"><span>Zuschriften</span></h2>
    <br>
    <h5><strong>WAS DENKT MAN ÜBER DIE KULTURHAUPTSTADT 2024</strong></h5>
    <p>Sich mal richtig auskotzen, womöglich besser anonym? <a href="mailto:{{ site.contact.email }}">Mail!</a></p>
    <br>
  </div>
  <div class="accordion">  
    <button class="accordion__button h4"><strong>Lorem ipsum dolor sit amet</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>    
    <button class="accordion__button h4"><strong>Lorem ipsum dolor sit amet</strong></button>
    <div class="accordion-content">
      <div class="page-col">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <br> <br> <br>
</div>
{%- endif -%}