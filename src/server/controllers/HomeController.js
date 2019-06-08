
module.exports = {
  async index(req, res) {
    try {
      res.render("index");
    } catch (error) {
      console.log(error)
      res.status(400).send(error);
    }
  },
};
  