
const apiRouter = require('./api/index');
const allRouter = require("express").Router();

allRouter.use("/api",apiRouter);

allRouter.use((req, res, next)=>{
  res.status(404).render('404');
})
module.exports = allRouter