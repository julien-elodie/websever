window.onload = function () {
  if (window.innerWidth) {
    winWidth = window.innerWidth;
  }
  else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth;
  }

  var main_menu = document.getElementById('main_menu');
  var main_page = document.getElementById('main_page');

  if (winWidth <= 1020) {
    main_menu.style.display = 'none';
    main_page.style.width = winWidth + 'px';
  }
  if (winWidth > 1020) {
    main_menu.style.display = 'inline-block';
    main_page.style.width = (document.body.scrollWidth - 220) + 'px';
  }
};