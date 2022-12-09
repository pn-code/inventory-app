const express = require("express");
const router = express.Router();
const getItemController = require("../controllers/getItemController");

router.get("/:_id", getItemController)

module.exports = router;