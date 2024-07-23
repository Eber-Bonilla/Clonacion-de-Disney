var swiper = new Swiper(".mySwiper", {
    spaceBetween: 25,
    centeredSlides: true,
    effect: 'coverflow',
    slidesPerView: 3,
    loop: true,
    createElements: true,
    pagination: true,

    breakpoints: {
      140: {
        slidesPerView: 1.2,
      },
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
