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
    status: {
      type: String,
      required: true
    },
    yearsOld : {
      type: Number,
      default: 0
    },
    adopted : {
      type: Boolean,
      default: false
    },
    img : { 
      type: String,
      default: "https://picsum.photos/id/237/200/300"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);