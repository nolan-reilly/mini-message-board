const { Router } = require("express");
const messages = require("../models/db");

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  const user = req.body.user;
  const message = req.body.message;

  // Error here due to no having direct access to messages array
  messages.push({ user: user, text: message, added: new Date() });

  res.redirect("/");
});

module.exports = newRouter;
