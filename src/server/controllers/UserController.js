var users = [{ id:1 , email: 'hongly@slash.co', password: '123' }];

module.exports = {
  async me(req, res) {
    try {
      const userId = req.body.userId;
      const user = users.find(user => user.id === userId);
      res.send({
        data: {id: user.id, email: user.email},
        status: true,
        message: 'success',
      });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};