$(document).ready(function () {

  $(window).on('load scroll', function () {
    let scrolled = $(this).scrollTop() + 110;
    let scrollSection = [topBanner, serviceSect, valueSection, logosBlock];

    $.each($(scrollSection), function(i){
      let elem = this;
      let windowHeight = $(window).height();
      let elHeight = $(this).height() + 110;
      let elOffset = $(this).offset().top + 110;
      // $(this).css('background-position','center ' + (-scrolled / 5) + 'px');
      // console.log(i, scrolled, elHeight);
      // if( $(this).offset().top <= scrolled && scrolled < elHeight ){
      if( $(this).offset().top + scrollSection <= scrolled){
        console.log(i, scrolled, elHeight);
      }
    })
    // $(...scrollSection).css('background-position', 'center ' + (-scrolled / 5) + 'px');
  });
  
  let slider = $('#capabilitySlider').lightSlider({
    item: 3,
    loop: false,
    autoWidth: false,
    pager: false,
    slideMove: 1,
    slideMargin: 10,
    adaptiveHeight: true,
    useCSS: true,
    controls: false,
    centerSlide: true,
    responsive: [
      {
        breakpoint:769,
        settings: {
          item:1
        }
      },
    ],
    onBeforeSlide: function (el) {
      el.children('li.centerSlide').removeClass('centerSlide');
      setTimeout(function(){
        el.children('li.active').next().addClass('centerSlide');
      },100);
    },
    onAfterSlide: function (el) {
      setTimeout(function(){
        el.children('li.active').next().addClass('centerSlide');
      },100);
    },
    onSliderLoad: function (el) {
      setTimeout(function(){
        el.children('li:not(.centerSlide)').css('transform','scale(.85)');
      },50);
      el.children('li.active').next().addClass('centerSlide');
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
    controls: false,
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
