// глобальные переменные
let menuButton = document.querySelector('.js-menu-btn');
let filterButton = document.querySelector('.js-filter-btn');
let modalFilter = document.querySelector('#modal-filter');
let mobileFilterBtn = document.querySelector('.js-mod-filter-show');
let AllProductSlider = document.querySelector('.js-type-products-slider');

// функция подключения скриптов
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// подключаем скрипты
include("./js/parts/MicroModal.js");
include("./js/parts/menu-button.js");
include("./js/parts/sliders.js");
include("./js/parts/yandex-map.js");
include("./js/parts/filter-button.js");


// Новый блок кода для кастомного select
if (document.querySelector('.js-select-brand')) {
  console.log("Селект есть!");

  const defaultSelect = () => {
    const element = document.querySelector('.js-select-brand');
    console.log(element);
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  };

  defaultSelect();

} else {
  console.log("Селекта на странице нет!");
};

if (document.querySelector('.js-select-bodywork')) {
  console.log("Селект есть!");

  const defaultSelectTwo = () => {
    const element = document.querySelector('.js-select-bodywork');
    console.log(element);
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  };

  defaultSelectTwo();

} else {
  console.log("Селекта на странице нет!");
};

// селект в мобильном фильтре
if (document.querySelector('.js-select-brand-modal')) {
  console.log("Селект есть!");

  const defaultSelectBrandModal = () => {
    const element = document.querySelector('.js-select-brand-modal');
    console.log(element);
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  };

  defaultSelectBrandModal();

} else {
  console.log("Селекта на странице нет!");
};

if (document.querySelector('.js-select-bodywork-modal')) {
  console.log("Селект есть!");

  const defaultSelectBodyModal = () => {
    const element = document.querySelector('.js-select-bodywork-modal');
    console.log(element);
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
  };

  defaultSelectBodyModal();

} else {
  console.log("Селекта на странице нет!");
};


// кнопка показать все фильтры
if (document.querySelector('.js-more-filter')) {
  const element = document.querySelector('.js-more-filter');
  element.addEventListener('click', () => {
    if (document.body.classList.contains('js-mob-filter-full')) {
      document.body.classList.remove('js-mob-filter-full');

      element.querySelector('span').innerHTML = 'Все фильтры';
    } else {
      document.body.classList.add('js-mob-filter-full');
      element.querySelector('span').innerHTML = 'Свернуть фильтры'
    }

  });
};
