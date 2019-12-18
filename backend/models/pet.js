const mongoose = require("mongoose");

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    breed: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default:
        "https://images.all-free-download.com/images/graphiclarge/animal_footprint_clip_art_6837.jpg"
    },
    status: {
      type: String,
      required: true
    },
    yearsOld: {
      type: Number,
      default: 0
    },
    adopted: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      default: "No description given :(((((("
    },
    gender: {
      type: String,
      required: true
    },
    species: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Pet", petSchema);
