$(window).on("beforeunload", function() {
    var username = $(".username");
    username.val("");
});

function login_username_focus() {
    var login_username_text = $(".login_username_text");
    var username = $(".username");

    login_username_text.css("display", "inline");
    username.attr("placeholder", "");
}

function login_password_focus() {
    var login_password_text = $(".login_password_text");
    var password = $(".password");

    login_password_text.css("display", "inline");
    password.attr("placeholder", "");
}

function login_username_blur() {
    var login_username_text = $(".login_username_text");
    var username = $(".username");

    var username_hint_container = $(".username_hint_container");
    if (username.val() == "") {
        username_hint_container.html('<div class="username_hint">请填写用户名!</div>');
    } else if (!username.val()) {
        login_username_text.css("display", "none");
        username.attr("placeholder", "用户名");
    } else {
        username_input = username.val();
        data = {
            username: username_input
        };
        options = {
            type: "post",
            url: "../Youtube",
            data: data,
            dataType: "json",
            success: function(res) {
                username_hint_container.html("");
                // password.attr("alt", res.password);
            },
            error: function(res) {
                username_hint_container.html(
                    '<div class="username_hint" color="red">用户名错误!</div>'
                );
            }
        };
        $.ajax(options);
    }
}

function login_password_blur() {
    var login_password_text = $(".login_password_text");
    var username = $(".username");
    var password = $(".password");

    var password_hint_container = $(".password_hint_container");
    if (password.val() == "") {
        password_hint_container.html('<div class="password_hint">请填写密码!</div>');
    } else if (!password.val()) {
        login_password_text.css("display", "none");
        password.attr("placeholder", "密码");
    } else {
        username_input = username.val();
        password_input = password.val();
        data = {
            username: username_input,
            password: password_input
        };
        options = {
            type: "post",
            url: "../Youtube",
            data: data,
            dataType: "json",
            success: function(res) {
                password_hint_container.html("");
                // password.attr("alt", res.password);
            },
            error: function(res) {
                password_hint_container.html(
                    '<div class="username_hint" color="red">密码错误!</div>'
                );
            }
        };
        $.ajax(options);
    }
}