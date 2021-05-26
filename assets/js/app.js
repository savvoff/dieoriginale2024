(function () {
  function App() {
    if (!new.target) {
      return new App();
    }

    this.options = {
      luminousOpts: {
        closeOnScroll: true,
        caption: function(instance) {
          return instance.parentNode.dataset.text;
        }
      }
    };
    var _self = this;
    init();

    function sliderInit() {
      document.querySelectorAll("[data-splide]").forEach(function (el) {
        new Splide(el).mount();
      });
    }
    
    function accordionMenus() {
      var acc = document.querySelectorAll(".accordion");
      var toggler = function(el) {
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
          this.classList.toggle("is-active");
          toggler(this);
        });
      }
    }

    function lightBoxInit() {
      document.querySelectorAll("[data-zoom]").forEach(function (el) {
        new Luminous(el, _self.options.luminousOpts);
      });
      if (document.querySelector("[data-zoom-gallery]"))
        new LuminousGallery(document.querySelectorAll("[data-zoom-gallery]"), null, _self.options.luminousOpts);
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
