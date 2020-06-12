require("dotenv").config();
const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const app = express();
const routers = require("./router");
app.use(express.static(path.resolve(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: true }));

app.use(routers);
app.set("view engine", "njk");
nunjucks.configure(path.resolve(__dirname, "views"), {
  express: app,
  autoescape: false,
  noCache: true
});

app.listen(process.env.PORT || 3000, () => console.log("App is running"));
