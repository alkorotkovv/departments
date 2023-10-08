const router = require('express').Router();
const { getData } = require('../controllers/controllers');

router.get('/data', getData);

module.exports = router;