const validateToken = require("../middlewares/tokenHandler");
const express = require("express");
const {
  GetContacts,
  UpdateContact,
  CreateContact,
  GetContactById,
  RemoveContact,
} = require("../controllers/contact.controller");
const router = express.Router();

router.get("/get", validateToken, GetContacts);
router.get("/get/:id", validateToken, GetContactById);
router.post("/create", validateToken, CreateContact);
router.put("/update/:id", validateToken, UpdateContact);
router.delete("/remove/:id", validateToken, RemoveContact);

module.exports = router;
