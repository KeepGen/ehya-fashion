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