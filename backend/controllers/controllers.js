const db = require('../db');

class Controller {

  async getData(req, res) {
    await db.query('SELECT * FROM result')
    .then(response => {
      res.status(200).send(response.rows);
    })
    .catch(error => {
      res.status(500).send(error);
    })
  }

}

module.exports = new Controller()