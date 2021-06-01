(function () {
  function App() {
    if (!new.target) {
      return new App();
    }

    this.options = {
      // luminousOpts: {
      //   closeOnScroll: true,
      //   caption: function(instance) {
      //     return instance.parentNode.dataset.text;
      //   }
      // },
      galleryOpts: {
        toolbar: {
          zoomIn: 0,
          zoomOut: 0,
          oneToOne: 0,
          reset: 0,
          prev: 4,
          play: {
            show: 4,
            size: "large",
          },
          next: 4,
          rotateLeft: 0,
          rotateRight: 0,
          flipHorizontal: 0,
          flipVertical: 0,
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
      // document.querySelectorAll("[data-zoom]").forEach(function (el) {
      //   new Luminous(el, _self.options.luminousOpts);
      // });
      document.querySelectorAll(".slider-gallery").forEach(function (el) {        
        const options = _self.options.galleryOpts;          
        options.url = function (img) {
          return img.dataset.src;
        };
        try {
          Object.assign(options, el.dataset.viewer ? JSON.parse(el.dataset.viewer) : {});          
          const viewer = new Viewer(el, options);
          el.previousElementSibling.addEventListener("click", function(ev) {
            ev.preventDefault();
            viewer.show();
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
