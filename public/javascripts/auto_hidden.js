$(window).resize(function () {
  // 获取窗口宽度
  var winWidth = document.body.scrollWidth;

  // 动态隐藏侧边栏
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