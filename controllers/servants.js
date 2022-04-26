const Servant = require('../models/servant');

module.exports = {
    index,
    show,
    create,
    new: newServant,
}

function index(req,res) {
    Servant.find({}, function(err,servants) {
        res.render('servants/index', {title: 'All Servants', servants});
    });
}

function show(req,res) {
    Servant.findById(req.params.id).exec(function(err, servant) {
        res.render('servants/show', {title: 'Servant Detail', servant, });
    });
}

function create(req,res) {
    let servant = new Servant(req.body);
    servant.save(function(err) {
        if (err) return res.redirect('/servants');
        console.log(servant);
        res.redirect(`/servants/${servant._id}`);
    });
}

function newServant(req,res) {
    res.render('servants/new', {title: 'Add Servant'});
}