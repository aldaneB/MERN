//Import dependencies

//Express server
const express = require("express");
const db = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//create app

const app = express();
const port = process.env.PORT || 3000;

//Initialize express app

app.use(
  //configure Cross-origin Resource Sharing
  cors({
    origin: " http://localhost:5173/",
    methods: ["GET, POST, DELETE, PATCH, PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

//listen for request from port

app.listen(port, () => console.log(`Server is now running on ${port}`));
