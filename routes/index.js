var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/servants');
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/servants',
    failureRedirect : '/servants'
  }
));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/servants');
});

module.exports = router;
