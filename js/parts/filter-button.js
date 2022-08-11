
if (filterButton) {
  filterButton.addEventListener('click', (event) => {
    if (document.body.classList.contains('js-mob-filter-show')) {
      document.body.classList.remove('js-mob-filter-show');
      MicroModal.close('modal-filter');
      document.body.style.overflow = 'initial';
    } else {
      document.body.classList.add('js-mob-filter-show');
      MicroModal.show('modal-filter');
      document.body.classList.remove('js-mob-menu-show');
    }
  });

  mobileFilterBtn.addEventListener('click', (event) => {
    document.body.classList.add('js-mob-filter-show');
    MicroModal.show('modal-filter');

  });
}

