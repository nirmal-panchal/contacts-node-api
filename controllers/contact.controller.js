const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.modal");

const GetContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ userId: req.user.id });
  if (contacts) {
    res
      .status(200)
      .json({ message: "successfully fatched the contacts", data: contacts });
  }
});

const UpdateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if (req.user.id !== contact.userId.toString()) {
    res.status(403);
    throw new Error("permission denied..");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (updatedContact) {
    res.status(200).json({
      message: "Contact Updated Successfully..",
      data: updatedContact,
    });
  }
});

const CreateContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All Fields Are Mandatory..");
  }
  const NewContact = await Contact.create({
    userId: req.user.id,
    name,
    email,
    phone,
  });
  if (NewContact) {
    res
      .status(201)
      .json({ message: "New contact created Successfully", data: NewContact });
  }
});

const RemoveContact = asyncHandler(async (req, res) => {
  const findingContact = await Contact.findById(req.params.id);
  if (!findingContact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  if (req.user.id !== findingContact.userId.toString()) {
    res.status(403);
    throw new Error("permission denied..");
  }
  const contact = await Contact.findByIdAndRemove(req.params.id);
  res.status(200).json({
    message: "Contact Removed Successfully..",
  });
});

const GetContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact Not Found");
  }
  res.json({ message: "Contact Found..", data: contact });
});

module.exports = {
  GetContacts,
  UpdateContact,
  CreateContact,
  RemoveContact,
  GetContactById,
};
