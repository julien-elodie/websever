window.onresize = function () {
  // 获取窗口宽度
  if (window.innerWidth) {
    winWidth = window.innerWidth;
  }
  else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth;
  }
  // 动态隐藏侧边栏
  var main_menu = document.getElementById('main_menu');
  main_menu.setAttribute('display', 'none');
};