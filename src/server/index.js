let express = require("express");
let nunjucks = require("nunjucks");
let morgan = require("morgan");
let bodyParser = require("body-parser")
let app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(morgan('common'))

require('dotenv').config();
let config = require('../../config')

const mongoose = require('mongoose');
mongoose.connect(config.DB_URL, {useNewUrlParser: true});
const User = mongoose.model('Cat', { name: String, password: String });

// const password = new User({ name: 'vengleab', password: '123456789' });
// password.save().then(() => console.log('meow'));

nunjucks.configure('public', {
  autoescape: true,
  express: app,
})


app.set('view engine', 'html');
app.use(express.static('dist'))

app.get('/',(req, res) => {
  res.render("./index", { title: 'web architecture'});
})

app.post("/login",async (req, res )=>{
  const { name, password } = req.body
  const user =  await User.find({name, password });
  res.send( user.length ===1 ? 'login success': 'login failed' );
})



app.listen(config.PORT, ()=>{
  console.log("listening to port")
})
