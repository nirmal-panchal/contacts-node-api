const express = require("express");
const dotenv = require("dotenv").config();
const contactRoutes = require("./routes/contact.routes");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middlewares/errHandler");
const ConnectDb = require("./config/dbConnection");
const app = express();

ConnectDb();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});
