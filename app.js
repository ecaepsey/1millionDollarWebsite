var express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var port = 8999;

var app = express()

function checkAuth (req, res, next) {
    console.log('checkAuth ' + req.url);

    // don't serve /secure to those not logged in
    // you should add to this list, for each and every secure url
    if (req.url === '/secure' && (!req.session || !req.session.authenticated)) {
        res.render('unauthorised', { status: 403 });
        return;
    }

    next();
}

var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(function () {
//
//
//     // app.use(express.session({ secret: 'example' }));
//     app.use(bodyParser);
//     // app.use(checkAuth);
//
//     app.set('view engine', 'jade');
//     app.set('view options', { layout: false });
//
// });



app.post('/login', urlencodedParser,  function (req, res, next) {
    console.log('running')
    // you might like to do a database look-up or something more scalable here
    if (req.body.username && req.body.username === 'user' && req.body.password && req.body.password === 'pass') {
        res.json({success: true})
    } else {
        res.json({success: false})
        // req.flash('error', 'Username and password are incorrect');
        // res.redirect('/login');
    }

    res.json({success: false})

});


app.listen(port);
console.log('Node listening on port %s', port);
