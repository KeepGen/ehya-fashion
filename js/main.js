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


// Подключение функции активации мобильного меню
var menuButton = $('.menu-button');
menuButton.on('click', function () {
  $(".navbar-bottom").toggleClass('navbar-bottom_visible');
  $("html").toggleClass('hide');
  $("body").toggleClass('hide');
  $('.navbar__mobile_fixed').toggleClass('hide');
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

function openModal(event) {
  event.preventDefault();
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass("modal__overlay_visible");
  $(targetModal).find(".modal__dialog").addClass("modal__dialog_visible");
  $('html').addClass('hide');
  $('body').addClass('hide');
  $('.navbar__mobile_fixed').addClass('hide');
}

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay_visible");
  modalDialog.removeClass("modal__dialog_visible");
  $('html').removeClass('hide');
  $('body').removeClass('hide');
  $('.navbar__mobile_fixed').removeClass('hide');
}

$(document).keyup(function (event) {
  if (event.which == '27') {
    $('.modal__overlay').removeClass('modal__overlay_visible');
    $('.modal__dialog').removeClass('modal__dialog_visible');
    $('html').removeClass('hide');
    $('body').removeClass('hide');
    $('.navbar__mobile_fixed').removeClass('hide');
  }
});




var validations = {
  email: [/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i, 'Please enter a valid email']
};
$(document).ready(function () {
  // Check all the input fields of type email. This function will handle all the email addresses validations
  $("input[type=email]").change(function () {
    // Set the regular expression to validate the email 
    validation = new RegExp(validations['email'][0]);
    // validate the email value against the regular expression
    if (!validation.test(this.value)) {
      // If the validation fails then we show the custom error message
      this.setCustomValidity(validations['email'][1]);
      return false;
    } else {
      // This is really important. If the validation is successful you need to reset the custom error message
      this.setCustomValidity('');
    }
  });
})