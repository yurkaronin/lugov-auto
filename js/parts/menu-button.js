menuButton.onclick = function () {
  if (document.body.classList.contains('js-mob-menu-show')) {
    document.body.classList.remove('js-mob-menu-show');
  } else {
    document.body.classList.add('js-mob-menu-show');
  }
}
