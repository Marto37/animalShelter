var express = require('express');
var router = express.Router();
var Pet = require('../models/pet.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET an array of all pets */
router.get('/pets', function(req, res, next) {
  Pet.aggregate([
        { $group : { _id : "$species", pets : {$push : "$$ROOT"}}}
      ])
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
      name: "mydog",
      breed: "test :(",
      status: "doing very well",
      yearsOld: "234",
      adopted: "false",
      species: "cat"
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
