require("dotenv").config();
const express = require("express");
const connectionDB = require("./config/db");
const politicRoutes = require("./routes/politicRoutes")

connectionDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running in the port  ${PORT}`));
