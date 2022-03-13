// Here we will create the model to be able to access our database
// And we have the schema of the information that we are going to store in the API

//import Mongoose characters and functionalities(schema and model)
const mongoose = require("mongoose");

const politicSchema = new mongoose.Schema({
  name: {
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
