const swiper = new Swiper('.main-slider', {
    // Optional parameters
    spaceBetween: 30,
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.main-slider-arrow',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
    }
  });

  let burger = document.querySelector('.menu_burger');
  let closeMenu = document.querySelector('.header_menu_close');
  let menuMobile = document.querySelector('.header');

  burger.addEventListener('click', () => {
    menuMobile.style.display = 'block';
  })

  closeMenu.addEventListener('click', () => {
    menuMobile.style.display = 'none';
  })