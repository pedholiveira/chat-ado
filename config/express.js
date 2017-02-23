var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use('/assets', express.static('assets'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

module.exports = function() {
    console.log('Express carregado.');
    return app;
}