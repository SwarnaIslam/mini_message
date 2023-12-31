var express = require("express");
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Create a new post!" });
});

router.post("/new", function (req, res, next) {
  const user = req.body.user;
  const text = req.body.text;
  const added = new Date();
  messages.push({ text: text, user: user, added: added });
  res.redirect("/");
});
module.exports = router;
