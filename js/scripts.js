// глобальные переменные
let menuButton = document.querySelector('.js-menu-btn');
let filterButton = document.querySelector('.js-filter-btn');


// функция подключения скриптов
function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

// подключаем скрипты
include("./js/parts/MicroModal.js");
include("./js/parts/menu-button.js");
include("./js/parts/filter-button.js");
include("./js/parts/sliders.js");
include("./js/parts/yandex-map.js");
