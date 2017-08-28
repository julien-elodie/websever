$(document).ready(function () {
  var winWidth = document.body.scrollWidth;

  var main_menu = document.getElementById('main_menu');
  var main_page = document.getElementById('main_page');

  if (winWidth <= 1100) {
    main_menu.style.position = 'static';
    main_page.style.position = 'static';

    main_page.style.width = '100%';
    main_menu.style.display = 'none';
  } else if (winWidth > 1100) {
    main_menu.style.position = 'static';
    main_page.style.position = 'static';

    main_page.style.width = '80%';
    main_menu.style.display = 'inline-block';
  }
});