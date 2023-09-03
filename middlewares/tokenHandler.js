const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer" || "bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized..");
      }
      req.user = decode.user;
      next();
    });
  }
  if (!token) {
    res.status(401);
    throw new Error("User is not authorized..");
  }
});

module.exports = validateToken;
