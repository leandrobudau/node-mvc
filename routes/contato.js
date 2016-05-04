module.exports = function (app) {
    contato = app.controllers.contato;
    
    app.get('/contato', contato.index);
};