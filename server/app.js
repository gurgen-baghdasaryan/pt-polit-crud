require("dotenv").config();
const express = require("express");
const connectionDB = require("./config/db"); 

connectionDB();

const app = express();


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server running in the port  ${PORT}`));
