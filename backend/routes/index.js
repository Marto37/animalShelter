var express = require('express');
var router = express.Router();
var Pet = require('../models/pet.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET an array of all pets */
router.get('/pets', function(req, res, next) {
  Pet.find()
      .populate('pets')
      .sort('-createdAt')
      .then(pets => {
        res.json({ pets })
    })
      .catch(err => {
        console.error(err)
        res.json({ err })
    })
});

/* POST a new pet */
router.post('/pets', function(req, res, next) { 
    let newPet = new Pet({
      name: "test",
      breed: "test :(",
      status: "tesst",
      yearsOld: "1000000",
      adopted: "false"
    })
    newPet
      .save()
      .then(pet => {
        res.locals.data = { pet }
        res.locals.status = 201
        res.json({ pet })
    })
      .catch(err => {
        console.error(err)
        res.locals.error = { error: err.message }
        res.json({ err })
    })
});

module.exports = router;
