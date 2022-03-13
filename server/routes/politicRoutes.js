const express = require("express");
const router = express.Router();

// We import the functionalities of our controller.
const {
  getPolitics,
  getPoliticById,
  createPolitic,
  deletePolitic,
  updatePolitic,
} = require("../controller/politicController");

router
  .route("/")
  // It`s the global request
  .get(getPolitics)

  // It`s the Post request where we have the logic to create a product
  .post(createPolitic);

router
  .route("/:id")
  // When we send a parameter through the URL we will execute get(), delete(), put()
  // When we make these requests we must send a indicator so we can tell the API which document we want
  .get(getPoliticById)
  .delete(deletePolitic)
  .put(updatePolitic);

module.exports = router;
