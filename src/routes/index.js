var express = require("express");
var router = express.Router();

// Import Controllers
const getItemController = require("../controllers/getItemController");
const getIndexController = require("../controllers/getIndexController");
const getCreateFormController = require("../controllers/getCreateFormController");
const postCreateFormController = require("../controllers/postCreateFormController");
const getDeleteItemController = require("../controllers/getDeleteItemController");
const postDeleteItemController = require("../controllers/postDeleteItemController");

// GET Index
router.get("/", getIndexController);

// GET Item Details Page
router.get("/item/:_id", getItemController)

// GET/POST Create Page
router.get("/create", getCreateFormController);
router.post("/create", postCreateFormController);

// GET/POST Delete Item Pages
router.get("/delete/:_id", getDeleteItemController);
router.post("/delete/:_id", postDeleteItemController);

module.exports = router;
