const politCtrl = {};

const Politic = require("../models/Politic");

politCtrl.getPolitics = async (req, res) => {
  try {
    const politics = await Politic.find();
    res.json(politics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

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

    // We are storing a new document of what comes from the Clientee
    await newPolitic.save();
    res.json({ message: "The politic has been created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

politCtrl.getPoliticById = async (req, res) => {
  console.log(req);
  try {
    const politic = await Politic.findById(req.params.id);
    res.json(politic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

politCtrl.deletePolitic = async (req, res) => {
  try {
    await Politic.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "The Politic has been deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: " Server error" });
  }
};

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
