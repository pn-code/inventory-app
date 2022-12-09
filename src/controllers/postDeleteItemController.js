const express = require("express");
const app = express();
const Item = require("../models/item");

const postDeleteItemController = async function (req, res) {
    Item.findByIdAndRemove({ _id: req.params._id }, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect("/");
      });
};

module.exports = postDeleteItemController;
