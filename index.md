---
layout: home
main_title: Der Originale
image:
  path: ''
  height: ''
  width: ''
sliders:
- label: home
  type: gallery
  slide:
  - title: Bad Goisern
    image: assets/images/Bad-Goisern.jpg
    link: ''
    alt: Bad Goisern
    gallery_sw: true
    gallery:
    - title: No order
      image: assets/images/outoforder-kunstkaufen.jpg
      thumb: ''
      alt: No order
      desc: <p><strong>No order </strong>with <a href="https://google.com" title=""
        target="_blank">link</a></p>
    - title: Doge
      image: assets/images/dog.jpg
      thumb: ''
      alt: Doge
      desc: "<p>multiline</p><p>test</p>"
    - title: Pug
      image: assets/images/pug.jpg
      thumb: ''
      alt: Pug
      desc: ''
    desc: "<p></p>"
  - title: SADoG Resultat
    image: assets/images/SADoG-Resultat.jpg
    link: ''
    alt: SADoG Resultat
    gallery_sw: false
    gallery: []
    desc: ''
  - title: Artculture
    image: assets/images/artculture.jpg
    link: ''
    alt: Artculture
    gallery_sw: false
    gallery: []
    desc: ''
  - title: SADoG Aber
    image: assets/images/SADoG-Aber.jpg
    link: ''
    alt: SADoG Aber
    gallery_sw: false
    gallery: []
    desc: ''
  - title: Copies & Limits
    image: assets/images/limits.jpg
    link: ''
    alt: Copies & Limits
    gallery_sw: false
    gallery: []
    desc: ''
  - title: Fotostrecke 'Making of'
    image: assets/images/Making_of.jpg
    link: ''
    alt: Fotostrecke 'Making of'
    gallery_sw: false
    gallery: []
    desc: ''
  - title: Saboteur
    image: assets/images/saboteur.jpg
    link: ''
    alt: Saboteur
    gallery_sw: false
    gallery: []
    desc: ''

---
{%- if site.lang != site.languages[0] -%}
  {% tf home.html %}
{%- else -%}
<img class="home-slogan" src="{{ "/assets/images/slogan.png" | relative_url }}" alt="no copies">
<div class="row">
  <div class="col-12 col-lg-10 col-xl-8">
    <h1 class="home__title">
      <strong>Der <br>Originale</strong>
    </h1>        
    <div class="home__desc">
      <div class="home__desc-inner col-12 col-md-6">
        <h2>SADoG</h2>
        <h4>„KRAFT DER GEGENKULTUR“ Satirical accompaniment to understanding art in the European Capital of Culture</h4>
      </div>
    </div>
  </div>  
  <div class="col-12">
    {%- assign slider_1 = page.sliders | where: 'label', 'home' -%}
    {%- include slider.html slides = slider_1 -%}
  </div>
</div>
{%- endif -%}