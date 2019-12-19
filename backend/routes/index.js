var express = require("express");
var router = express.Router();
const controllers = require("../controllers");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET an array of all pets */
router.get("/pets", controllers.pets.get);

/**
 * Delete a specific pet.
 * @route DELETE /pets/:id
 * @param {number} id.path.required - The pet id
 * @group Pets - Operations about pets
 * @returns {ApiResponseSuccess.model} 200 - Successful deletion
 * @returns {ApiResponseSinglePost.model}  500 - Unexpected error in the backend...
 */

//  not working!
router.delete("/pets/:id", controllers.pets.delete);

/* POST a new pet */
router.post("/pets", controllers.pets.store);

module.exports = router;
