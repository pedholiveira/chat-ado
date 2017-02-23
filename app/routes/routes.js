module.exports = function(app) {
    app.get('/login', function (req, res) {
        res.render('login');
    })
    .get('/chat', function (req, res) {
        res.render('chat');
    });
};