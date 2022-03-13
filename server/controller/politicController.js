// The controller file will have the logic/function 
// That allows us to respond to each of the requests we make (GET POST PUT DELETE)
const politCtrl = {};

//import the model
const Politic = require("../models/Politic");

// Here it will search and store the information that comes 
politCtrl.getPolitics = async (req, res) => {
  try {
    const politics = await Politic.find();
    res.json(politics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

// The logic to create product (the POST method)
politCtrl.createPolitic = async (req, res) => {
  try {
    const { name, politicalParty, Charge, ccaa, salary, observations  } =
      req.body;
    const newPolitic = new Politic({
      name: name,
      politicalParty: politicalParty,
      Charge: Charge,
      ccaa: ccaa,
      salary: salary,
      observations: observations,
    });

    // We are storing a new document of what comes from the CLIENT
    await newPolitic.save();
    res.json({ message: "The politic has been created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

//  get a single politic
politCtrl.getPoliticById = async (req, res) => {
  console.log(req);
  try {
    // We tell it to look for the Id
    const politic = await Politic.findById(req.params.id);
    // Returns us through a json
    res.json(politic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};


// Logic to delete the politic by Id, that where it finds the Id parameter 
// That comes to us by the ·req we will find it and we will eliminate it from our model
politCtrl.deletePolitic = async (req, res) => {
  try {
    await Politic.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "The Politic has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

// Here we have the ·Put method
// It will look for it inside our model and it will ·Update it
politCtrl.updatePolitic = async (req, res) => {
  try {
    const { name, politicalParty, Charge, ccaa, salary, observations } =
      req.body;

    await Politic.findByIdAndUpdate(req.params.id, {
      name,
      politicalParty,
      Charge,
      ccaa,
      salary,
      observations,
    });
    res.json({ message: "The politic has been updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

module.exports = politCtrl;
// Export the object with its methods to the routes file