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
include("./js/parts/menu-button.js");
include("./js/parts/filter-button.js");
include("./js/parts/sliders.js");


document.addEventListener("DOMContentLoaded", () => {

  MicroModal.init({
    openTrigger: 'data-custom-open',
    closeTrigger: 'data-custom-close',
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
  })
});

// Интерактивная карта с гео меткой
let center = [45.078136,39.014704];

function init() {

  let map = new ymaps.Map("map", {
    center: center, // ваши данные
    zoom: 17
  });

  let placemarRkschool = new ymaps.Placemark([45.078136,39.014704], {}, {
    iconLayout: 'default#image',
    /* говорим что будем отображать на карте в качестве геометки  */
    iconImageHref: './img/contacts/geo-mark.svg',
    /* указываем пусть к картинке на нашем сайте  */
    iconImageSize: [40, 50],
    /* размеры картинки  */
    iconImageOffset: [-42, -42]
  });

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemarRkschool);

//   placemarRkschool.events
//     .add('mouseenter', function (e) {
//       e.get('target').options.set('iconImageHref', './img/icons/balun-3.svg');
//     })
//     .add('mouseleave', function (e) {
//       e.get('target').options.set('iconImageHref', './img/icons/balun-2.svg');
//     });
}

ymaps.ready(init);
