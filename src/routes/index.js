var express = require('express');
var router = express.Router();
const getIndexController = require("../controllers/getIndexController")
const getCreateFormController = require("../controllers/getCreateFormController")
const postCreateFormController = require("../controllers/postCreateFormController")

/* GET home page. */
router.get('/', getIndexController);

/* Create Page */
router.get('/create', getCreateFormController)
router.post('/create', postCreateFormController)

module.exports = router;
