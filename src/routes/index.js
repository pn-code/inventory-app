var express = require("express");
var router = express.Router();
const getIndexController = require("../controllers/getIndexController");
const getCreateFormController = require("../controllers/getCreateFormController");
const postCreateFormController = require("../controllers/postCreateFormController");
const getDeleteItemController = require("../controllers/getDeleteItemController");
const postDeleteItemController = require("../controllers/postDeleteItemController");

/* GET home page. */
router.get("/", getIndexController);

/* Create Page */
router.get("/create", getCreateFormController);
router.post("/create", postCreateFormController);

// Delete Items
router.get("/delete/:_id", getDeleteItemController);
router.post("/delete/:_id", postDeleteItemController);

module.exports = router;
