const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const infos = require("./public/script/lines");

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));

server.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("landing-page");
});

server.get("/map", function (req, res) {
  return res.render("map", { items: infos });
});

server.listen(5000, function () {
  console.log("Server is Running.");
});
