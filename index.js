const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {mongoose} = require('./src/server/base');

//Settings
app.set('port', process.env.PORT || 5000);
//require('./src/server/base');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
                    


//Statics Files
app.use(express.static(path.join(__dirname, 'build')));

//Routes
app.use('/', require('./siginIn'));
app.use('/formulario', require('./signup'));
app.use('/start', require('./start'));
app.use('/data-login', require('./routes'));

//Server Listenner
app.listen(app.get('port'), () =>{
    console.log(`El servidor se inicio en el puerto ${app.get('port')}`);
});