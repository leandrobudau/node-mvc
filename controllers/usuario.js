module.exports = function (app) {

    var UsuarioModelo = app.models.usuarios;

    var usuarioController = {
        index: function (req, res) {
            UsuarioModelo.find(function (err, data) {
                if (err)
                    console.error('Ocorreu um erro ao tentar encontrar o documento');
                res.render('usuario/index', { lista: data });
            });
        },
        create: function (req, res) {
            res.render('usuario/create');
        },
        lista: function (req, res) {
            UsuarioModelo.find(function (err, user) {
                if (err) console.error('Ocorreu um erro ao tentar encontrar o documento user')
                res.json(user);
            });
        },
        cadastrar: function (req, res) {
            var model = new UsuarioModelo(req.body);
            model.save(function (err, data) {
                if(err)
                    console.error('Ocorreu um erro ao tentar salvar');
                else
                    res.redirect('/usuario');
            });
        },
        remover : function (req, res) {
            UsuarioModelo.remove({
                _id: req.params.id
            }, function (err, data) {
               res.json(data); 
            });
        }
    };

    return usuarioController;
};