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

  const modalWindow = document.querySelector('.modal');
  const buttonModal = document.querySelector('.main_button_play');

  buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
  });

  modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal_inner');

    if(!isModal) {
      modalWindow.classList.remove('active');
    }
  });

  //need to fix bugs: 1) stop audio when exit video 2) show header back in the desktop version after open-closing burger in mobile version
