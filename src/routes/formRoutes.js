const express = require('express');
const bodyParser = require('body-parser');
const FormController = require('../controllers/FormController.js');

const router = express.Router();

router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', (req, res) => {
    res.render('formulario');
  })
  .post('/add', FormController.addConcorrente)
  .get('/concorrentes', FormController.listaConcorrentes);

module.exports = router;
