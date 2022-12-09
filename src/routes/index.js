var express = require('express');
var router = express.Router();
const getIndexController = require("../controllers/getIndexController")

/* GET home page. */
router.get('/', getIndexController);

module.exports = router;
