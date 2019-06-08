
module.exports = (req, res, next) => {
  console.log(req.headers);
  
  let credential = req.session.credential;
  if (!credential && req.body.userId ) {
    res.status(401).send({ status: false, message: 'Not Authorized' })
  }else {
    req.body.userId = credential.userId;
    next();
  }
};
