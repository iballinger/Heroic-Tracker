const Servant = require('../models/servant');

module.exports = {
    create,
    delete: deleteReview,
    // edit,
    update,
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

// function edit(req,res) {
//     Servant.findOne({'reviews._id': req.params.id}, function(err,servant) {
//         const review = servant.reviews.id(req.params.id);
//         res.render('reviews/edit', {review});
//     });
// }

function update(req,res) {
    console.log("Reviews update hit.");
    Servant.findOne({'reviews._id':req.params.id}, function(err, servant) {
        const reviewSubdoc = servant.reviews.id(req.params.id);
        console.log(reviewSubdoc);
        if(!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/servants/${servant._id}`);
        reviewSubdoc.content = req.body.content;
        servant.save(function(err) {
            res.redirect(`/servants/${servant._id}`);
        });
    });
}