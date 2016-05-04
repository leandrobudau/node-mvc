module.exports = function () {
    var sobreController = {
        index: function (req, res) {
           res.render('sobre/index'); 
        },
        missao: function (req, res) {
            res.render('sobre/missao');
        },
        valor: function (req, res) {
            res.render('sobre/valor');
        },
        visao: function (req, res) {
            res.render('sobre/visao');
        }
    };
    
    return sobreController;
};