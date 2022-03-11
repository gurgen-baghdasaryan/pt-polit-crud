const mongoose = require("mongoose");

const politicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  politicalParty: {
    type: String,
    required: true,
  },
  Charge: {
    type: String,
    required: true,
  },
  ccaa: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  observations: {
    type: String,
    required: true,
  },
});

const Politic = mongoose.model("politic", politicSchema);

module.exports = Politic;
