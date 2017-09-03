$(document).ready(function () {
  options = {
    type: 'get',
    url: '/youtube/li?page=1',
    dataType: 'json',
    success: function (res) {
      if (res) {
        var result = '';
        for (var i = 0; i < res.length; i++) {
          result += '<li class="play_more_li"><a href="javascript:;" onclick="javascript:post('+ res[i].id + ')" class="play_more">' +
            '<img src=' + res[i].imgurl +' class="play_more_img">' +
            '<div class="play_more_info">' +
            '<div class="play_more_title">'+ res[i].name + '</div>' +
            '<div class="play_more_auther">'+ res[i].username +'</div>' +
            '<div class="play_more_time">'+ res[i].date +'</div></div></a></li>';
          if (i === 0) {
            result += '<hr>'
          }
        }
        $('#play_more_ul_container').append(result);
      }
    },
    error: function (xhr, type, err) {
      // alert('error type:' + type + '\nstatus:' + xhr.status + '\nreadyStatus:' + xhr.readyState);
      // view_more_text.innerText = '再怎么找也没有啦~';
    }
  };
  $.ajax(options);
});

function click_more() {
  var view_more_text = document.getElementById('view_more_text');
  var page = parseInt(view_more_text.getAttribute('page')) + 1;
  view_more_text.setAttribute('page', page);
  options = {
    type: 'get',
    url: '/youtube/li?page='+String(page),
    dataType: 'json',
    success: function (res) {
      if (res) {
        var result = '';
        for (var i = 0; i < res.length; i++) {
          result += '<li class="play_more_li"><a href="javascript:;" onclick="javascript:post('+ res[i].id + ')" class="play_more">' +
            '<img src=' + res[i].imgurl +' class="play_more_img">' +
            '<div class="play_more_info">' +
            '<div class="play_more_title">'+ res[i].name + '</div>' +
            '<div class="play_more_auther">'+ res[i].username +'</div>' +
            '<div class="play_more_time">'+ res[i].date +'</div></div></a></li>';
        }
        $('#play_more_ul_container').append(result);
      }
    },
    error: function (xhr, type, err) {
      // alert('error type:' + type + '\nstatus:' + xhr.status + '\nreadyStatus:' + xhr.readyState);
      // view_more_text.innerText = '再怎么找也没有啦~';
      $('.view_more').hide();
      alert('再怎么找也没有啦~');
    }
  };
  $.ajax(options);
}