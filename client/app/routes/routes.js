module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('login');
    });

    app.post('/login', function(req, res) {
        var username = req.body.username;
        req.session.username = username;
        res.redirect('/chat');
    });

    app.get('/chat', function(req, res) {
        var username = req.session.username;
        res.render('chat', { username: username });
    });
};