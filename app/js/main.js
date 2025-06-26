// WOW JS Конфликтует с оверфлоу хайден на бади или секций
window.onscroll = function showHeader() {
  let header = document.querySelector('.header');
  if (window.pageYOffset > 500) {
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}


$(function () {

  $('.menu__btn').on('click', (function () {
    if (!$('.nav').hasClass('active')) {
      $('.nav').addClass('active');
      $('.menu__btn').addClass('active');
      $('body').addClass('menu-opened');
      // $('.menu__list-drop').addClass('active');
      // $('.menu__list-drop').on('click', (e) => {
      //   e.target.classList.toggle('active');
      // })

    } else {
      $('.nav').removeClass('active');
      $('.menu__btn').removeClass('active');
      $('body').removeClass('menu-opened');
      // $('.menu__list-drop').removeClass('active');
      // $('.menu__list-drop').on('click', (e) => {
      //   e.target.classList.toggle('active');
      // })
    }


  }));



  $('.product__item').each((index, wrapper) => {
    const navSlider = $(wrapper).find('.slider-nav');
    const forSlider = $(wrapper).find('.slider-for');
    $(forSlider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: navSlider
    });
    $(navSlider).slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: $(wrapper).find('.slick-prev'),
      nextArrow: $(wrapper).find('.slick-next'),
      asNavFor: forSlider,
      dots: true,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [{
        breakpoint: 1850,
        settings: {
          slidesToShow: 4,
          dots: true,
        }
      },
      {
        breakpoint: 1351,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 2,
          dots: true,
          centerMode: false,
        }
      },
      ]
    });
  })



  $('.questions__item').on('click', (function () {
    $(this).find('.questions__item-title--btn').addClass('active');
    $(this).siblings().find('.questions__item-title--btn').removeClass('active');

    $(this).find('.questions__item-text').show(500);
    $(this).siblings().find('.questions__item-text').hide(500);

  }));




});
