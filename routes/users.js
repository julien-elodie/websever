var express = require('express');
var slide = require('./slide');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.render('user')
});
/* GET users listing. */
router.get("/validate", function(req, res, next) {
    slide.register(null, function(err, data) {
        if (err) {
            console.error(err);
            res.status(500);
            res.send(err);
            return;
        }

        if (!data.success) {
            req.session.failback = true;
            res.send(data);
        } else {
            req.session.failback = false;
            res.send(data);
        }
    });
});

router.post("/validate", function(req, res) {

    slide.validate(req.session.fallback, {
        geetest_challenge: req.body.geetest_challenge,
        geetest_validate: req.body.geetest_validate,
        geetest_seccode: req.body.geetest_seccode
    }, function(err, success) {

        if (err) {
            res.send({
                status: "error",
                info: err
            });

        } else if (!success) {

            res.send({
                status: "fail",
                info: '登录失败'
            });
        } else {

            res.send({
                status: "success",
                info: '登录成功'
            });
        }
    });
});

module.exports = router;