
const userRouter = require("express").Router();
const UserModel = require("../../models/user");

userRouter.get('/:id', (req, res) =>{
  console.log(req.body);
  res.send(req.body);
});

userRouter.post('/:id', (req, res) => {

});

userRouter.put('/:id', (req, res) => {

});

userRouter.patch('/:id', (req, res) => {

});


module.exports = userRouter