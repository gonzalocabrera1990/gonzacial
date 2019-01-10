const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const {mongoose} = require('./src/server/baseMongoDB');

//Settings
app.set('port', process.env.PORT || 5000);
//require('./src/server/base');

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
                    
//Authentification
var passport = require('passport');
var authenticate = require('./authenticate');
app.use(passport.initialize());

//Statics Files
app.use(express.static(path.join(__dirname, 'build')));

//Routes
app.use('/', require('./login'));
app.use('/users/signup', require('./signup'));
app.use('/start', require('./start'));
app.use('/users/data-login', require('./routes'));
app.use('/users/accesoperfil', require('./routesPerfil'));
//Server Listenner
app.listen(app.get('port'), () =>{
    console.log(`El servidor se inicio en el puerto ${app.get('port')}`);
});