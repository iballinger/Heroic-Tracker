require('dotenv').config();
require('./config/database');

const Servant = require('./models/servant');

const data = require('./data');

const p1 = Servant.deleteMany({});

Promise.all([p1])
    .then(function() {
        return Servant.create(data.servants);
    })