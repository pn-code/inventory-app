const express = require('express');
const Item = require('../models/item');
const app = express();

const getItemController = async (req, res) => {
    const item = await Item.findOne({ _id: req.params._id })
    res.render("item_detail", { item: item })
}

module.exports = getItemController;