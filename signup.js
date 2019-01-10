const express = require('express');
const router = express.Router();
const path = require('path');
var passport = require('passport');

const User = require('./src/server/models/schemaUser');


router.use(express.json());

router.route('/')
.get((req, res) => {
    res.sendFile(path.resolve( __dirname, 'build', 'index.html'));
    console.log('Metodo get funcionando');
    })


.post( (req, res, next) => {
        User.register(new User({username: req.body.username}), 
          req.body.password, (err, user) => {
          if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
          }
          else {
              if (req.body.country)
              user.country = req.body.country;
              if (req.body.date)
              user.date = req.body.date;
              if (req.body.sex)
              user.sex = req.body.sex;           
              user.save((err, user) => {
              if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.json({err: err});
                return ;
              }
              passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({success: true, status: 'Registration Successful!'});
              });
            });
          }
        });
      });
      

module.exports = router;