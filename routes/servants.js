const express = require('express');
const router = express.Router();
const servantsCtrl = require('../controllers/servants');
const isLoggedIn = require('../config/auth');

// GET /servants
router.get('/', servantsCtrl.index);
// GET /servants/:id (show functionality)
router.get('/:id', servantsCtrl.show);

module.exports = router;