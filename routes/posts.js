//const {Router} =require('express')
//const route=Router()
const express = require("express");
const route = express.Router();
let { Name } = require("../server");
// console.log(Name+"HIHIHIH")

const Posts = require("../db/posts").Posts;
const Users = require("../db/posts").Users;

route.get(
  "/",
  (req, res) => {
    Name = require("../server").Name;

    console.log("purana " + req.query.id);

    if (req.query.userId) {
      // console.log("naya "+req.query.id)
      Posts.findAll({
        include: Users,
        where: { userId: req.query.userId },
      }).then((posts) => {
        res.send(posts);
      });
    } else if (req.query.id) {
      //  console.log("***************************************");
      Posts.findOne({ where: { id: req.query.id } }).then((post) => {
        // console.log(post);
        res.send(post);
      });
    } else {
      ///  console.log(req.query.yp+"************************************************")
      if (req.query.yp) {
        const users = Users.findOne({ where: { username: Name } }).then(
          (user) => {
            let id = user.id;
            Posts.findAll({ include: Users, where: { userid: id } }).then(
              (posts) => {
                res.send(posts);
              }
            );
          }
        );
      } else {
        Posts.findAll({ include: Users }).then((posts) => {
          //    console.log("Came here " + posts[0].title);
          res.send(posts);
        });
      }
    }
  } //[{Users}]
);
route.post("/", (req, res) => {
  // Name=require('../server').Name;
  const users = Users.findOne({ where: { username: req.body.UserName } }).then(
    (user) => {
      let id = user.id;
      Posts.create({
        title: req.body.title,
        body: req.body.body,
        userId: id,
      }).then((post) => {
        res.send(post);
      });
    }
  );
});
module.exports = {
  route,
};
