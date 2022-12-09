const express = require("express");
const app = express();
const Item = require('../models/item');

const getCreateFormController = async function (req, res) {
    res.render("create_form", { title: "Fruits 'n Veggies: Create" });
};

module.exports = getCreateFormController;
