---
layout: home
main_title: Der Originale
image:
  path: ''
  height: ''
  width: ''
slider:
  home:
  - title: Bad Goisern
    image: "/assets/images/Bad-Goisern.jpg"
    link: "0"
    alt: Bad Goisern
  - title: SADoG Resultat
    image: "/assets/images/SADoG-Resultat.jpg"
    link: "1"
    alt: SADoG Resultat
  - title: Artculture
    image: "/assets/images/artculture.jpg"
    link: https://www.lightgalleryjs.com/demos/thumbnails/
    alt: Artculture
  - title: SADoG Aber
    image: "/assets/images/SADoG-Aber.jpg"
    link: https://www.lightgalleryjs.com/demos/thumbnails/
    alt: SADoG Aber
  - title: Copies & Limits
    image: "/assets/images/copies.jpg"
    link: https://www.lightgalleryjs.com/demos/thumbnails/
    alt: Copies & Limits
  - title: Fotostrecke 'Making of'
    image: "/assets/images/Making_of.jpg"
    link: https://www.lightgalleryjs.com/demos/thumbnails/
    alt: Fotostrecke 'Making of'
  - title: Saboteur
    image: "/assets/images/saboteur.jpg"
    link: https://www.lightgalleryjs.com/demos/thumbnails/
    alt: Saboteur
galleries:
  home:
  - id: "0"
    slides:
    - title: Outoforder kunstkaufen
      image: "/assets/images/outoforder-kunstkaufen.jpg"
      thumb: "/assets/images/outoforder-kunstkaufen.jpg"
      alt: Outoforder kunstkaufen
    - title: Copies & Limits
      image: "/assets/images/limits.jpg"
      thumb: "/assets/images/limits.jpg"
      alt: Copies & Limits
  - id: "1"
    slides:
    - title: Copies & Limits
      image: "/assets/images/limits.jpg"
      thumb: "/assets/images/limits.jpg"
      alt: Copies & Limits
    - title: Doge
      image: "/assets/images/dog.jpg"
      thumb: "/assets/images/dog.jpg"
      alt: Doge
    - title: Pug
      image: "/assets/images/pug.jpg"
      thumb: "/assets/images/pug.jpg"
      alt: Pug

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
    {%- include slider.html slides = page.slider.home gallery = page.galleries.home -%}
  </div>
</div>
{%- endif -%}