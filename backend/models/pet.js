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
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);