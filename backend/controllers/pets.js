const { Pet } = require('../models')

module.exports.get = (req, res, next) => {
    Pet.aggregate([{ $group: { _id: "$species", pets: { $push: "$$ROOT" } } }])
      .then(pets => {
        res.json({ pets });
      })
      .catch(err => {
        console.error(err);
        res.json({ err });
      });
  }

module.exports.store = (req, res, next) => {
  let newPet = new Pet({
    name: "Cherokee",
    breed: "Domestic Shorthair",
    url: "https://pet-uploads.adoptapet.com/0/4/c/372633467.jpg",
    description: "Cherokee needs a special, understanding, quiet home with no children and no other animals. She can be easily startled and needs a very quiet situation. She is a female tortie, fixed, vaccinated, tested for felv/fiv, microchipped, and is about 4 yrs old.",
    status: "Spayed",
    yearsOld: "4",
    gender: "Female",
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
        res.locals.status = 400
        res.json({ pet })
      })
  }

module.exports.delete = (req, res, next) => {
  Pet.findByIdAndRemove(req.params.id, (err, Pet) => {
    if (err) return res.status(500).send(err);
    const response = {
        message: "Pet successfully deleted",
        id: Pet._id
    };
    return res.status(200).send(response);
  });
}