let express = require("express");
let app = express();
require('dotenv').config();
let config = require('./config')

app.use(express.static('public'))


app.listen(config.PORT, ()=>{
  console.log("listening to port")
})
