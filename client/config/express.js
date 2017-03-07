var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressSession = require('express-session');

module.exports = function() {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use('/assets', express.static('assets'));
    app.use('/node_modules', express.static('node_modules'));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(expressSession({ secret: 'chat-ado secret', saveUninitialized: false, resave: true }));

    load('routes', {cwd: 'app'})
        .into(app);

    return app;
}