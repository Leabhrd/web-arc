
module.exports = (req, res, next) => {
  let credential = req.session.credential;
  if (!credential) {
    res.status(401).send({ status: false, message: 'Not Authorized' })
  }else {
    req.body.userId = credential.userId;
    next();
  }
};
