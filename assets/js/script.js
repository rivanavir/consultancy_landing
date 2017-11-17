$(document).ready(function () {

  // Cache selectors
  var lastId,
  topMenu = $("header"),
  topMenuHeight = topMenu.outerHeight()+3,
  // All list items
  menuItems = topMenu.find(".navbar-nav li"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function(){
    var item = $($(this).data("href"));
    if (item.length) { return item; }
  });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function(e){
    var href = $(this).data("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+3;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 500);
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function(){
    // Get container scroll position
    var fromTop = $(this).scrollTop()+topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function(){
      if ($(this).offset().top < fromTop)
        return this;
    });
    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .removeClass("active")
        .filter("[data-href='#"+id+"']").addClass("active");
    }
  });
  
  $('#topBanner').stellar();
  $('#serviceSect').stellar();
  $('#valueSection').stellar();
  $('#logosBlock').stellar();

  $('.navbar-nav li').on('click', function(){
    $('#mainNavbar').collapse('toggle');
  })
  
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
