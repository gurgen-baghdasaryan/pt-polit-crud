require("dotenv").config();

// Connection string to be able to connect our server with our database
const mongoose = require("mongoose"); 

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected  to MongoDB");
  } catch (error) {
    console.error("Error: not connected to  MongoDB");
    process.exit(1);
  }
};

module.exports = connectionDB;
