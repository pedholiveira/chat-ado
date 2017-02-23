var app = require('./config/express')();
var routes = require('./app/routes/routes')(app);

app.listen(3000, function() {
    console.log('Servidor rodando!');
});