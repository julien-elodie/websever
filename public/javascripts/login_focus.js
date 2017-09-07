function login_username_focus() {
    var login_username_text = $('.login_username_text');
    var username = $('.username');

    login_username_text.css('display', 'inline');
    username.attr('placeholder', '');
}

function login_password_focus() {
    var login_password_text = $('.login_password_text');
    var password = $('.password');

    login_password_text.css('display', 'inline');
    password.attr('placeholder', '');
}

function login_username_blur() {
    var login_username_text = $('.login_username_text');
    var username = $('.username');

    if (!username.val()) {
        login_username_text.css('display', 'none');
        username.attr('placeholder', '用户名');
    }
}

function login_password_blur() {
    var login_password_text = $('.login_password_text');
    var password = $('.password');

    if (!password.val()) {
        login_password_text.css('display', 'none');
        password.attr('placeholder', '密码');
    }
}