(function(){
  function App() {
    if (!new.target) {
      return new App();
    }
    
    this.options = {};
    var ctx = this;
    init();

    function sliderInit() {
      document.querySelectorAll("[data-splide]").forEach(function(el) {
        new Splide(el).mount();
      });
    }

    function menuToggle() {
      document.querySelector(".burger").addEventListener("click", function() {
        document.querySelector(".page-header__nav").classList.toggle("is-show");
      })
    }
    
    function init() {      
      sliderInit();
      menuToggle();
    }

  }
  new App();
})()