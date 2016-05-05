module.exports = function (app) {
    var sobre = app.controllers.sobre;
      
    app.get('/sobre', sobre.index);
    app.get('/sobre/missao', sobre.missao);
    app.get('/sobre/valor', sobre.valor);
    app.get('/sobre/visao', sobre.visao);
};