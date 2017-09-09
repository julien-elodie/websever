function login_submit() {
    var login = $(".login");
    var username = $(".username");
    var password = $(".password");
    var password_hint_container = $(".password_hint_container");

    // init login's attribute
    login.attr("action", "");
    login.attr("method", "");

    if (password.val() != "" && password_hint_container.html() == "") {
        login.attr("action", "../Youtube");
        login.attr("method", "post");
    }
}