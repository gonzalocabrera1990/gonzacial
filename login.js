const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
var authenticate = require('./authenticate');
router.use(express.json());

router.route('/')
.get( (req, res) => {
    res.sendFile(path.resolve( __dirname, 'build', 'index.html'));
    console.log('Metodo get funcionando');
    })

.post( passport.authenticate('local'), (req, res) => {
        var token = authenticate.getToken({_id: req.user._id});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, token: token, status: 'You are successfully logged in!'});
      });

router.get('/logout', (req, res, next) => {
        if (req.session) {
          req.session.destroy();
          res.clearCookie('session-id');
          res.redirect('/');
        }
        else {
          var err = new Error('You are not logged in!');
          err.status = 403;
          next(err);
        }
      });

module.exports = router;