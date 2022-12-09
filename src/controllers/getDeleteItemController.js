const express = require("express");
const app = express();
const Item = require("../models/item");

const getDeleteItemController = async function (req, res) {
    res.render('delete_item');
};

module.exports = getDeleteItemController;
