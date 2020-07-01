const express = require("express");
const route = express.Router();
const Users = require("../db/posts").Users;
const Posts = require("../db/posts").Posts;
route.get("/", (req, res) => {
  if (req.query.password) {
    const user = Users.findOne({
      include: Posts,
      where: { username: req.query.username, password: pass },
    });
    if (user) {
      if (req.query.password.localeCompare(user.password)) {
        // window.alert('successfully logged in')
        res.send(user);
      } else {
        //   window.alert('wrong password')
      }
    } else {
      // window.alert('username does not exist')
    }
  } else if (req.query.username) {
    console.log("**************" + req.query.username);
    Users.findOne({
      where: { username: req.query.username },
      include: Posts,
    }).then((user) => res.send(user));
  } else if (req.query.id) {
    const user = Users.findOne({
      include: Posts,
      where: { id: req.query.id },
    }).then((user) => res.send(user));
  } else {
    Users.findAll({ include: Posts }).then((users) => {
      res.send(users);
    });
  }
});
route.post("/", (req, res) => {
  if (req.body.imageurl) {
    console.log(
      "*********************" + req.body.git + " " + req.body.username
    );
    Users.update(
      {
        imageurl: req.body.imageurl,
        password: req.body.password,
        fb: req.body.fb,
        twitter: req.body.twitter,
        email: req.body.email,
        git: req.body.git,
      },
      {
        where: { username: req.body.username },
        returning: true,
        plain: true,
      }
    );
  } else {
    console.log("*********************" + req.body.git);
    Users.update(
      {
        username: req.body.username,
        password: req.body.password,
        git: req.body.git,
        fb: req.body.fb,
        email: req.body.email,
        twitter: req.body.twitter,
        imageurl: null,
      },
      {
        where: { username: req.body.username },
        returning: true,
        plain: true,
      }
    ).then((user) => {
      res.send(user);
    });
  }
});

module.exports = {
  route,
};
