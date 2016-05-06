module.exports = function (app) {
    var usuario = app.controllers.usuario;
    
    app.get('/usuario', usuario.index);
    app.post('/usuario/', usuario.cadastrar);
    app.delete('/usuario/:id', usuario.remover);
};