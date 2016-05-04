module.exports = function () {
    var homeController = {
        index: function (req, res) {
            res.render('home/index');
        }
    }
    
    return homeController;
};