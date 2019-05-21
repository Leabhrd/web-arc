// let express = require("express");
import express from "express";
import { log } from "util";
const nunjucks = require("nunjucks");
const morgan = require("morgan");
const bodyParser = require("body-parser")
const app = express();
const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('dev'))

require('dotenv').config();
const config = require('../../config')

const mongoose = require('mongoose');
const dbConnection = mongoose.connect(config.DB_URL, {useNewUrlParser: true});


nunjucks.configure('src/server/views', {
  autoescape: true,
  express: app,
})


app.set('view engine', 'html');
app.use(express.static('dist'))

app.use(routes);

app.get('/',(req, res) => {
  res.render("index", { title: 'web architecture'});
})

// app.post("/login",async (req, res )=>{
//   const { name, password } = req.body
//   const user =  await UserModel.find({name, password });
//   console.log(user);
  
//   res.send( user.length ===1 ? 'login success': 'login failed' );
// })

// 
process.on('SIGINT', function() {
  console.log("pm2 exit");
  
  dbConnection.stop(function(err) {
    process.exit(err ? 1 : 0);
  });
});

process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

app.listen(config.PORT, ()=>{
  console.log(`listening to port ${config.PORT}`);
})
