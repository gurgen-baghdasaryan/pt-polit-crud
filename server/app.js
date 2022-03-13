require("dotenv").config(); // Allows us to be able to access our connection string configuration in our environment variable

const express = require("express"); // Server settings
const connectionDB = require("./config/db"); // Conection to BBDD with Mongoose
const politicRoutes = require("./routes/politicRoutes"); //We call our middleware in charge of the routes
const cors = require("cors");

connectionDB();

// This constant stores what we already require from express
const app = express();

//middleware/logic
app.use(cors()); // Cors is a module that allows us to have a relationship between our backend and frontend server
app.use(express.json()); // When we do the get request, it returns a json

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// Route to our product API
app.use("/api/politic", politicRoutes);

// Here we tell the constant application to save us a variable called port and as a second parameter we tell it on which port the server has to listen/execute
const PORT = process.env.PORT || 4000;
// This logic is to run the server
app.listen(PORT, () => console.log(`server running in the port  ${PORT}`));
