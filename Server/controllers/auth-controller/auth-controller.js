/**Authentication controller  */
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User");

//Register
const registerUser = async (req, res) => {
  //get data from request body
  const { userName, email, password } = req.body;

  try {
    //hash password
    const hashPassword = await bcrypt.hash(password, 12);

    //set user properties
    const user = new User({ userName, email, password: hashPassword });

    //save user
    await user.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",  
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error registering user",
      error: e,
    });
  }
};

//Login

//logout

//auth middleware

module.exports = {registerUser};