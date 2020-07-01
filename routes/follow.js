const express = require("express");
const route = express.Router();
const Users = require("../db/posts").Users;
const following = require("../db/posts").Following;

route.get("/", (req, res) => {
  Users.findOne({ where: { username: req.query.p1 } }).then((user) => {
    let id = user.id;
    following
      .findAll({ include: Users, where: { userId: id } })
      .then((people) => {
        res.send(people);
      });
  });
});
route.post("/", (req, res) => {
  console.log(
    "8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888"
  );
  Users.findOne({ where: { username: req.body.p1 } }).then((user) => {
    let id = user.id;
    following
      .create({ naam: req.body.p2, userId: id })
      .then((followinglist) => {
        console.log(req.body.p1 + " is now following " + req.body.p2);
        res.send();
      });
  });
});
module.exports = {
  route,
};
