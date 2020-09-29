let menuElem = document.getElementById('menu');
    let titleElem = menuElem.querySelector('.menu-mobile__title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };