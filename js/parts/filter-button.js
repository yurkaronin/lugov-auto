filterButton.onclick = function () {
  if (document.body.classList.contains('js-mob-filter-show')) {
    document.body.classList.remove('js-mob-filter-show');
  } else {
    document.body.classList.add('js-mob-filter-show');
  }
}
