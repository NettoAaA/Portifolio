const swiperPort = new Swiper('.swiper-portfolio', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    },

    navigation: {
      nextEl: '.swiper-button-next-port',
      prevEl: '.swiper-button-prev-port',
    },


  });