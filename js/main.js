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