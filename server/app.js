require("dotenv").config();
const express = require("express");
const connectionDB = require("./config/db");
const politicRoutes = require("./routes/politicRoutes");
const cors = require("cors");

connectionDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/politic", politicRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running in the port  ${PORT}`));
