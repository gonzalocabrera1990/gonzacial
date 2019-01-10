const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('./src/server/models/schemaUser');
router.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    console.log('Metodo get funcionando');
   
        User.find({})
        .then((data)=>{
           res.statusCode = 200,
           res.setHeader('Content-Type', 'application/json');
           res.json(data);
              
        }, (err) =>next(err))
        .catch((err)=>{
            next(err);
        })
    });

module.exports = router;