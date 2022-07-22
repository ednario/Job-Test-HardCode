const express = require('express');
const bodyParser = require('body-parser');
const FormController = require('../controllers/formController');

const router = express.Router();

router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .get('/', (req, res) => {
    res.render('formulario');
  })
  .post('/add', FormController.addConcorrente);

module.exports = router;
