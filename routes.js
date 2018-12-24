const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    console.log('Metodo get funcionando');
    });

module.exports = router;