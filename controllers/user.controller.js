const User = require("../models/user.modal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const RegisterUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All Fields Are Mandatory..");
  }
  const isUserExist = await User.findOne({ email });
  if (isUserExist) {
    res.status(400);
    throw new Error("Email is already exist");
  }
  const hashPass = await bcrypt.hash(password, 10);
  const NewUser = await User.create({ username, email, password: hashPass });
  if (NewUser) {
    res
      .status(201)
      .json({ message: "New User Registered Successfully", data: NewUser });
  }
});
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All Fields Are Mandatory..");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("User Does Not Exist..");
  }
  const userValidated = await bcrypt.compare(password, user.password);
  if (!userValidated) {
    res.status(400);
    throw new Error("Invalid Credentials..");
  }
  const accessToken = jwt.sign(
    {
      user: { username: user.username, email: user.email, id: user._id },
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );
  console.log(accessToken, "token");
  res
    .status(200)
    .json({ message: "Logged In Successfully", data: accessToken });
});
const CurrentUser = asyncHandler(async (req, res) => {
  res.status(200).json({ data: req.user });
});

module.exports = { RegisterUser, LoginUser, CurrentUser };
