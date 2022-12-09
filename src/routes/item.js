const express = require("express");
const router = express.Router();
const getItemController = require("../controllers/getItemController");

router.get("/:category/:_id", getItemController)

module.exports = router;