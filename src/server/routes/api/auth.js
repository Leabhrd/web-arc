const router = require("express").Router();
const UserModel = require("../../models/user");

router.post('/login', (req, res) =>{

  res.send(req.body);
});

router.post('/register', (req, res) => {

});

module.exports = router