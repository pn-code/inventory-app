const express = require("express");
const app = express();
const Item = require("../models/item");

const postCreateFormController = async function (req, res) {
    const item = new Item({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        number_in_stock: req.body.number_in_stock,
    });
    item.save(function (err) {
        if (err) {
            cb(err, null);
            return;
        }
        console.log("New item: " + item);
    });
    const query = await Item.findOne({
        name: req.body.name,
        desc: req.body.desc,
        category: req.body.category,
        price: req.body.price,
        number_in_stock: req.body.number_in_stock,
    });
    res.redirect(`/item/${query._id}`);
};

module.exports = postCreateFormController;
