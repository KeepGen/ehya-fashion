// Слайдер отзывов
$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    autoplay: {
      delay: 7000,
    },
    loop: true,
    disableOnInteraction: true,

    pagination: {
      el: '.swiper-pagination',
    },
  });

  var mySwiper = document.querySelector('.swiper-container').swiper
  $(".swiper-container").mouseenter(function () {
    mySwiper.autoplay.stop();
  });

  $(".swiper-container").mouseleave(function () {
    mySwiper.autoplay.start();

  });
});


// Слайдер в Stories
var mySwiper1 = new Swiper('.stories__slider', {
  // Optional parameters
  slideClass: "stories__slider_wrapper_slide",
  wrapperClass: "stories__slider_wrapper",
  nextEl: '.stories__text_buttons_right',
  prevEl: '.stories__text_buttons_left',
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 18,

  // Navigation arrows
  navigation: {
    nextEl: '.stories__text_buttons_right',
    prevEl: '.stories__text_buttons_left',
  },
});


// Переключение табов
$(document).ready(function () {
  var trendingTabs = $(".trending__tabs");
  var trendingContent = $(".trending__content");

  trendingTabs.on("click", function (event) {
    var activeContent = $(this).attr("data-target");
    trendingTabs.removeClass("trending__tabs_active");
    trendingContent.removeClass("trending__content_active");
    $(activeContent).addClass("trending__content_active");
    $(this).addClass("trending__tabs_active");
  });
});



// Вызов мобильного меню
$(document).ready(function () {
  var menuButton = $('.navbar__button');
  menuButton.on('click', function () {
    $(".navbar__menu_group").toggleClass('navbar__menu_group_visible');
  });
});

// Закрытие мобильного меню через X
$(document).ready(function () {
  var menuButton = $('.navbar__menu_close');
  menuButton.on('click', function () {
    $(".navbar__menu_group").toggleClass('navbar__menu_group_visible');
  });
});

// Закрытие мобильного меню через Esc
$(document).keyup(function (e) {
  if ("Escape" === e.key || 27 === e.keyCode) {
    event.preventDefault();
    var o = $(".navbar__menu_group");
    o.removeClass("navbar__menu_group_visible")
  }
});