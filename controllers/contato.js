module.exports = function () {
    contatoController = {
        index: function (req, res) {
            res.render('usuario/index');
        }
    };
    
    return contatoController;
};