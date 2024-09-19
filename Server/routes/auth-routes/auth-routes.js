/**Define authentication routes */

const express = require("express");
const {
  registerUser,
} = require("../../controllers/auth-controller/auth-controller");

const router = express.Router();

//Registration route
router.post("/register", registerUser);

module.exports = router;
