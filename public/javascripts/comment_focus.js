$(document).ready(function () {
  var comment_input_container = $('.comment_input_container');
  var user_img = $('.user_img');
  var user_comment = $('.user_comment');
  user_comment.css('width', String(comment_input_container.width() - user_img.width() - 5) + 'px');
});

function comment_focus() {
  var user_img = $('.user_img');
  var user_comment = $('.user_comment');
  var comment_commit = $('.comment_commit');
  user_img.css('width','24px');
  user_img.css('height','24px');
  user_comment.css('width', '100%');
  user_comment.css('height', '64px');
  comment_commit.css('display', 'inline');
}

function comment_blur() {
  var comment_input_container = $('.comment_input_container');
  var user_img = $('.user_img');
  var user_comment = $('.user_comment');
  var comment_commit = $('.comment_commit');
  if (!user_comment.val()){
    user_img.css('width','48px');
    user_img.css('height','48px');
    user_comment.css('width', String(comment_input_container.width() - user_img.width() - 5) + 'px');
    user_comment.css('height', '48px');
    comment_commit.css('display', 'none');
  }
}