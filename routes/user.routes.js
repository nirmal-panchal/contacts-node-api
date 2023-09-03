const express = require("express");
const {
  RegisterUser,
  LoginUser,
  CurrentUser,
} = require("../controllers/user.controller");
const validateToken = require("../middlewares/tokenHandler");
const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/current", validateToken, CurrentUser);

module.exports = router;
