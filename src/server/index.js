// let express = require("express");
import express from "express";
import { log } from "util";
import session from "express-session";
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const bodyParser = require("body-parser")
require('express-group-routes');
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))
require('dotenv').config();
const config = require('../../config')
const mongoose = require('mongoose');
const dbConnection = mongoose.connect(config.DB_URL, {useNewUrlParser: true});


app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(session({ 
  name:'WebArchSSO',
  secret: '123456', 
  cookie: { maxAge: process.env.SESSION_LIFE_TIME || 1000 * 60 * 60 },
  resave: false,
  saveUninitialized: false }
 )); 

nunjucks.configure('src/server/views', {
  autoescape: true,
  express: app,
})

app.set('view engine', 'html');
app.use(express.static('dist'))

app.use(routes);


process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

app.listen(config.PORT, ()=>{
  console.log(`listening to port ${config.PORT}`);
})
