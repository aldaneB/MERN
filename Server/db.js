//import mongoose
const mongoose = require("mongoose");
require("dotenv").config();

//Create mongoose database connection
mongoose
  .connect(`mongodb+srv://${process.env.REACT_APP_DB_USER}:${process.env.REACT_APP_DB_PASSWORD}@cluster0.yo21c.mongodb.net/`)
  .then(() => console.log("Database connected successfully !"))
  .catch((err) => console.log(err));
