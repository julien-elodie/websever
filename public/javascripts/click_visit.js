$('.music_card').onclick = function (err) {
  if (err) {
    console.error('error requiring request', err)
  }

  // var id = $('music_card').alt();
  var data = {
      'data': {
        'id': 1
      }
    };
  $.ajax(
    {
      type: 'post',
      utl: '../videos',
      contentType:"application/json",
      dataType: 'json',
      data : JSON.stringify(data),
      success: function (data) {
        if (data) {

        }
      },
      error: function () {
        return alert('failed');
      }
    }
  );
};