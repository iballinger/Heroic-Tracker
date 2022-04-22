const express = require('express');
const router = express.Router();
const servantsCtrl = require('../controllers/servants');
const isLoggedIn = require('../config/auth');

// GET /servants
router.get('/', servantsCtrl.index);
router.get('/new', isLoggedIn, servantsCtrl.new);
// GET /servants/:id (show functionality)
router.get('/:id', servantsCtrl.show);
router.post('/', isLoggedIn, servantsCtrl.create);

module.exports = router;