$(document).ready(function () {

  let slider = $('#capabilitySlider').lightSlider({
    item: 3,
    loop: true,
    autoWidth: false,
    pager: false,
    slideMove: 1,
    slideMargin: 10,
    adaptiveHeight: true,
    useCSS: true,
    controls: false,
    centerSlide: true,
    onAfterSlide: function (el) {
      setTimeout(function(){
        el.children('li:not(.centerSlide)').css('transform','scale(.85)');
      },50);
      el.children('li.centerSlide').removeClass('centerSlide');
      el.children('li.active').next().addClass('centerSlide');
    },
    onSliderLoad: function (el) {
      setTimeout(function(){
        el.children('li:not(.centerSlide)').css('transform','scale(.85)');
      },50);
      $('#prevSlide').on('click', function(e){
        e.preventDefault();
        slider.goToPrevSlide();
      })
      $('#nextSlide').on('click', function(e){
        e.preventDefault();
        slider.goToNextSlide();
      })
    }
  });
  
  $('#logosSlider').lightSlider({
    item: 6,
    slideMove: 1,
    loop: true,
    auto: true,
    pager: false,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 1000,
    pause: 3000,
    slideMargin: 30,
    responsive: [
      {
        breakpoint:1200,
        settings: {
          item:5
        }
      },
      {
        breakpoint:992,
        settings: {
          item:4
        }
      },
      {
        breakpoint:768,
        settings: {
          item:3
        }
      },
      {
        breakpoint:560,
        settings: {
          item:2
        }
      }
    ]
  });

  $('#whatSaySlider').lightSlider({
    item: 1,
    slideMove: 1,
    loop: false,
    controls: false,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 1000,
    slideMargin: 0
  });
  
});
