// скрипт инициализации слайдера для детальной карточки авто
if (document.querySelector('.swiper-personal-card')) {
  let miniature = document.querySelectorAll('.full-card__gallery a');

  let swiperPersonalCard = new Swiper(".swiper-personal-card", {
    pagination: {
      el: ".swiper-personal-card .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-personal-card .swiper-button-next",
      prevEl: ".swiper-personal-card .swiper-button-prev",
    },
  });

  for (let i = 0; i < miniature.length; i++) {
    miniature[i].setAttribute('data-index', i);
    miniature[i].addEventListener('click', (event) => {
      event.preventDefault();
      swiperPersonalCard.slideTo(event.target.getAttribute('data-index'));
    })
  }
};

// скрипт инициализации мини-слайдеров в анонсах
if (document.querySelector('.card-item-slider')) {
  const sliderCards = document.querySelectorAll('.card-item');


  for (let i = 0; i < sliderCards.length; i++) {
    if (sliderCards[i].querySelector('.card-item-slider__container')) {
      sliderCards[i].querySelector('.card-item-slider__container').classList.add(`card-gallery-${i}`);
      let swiperTest = new Swiper(`.card-item-slider__container.card-gallery-${i}`, {});

      const arrItemNav = sliderCards[i].querySelectorAll('.card-item-navigation__item');

      for (let i = 0; i < arrItemNav.length; i++) {
        arrItemNav[i].setAttribute('data-number', i);
      };

      sliderCards[i].querySelector('.card-item-navigation').addEventListener('mouseover', (event) => {
        if (event.target.classList.contains('card-item-navigation__item')) {
          sliderCards[i].querySelectorAll('.card-item-navigation__item').forEach(elem => {
            elem.classList.remove('card-item-navigation__item--active');
          });

          event.target.classList.add('card-item-navigation__item--active');
          swiperTest.slideTo(event.target.getAttribute('data-number'));
        }

      });
    }
  };
};
