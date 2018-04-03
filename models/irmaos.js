module.exports = function () {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var irmaos = new Schema({
		nome: String,
		sobrenome: String,
        endereco: String,
		telefone: String,
		celular: String,
		profissao: String,
		empresa: String,
        data_cad: {
            type: Date,
            default: Date.now
        }
    });
    
    return mongoose.model('irmaos', irmaos);
};
    




