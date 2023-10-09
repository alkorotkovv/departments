const express = require('express');
const cors = require('cors');
const routes = require('../backend/routes/routes');

const app = express();
const port = 3001;

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});