const express = require("express");
const app = express();
const Item = require('../models/item');


const getIndexController = async function (req, res) {
    const itemArr = await Item.find({})
    res.render("index", { title: "Fruits 'n Veggies", items: itemArr });
};

module.exports = getIndexController;
