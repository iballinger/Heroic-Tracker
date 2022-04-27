const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    content: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const servantSchema = new Schema ({
    id: Number,
    collectionNo: Number,
    type: String,
    name: String,
    flag: String,
    className: String,
    attribute: String,
    rarity: Number,
    atkMax: Number,
    hpMax: Number,
    face: String,
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Servant', servantSchema);