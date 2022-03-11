const express = require("express");
const router = express.Router();

const {
  getPolitics,
  getPoliticById,
  createPolitic,
  deletePolitic,
  updatePolitic,
} = require("../controller/politicController");

router
  .route("/")

  .get(getPolitics)

  .post(createPolitic);

router
  .route("/:id")

  .get(getPoliticById)
  .delete(deletePolitic)
  .put(updatePolitic);

module.exports = router;
