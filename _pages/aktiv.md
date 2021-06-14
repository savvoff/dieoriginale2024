---
layout: page
title: AKTIV
t_title: titles.aktiv
image:
  path: ''
  height: ''
  width: ''
namespace: activity
permalink: "/aktiv/"
permalink_en: "/activity/"
languages:
- en
order: 4
sliders:
- label: aktiv
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
- label: aktiv_2
  slide:
  - title: Out
    image: assets/images/outoforder-kunstkaufen.jpg
    link: ''
    alt: Out
    gallery_sw: false
    gallery: []

---
{%- if site.lang != site.languages[0] -%}
  {% tf _pages/aktiv.md %}
{%- else -%}  
  <div align="center">
    <div class="page-col">
      <img class="is-small" src="{{ "/assets/images/pfote.png" | relative_url }}" alt="pfote">
      <br> <br>
      <h2 class="page__subtitle"><span>Initiativen und Projekte</span></h2>  
      <br>
      <p>Die „Kraft der Gegenkultur" kann jeder zum Ausdruck bringen und sich an der kulturellen Einflussnahme an Europas Kulturhauptstadt beteiligen - gemäß eben jenem Motto: „Initiativen zum Mitmachen“</p>
      <br>
      <h5><strong>KUNST IN AKTION (AUS DER REIHE TANZEN)</strong></h5>
      <p>Infos zu etwaigen bevorstehenden Aktionen können auf direkte Anfrage nur vertraulich mitgeteilt werden. Über die zurückliegenden kann man sich einen Eindruck in den <a href="http://" target="_blank" rel="noopener noreferrer">Fotostrecken</a> verschaffen.</p>
    </div>
    <br> <br>
  </div>

  <div class="is-light_bg" align="center">
    <div class="page-col">
      <br> <br>
      <h2 class="page__subtitle"><span>Gegenkultur 2024</span></h2>  
      <br>
      <h5><strong>AUS DEM RAHEM (GE)FALLEN</strong></h5>
      <p>Hätte man das vermutet hinter den Kulissen der Tourismusfassade? Kunst wider der Tradition! Schaffende und Werke, die nicht in das Bild, der nach außen hochgehaltenen Kultur passen:</p>
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

  <div  align="center">
    <div class="page-col">
      <br><br>
      <h2 class="page__subtitle"><span>UNART-IG</span></h2>
      <br>
      <h5><strong>WIR FÜR UNS</strong></h5>
      <p>Alternative Kreative aus dem Salzkammergut stellen sich dem Thema GEGENKULTUR 2024, um gemeinsam auf sich und ihre Arbeit in dieser Region im Zuge des Projekts „Artculture Provincial" aufmerksam zu machen. Schaffende aus allen Bereichen sind ab sofort zur Teilnahme eingeladen, für weitere Infos bitte mit dem Betreff „Un-artig" in <a href="{% tl contacts %}" target="_blank" rel="noopener noreferrer">Kontakt</a> treten.
      </p>
    </div>
    <br>
    {%- assign slider_1 =  page.sliders | where: 'label', 'aktiv' | map: 'slide' -%}
    {%- include slider.html slides = slider_1 -%}  
  </div>

  <div class="is-light_bg" align="center">
    <div class="page-col">
      <br> <br> <br>
      <img src="{{ "/assets/images/no_copies.png" | relative_url }}" alt="no copies">
      <br> <br>
      <h3><strong>Die entartete Kunst</strong></h3>
      <p>Eine Initiative, die aufgrund rechtlich kritischer Voraussetzungen in der Kulturhauptstadt ihre Geburt leider nicht erlebte! Was genau sind die Hintergründe und gibt es eine Alternative dazu?</p>
      <br>
    </div>
    <div class="accordion">
      <button class="accordion__button is-active h4"><strong>DIE (verworfene!) IDEE</strong></button>
      <div class="accordion-content">
        <div class="page-col">
          <br>
          <div align="left">
            <figure class="img-fit img-fit_contain ratio-1x1 is-medium is-float-left">
              <img src="{{ "/assets/images/zweizeiler.png" | relative_url }}" alt="zweizeiler">
            </figure>
            <h5><strong>Mach (d)ein Kreuz für die Gegenkultur! </strong></h5>
            <p>Überall dort, wo dir der offizielle Slogan "no copies*no limits" 
              unterkommt.<br>
              <br>
              Eine satirische Initiative zum Mitgestalten durch gegenkulturelle 
              Einflussnahme ... <br>
              <br>
              Dazu war ein Aufruf angedacht, dieses X als Foto, gerne auch mit den 
              "Teilnehmern" darauf (als auch anonym) mit den nachfolgenden Tags in 
              Umlauf zu bringen und Dr.SADoG zukommen zu lassen, der diese als 
              umfassende Sammlung präsentiert. <br>
              <br>
              #nocopXs #nocopXsnolimits #nocops #nocopsnolimits #gegenkultur2024 
              #kraftdergegenkultur #kunstfreiheit #gegenkulturimsalzkammergut #machmit <br>
              <br>
              Dies stellte aber womöglich strafrechtlich ein erhebliches Problem dar, 
              weshalb Dr.SADoG sich von dieser Überlegung distanzierte .. </p>
          </div>
        </div>
      </div>    
      <button class="accordion__button h4"><strong>DAS RECHTLICHE PROBLEM</strong></button>
      <div class="accordion-content">
       <div class="page-col">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <button class="accordion__button h4"><strong>ALTERNATIVE (zum Trost)</strong></button>
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
      <br><br>
      <h2 class="page__subtitle"><span>Meinungen (loswerden!)</span></h2>  
      <br>
      <p>Was denkt man über die Kulturhauptstadt 2024? Siehe <mark>Zuschriften</mark>! Sich mal richtig auskotzen, womöglich besser anonym? <a href="mailto:{{ site.contact.email }}">Mail jetzt</a>!
        <br> <br>
        Ideen und Vorschläge für weitere Initiativen sind natürlich ebenso <a href="http://" target="_blank" rel="noopener noreferrer">erwünscht</a>, wie eine zahlreiche und engagierte Teilnehmer an den bestehenden Aktionen!
        </p>
    </div>
  </div>
{%- endif -%}