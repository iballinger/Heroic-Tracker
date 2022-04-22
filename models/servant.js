const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servantSchema = new Schema ({
    name: String,
    class: String,
});

module.exports = mongoose.model('Servant', servantSchema);