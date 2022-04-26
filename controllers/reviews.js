const Servant = require('../models/servant');

module.exports = {
    create,
    delete: deleteReview,
}

function deleteReview(req, res, next) {
    Servant.findOne({'reviews._id':req.params.id, 'reviews.user': req.user._id}).then(function(servant) {
        if (!servant) return res.redirect('/servants');
        servant.reviews.remove(req.params.id);
        servant.save().then(function() {
            res.redirect(`/servants/${servant._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}

function create(req, res) {
    Servant.findById(req.params.id, function(err, servant) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        servant.reviews.push(req.body);
        servant.save(function(err) {
            res.redirect(`/servants/${req.params.id}`);
        });
    });
}