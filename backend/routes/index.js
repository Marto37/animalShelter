var express = require("express");
var router = express.Router();
var Pet = require("../models/pet.js");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET an array of all pets */
router.get("/pets", function(req, res, next) {
  Pet.aggregate([{ $group: { _id: "$species", pets: { $push: "$$ROOT" } } }])
    .then(pets => {
      res.json({ pets });
    })
    .catch(err => {
      console.error(err);
      res.json({ err });
    });
});

/**
 * Delete a specific pet.
 * @route DELETE /pets/:id
 * @param {number} id.path.required - The pet id
 * @group Pets - Operations about pets
 * @returns {ApiResponseSuccess.model} 200 - Successful deletion
 * @returns {ApiResponseSinglePost.model}  500 - Unexpected error in the backend...
 */

//  not working!
router.delete("/pets/:id", function(req, res, next) {
  Pet.findByIdAndCascadeDelete({ _id: req.params.id })
    .then(_ => {
      res.locals.data = { deleted: "Success" };
      res.locals.status = 200;
      return next();
    })
    .catch(err => {
      console.error(err);
      res.locals.error = { error: err.message };
      res.locals.status = 400;
      return next();
    });
});

/* POST a new pet */
router.post("/pets", function(req, res, next) {
  let newPet = new Pet({
    name: "mydog",
    breed: "test :(",
    status: "doing very well",
    yearsOld: "234",
    adopted: "false",
    species: "cat"
  });
  newPet
    .save()
    .then(pet => {
      res.locals.data = { pet };
      res.locals.status = 201;
      res.json({ pet });
    })
    .catch(err => {
      console.error(err);
      res.locals.error = { error: err.message };
      res.json({ err });
    });
});

module.exports = router;
