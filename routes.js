var util = require('util');

module.exports = function (app) {

    app.get('/', function (req, res, next) {
        res.render('index');
    });

    app.get('/welcome', function (req, res, next) {
        res.render('welcome');
    });

    app.get('/secure', function (req, res, next) {
        res.render('secure');
    });

    app.get('/login', function (req, res, next) {
        res.render('login', { flash: req.flash() } );
    });



    app.get('/logout', function (req, res, next) {
        delete req.session.authenticated;
        res.redirect('/');
    });

};
