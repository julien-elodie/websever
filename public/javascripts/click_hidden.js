function click_hidden() {
  var winWidth = document.body.scrollWidth;

  var main_menu = document.getElementById('main_menu');
  var main_page = document.getElementById('main_page');

  if (main_menu.style.display === 'none') {
    if (winWidth <= 1100) {
      main_menu.style.position = 'absolute';
      main_menu.style.left = '0';
      // main_page.style.position = 'absolute';

      main_menu.style.zIndex = '100';
      main_page.style.zIndex = '0';

      main_page.style.width = '100%';
      main_menu.style.display = 'inline-block';
    } else {
      main_menu.style.position = 'static';
      main_page.style.position = 'static';

      main_page.style.width = '80%';
      main_menu.style.display = 'inline-block';
    }
  } else {
    main_menu.style.position = 'static';
    main_page.style.position = 'static';

    main_page.style.width = '100%';
    main_menu.style.display = 'none';
  }
}