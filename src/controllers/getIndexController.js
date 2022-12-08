const express = require("express");
const app = express();
const Fruit = require('../models/fruit');
const Vegetable = require('../models/veggie');

const getIndexController = async function (req, res) {
    const fruitsArr = await Fruit.find({})
    const veggieArr = await Vegetable.find({})
    res.render("index", { title: "Fruits 'n Veggies", fruits: fruitsArr, veggies: veggieArr });
};

module.exports = getIndexController;
