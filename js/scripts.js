// глобальные переменные
let menuButton = document.querySelector('.js-menu-btn');
let filterButton = document.querySelector('.js-filter-btn');
// let swiperPersonalCard = document.querySelector('.swiper-personal-card');


// функция подключения скриптов
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// подключаем скрипты
include("./js/parts/menu-button.js");
include("./js/parts/filter-button.js");

// скрипт инициализации слайдера для детальной карточки авто
if(document.querySelector('.swiper-personal-card')) {
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
};

let miniature = document.querySelectorAll('.full-card__gallery a');

for (let miniatureItem of miniature) {
  miniatureItem.onclick = function (e) {
    e.preventDefault();
    let test = miniatureItem.dataset.index;
    console.log(miniatureItem.dataset.index);
    // console.log('переключаем слайд');
    // swiperPersonalCard.slideTo(1);
    swiperPersonalCard.slideTo;
  }
}
