function login_submit() {
    var login = $(".login");
    var username = $(".username");
    var password = $(".password");
    // var username_hint = $('.username_hint');

    // init login's attribute
    login.attr("action", "");
    login.attr("method", "");

    if (username.val() == "" && password.val() == "") {
        alert("请填写用户名和密码!");
    } else if (username.val() == "") {
        alert("请填写用户名!");
    } else if (password.val() == "") {
        alert("请填写密码!");
    } else {
        login.attr("action", "../Youtube");
        login.attr("method", "post");
    }
}