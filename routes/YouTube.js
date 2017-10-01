var express = require("express");
var pg = require("pg");
var router = express.Router();

router.get("/", function(req, res, next) {
    /*congfig*/
    var config = {
        user: "julien-elodie",
        database: "videoinfodb",
        password: "wyq2644756656",
        port: "5432"
    };

    var client = new pg.Client(config);

    client.connect(function(err) {
        if (err) {
            return console.error("could not connect to postgres", err);
        }
        client.query("select * from videobaseinfo;", function(err, result) {
            if (err) {
                return console.error("error running query", err);
            }
            res.locals.datasets = result.rows.slice(0, 5);
            res.render("YouTube");
        });
    });
});

router.post("/", function(req, res, next) {
    var user_info = req.body;
    if (user_info.password) {
        var username = user_info.username;
        var password = user_info.password;
        var config = {
            user: "julien-elodie",
            database: "videoinfodb",
            password: "wyq2644756656",
            port: "5432"
        };

        var client = new pg.Client(config);

        client.connect(function(err) {
            if (err) {
                return console.error("could not connect to postgres", err);
            }

            client.query(
                "select * from userinfo where username = '" + String(username) + "' and password = '" + String(password) + "';",
                function(err, result) {
                    if (err) {
                        return console.error("error running query", err);
                    } else {
                        res.send(result.rows[0]);
                    }
                }
            );
        });
    } else if (user_info.username) {
        var username = user_info.username;
        var config = {
            user: "julien-elodie",
            database: "videoinfodb",
            password: "wyq2644756656",
            port: "5432"
        };

        var client = new pg.Client(config);

        client.connect(function(err) {
            if (err) {
                return console.error("could not connect to postgres", err);
            }

            client.query(
                "select * from userinfo where username = '" + String(username) + "';",
                function(err, result) {
                    if (err) {
                        return console.error("error running query", err);
                    } else {
                        res.send(result.rows[0]);
                    }
                }
            );
        });
    }
});

router.get("/li", function(req, res, next) {
    /*congfig*/
    var config = {
        user: "julien-elodie",
        database: "videoinfodb",
        password: "wyq2644756656",
        port: "5432"
    };

    var client = new pg.Client(config);

    client.connect(function(err) {
        if (err) {
            return console.error("could not connect to postgres", err);
        }
        client.query("select * from videobaseinfo;", function(err, result) {
            if (err) {
                return console.error("error running query", err);
            }
            if (req.query.page <= result.rows.length / 5) {
                var page = req.query.page;
                res.send(result.rows.slice(5 * (page - 1), 5 * page));
            } else {
                res.send(null);
            }
        });
    });
});

module.exports = router;