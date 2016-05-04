module.exports = function () {
    contatoController = {
        index: function (req, res) {
            res.render('contato/index');
        }
    };
    
    return contatoController;
};