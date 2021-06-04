(function () {
  function App() {
    if (!new.target) {
      return new App();
    }

    this.options = {
      galleryOpts: {
        dynamic: true,
        plugins: [lgAutoplay, lgThumbnail],
        extraProps: ["alt"],        
        showZoomInOutIcons: true,
        actualSize: false,
        download: false,
        preload: 0
      }
    };
    var _self = this;
    init();

    function sliderInit() {
      document.querySelectorAll("[data-splide]").forEach(function (el) {
        const slider = new Splide(el);
        slider.on("mounted", function() {
          setTimeout(function() {
            el.style.opacity = 1;
          }, 300);
        });
        slider.mount();
      });
    }
    
    function accordionMenus() {
      var acc = document.querySelectorAll(".accordion__button");
      var toggler = function(el) {
        if (!el.classList.contains("is-active")) {
          el.closest(".accordion").querySelectorAll(".accordion__button").forEach(function(btn) {
            btn.classList.remove("is-active");
            btn.nextElementSibling.style.maxHeight = null;
          });
        }
        var panel = el.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
      for (var i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains("is-active")) {
          toggler(acc[i]);
        }
        acc[i].addEventListener("click", function() {
          toggler(this);
          this.classList.toggle("is-active");
        });
      }
    }

    function lightBoxInit() {
      document.querySelectorAll("[data-gallery]").forEach(function (el) {        
        const options = _self.options.galleryOpts;
        try {
          options.dynamicEl = JSON.parse(el.dataset.gallery);
          Object.assign(options, el.dataset.galleryOptions ? JSON.parse(el.dataset.galleryOptions) : {});
          const lg = lightGallery(el, options);
          el.addEventListener("click", function() {
            lg.openGallery();
          });      
        } catch (err) {
          console.error(err);
        }
      });     
    }

    function menuToggle() {
      var nav = document.querySelector(".page-header__nav");
      document.querySelector(".burger").addEventListener("click", function () {        
        nav.classList.toggle("is-show");
      });
      document.addEventListener("click", function(ev) {
        if (!ev.target.closest(".page-header__nav")) {
          nav.classList.remove("is-show");
        }
      });
    }

    function init() {
      sliderInit();
      lightBoxInit();
      menuToggle();
      accordionMenus();
    }
  }
  new App();
})();
