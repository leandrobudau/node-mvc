module.exports = function (app) {
    irmaos = app.controllers.irmaos;
    
	app.get('/irmaos', irmaos.get);
	app.post('/irmaos', irmaos.post);
};