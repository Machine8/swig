const express = require('express');

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();
const swig = require('swig');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, '/public')));


app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');



const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/swigApp';
const connect = mongoose.connect(url);

connect.then((db) =>{
     console.log('Connect too DB sucsess');
}).catch((err)=>console.log(err));







const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cursosRouter = require('./routes/cursos');

app.use('/home', indexRouter);
app.use('/user', usersRouter);
app.use('/cursos', cursosRouter);

module.exports = app;
