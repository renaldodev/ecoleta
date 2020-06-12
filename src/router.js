const router = require("express").Router();

router.get("/", (req, res) => {
  return res.render("home");
});

router.get("/register", (req, res) => {
  return res.render("register");
});

router.use((req, res, next) => {
  res.render("404");
  next();
});
module.exports = router;
