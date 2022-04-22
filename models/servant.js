const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servantSchema = new Schema ({
    id: Number,
    collectionNo: Number,
    name: String,
    flag: String,
    className: String,
    attribute: String,
    rarity: Number,
    atkMax: Number,
    hpMax: Number,
    face: String,
});

module.exports = mongoose.model('Servant', servantSchema);