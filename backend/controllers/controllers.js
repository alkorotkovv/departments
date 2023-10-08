const db = require('../db');

class Controller {

  async getData(req, res) {
    return new Promise(function(resolve, reject) {
    db.query('SELECT * FROM result', (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
  }

}

module.exports = new Controller()