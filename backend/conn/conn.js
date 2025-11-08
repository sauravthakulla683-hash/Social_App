const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb sucessfully connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectdb;
