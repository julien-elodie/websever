var handler = function(captchaObj) {;
    // captchaObj.appendTo('#captcha');
    captchaObj.onReady(function() {
        $("#wait").hide();
    }).onSuccess(function() {
        var result = captchaObj.getValidate();
        if (!result) {
            return alert('请完成验证');
        }
        $.ajax({
            url: '../users/validate',
            type: 'POST',
            dataType: 'json',
            data: {
                username: $('.username').val(),
                password: $('.password').val(),
                geetest_challenge: result.geetest_challenge,
                geetest_validate: result.geetest_validate,
                geetest_seccode: result.geetest_seccode
            },
            success: function(data) {
                if (data.status === 'success') {
                    alert('登录成功');
                } else if (data.status === 'fail') {
                    alert('登录失败，请完成验证');
                    captchaObj.reset();
                }
            }
        });
    });
    $('.submit').click(function() {
        captchaObj.verify();
    });
};

$.ajax({
    url: "../users/validate?t=" + (new Date()).getTime(),
    type: "get",
    dataType: "json",
    success: function(data) {

        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success,
            new_captcha: data.new_captcha,

            product: "bind",
            width: "300px"
        }, handler);
    }
});