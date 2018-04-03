

module.exports = function (app) {	
	
	let irmaosModels = app.models.irmaos;

    const irmaosController = {
        get: function (req, res) {
			irmaosModels.find((err, data) =>{
				if(err) {
					res.status(500);
					res.json(err);
				}
				res.status(200);
				res.json(data);
			});
			
		},
		post: function (req, res) {
			const model = new irmaosModels(req.body);
            model.save(function (err, data) {
                if(err)
					res.status(500),
					res.json(err);
				else
					res.status(200);
                    res.json(data);
            });
        }
    };
    return irmaosController;
};