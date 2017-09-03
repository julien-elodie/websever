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
          result += '<li class="music_card_li"><a id="music_card" href="javascript:;" onclick="javascript:post('+ res[i].id + ')" class="music_card">' +
            '<div class="music_card_img_container"><img src='+ res[i].imgurl + ' class="music_card_img"><div class="music_card_poi">' +
            '<img src="/images/location.png" class="music_card_poi_logo"><span class="music_card_poi_text">' + res[i].poi + '</span></div></div>' +
            '<div class="music_card_info"><div class="music_card_title">' + res[i].name + '</div><div class="music_card_auther">' + res[i].username + '</div>' +
            '<div class="music_card_time">' + res[i].date + '</div></div></a></li>';
        }
        $('#music_card_ul_container').append(result);
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