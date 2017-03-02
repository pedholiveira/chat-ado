module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('login');
    });

    app.post('/chat', function(req, res) {
        var apelido = req.session.apelido;
        if(!apelido) {
            apelido = req.body.apelido;
            req.session.apelido = apelido;
        }

        res.render('chat', { apelido: apelido});
    });
};