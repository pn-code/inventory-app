var express = require('express');
var router = express.Router();
const getIndexController = require("../controllers/getIndexController")


/* GET home page. */
router.get('/', getIndexController);


// /* GET create page. */
// router.get('/create', function(req, res, next) {
//   res.render('index', { title: "Fruits 'n Veggies: Create" });
// });


module.exports = router;
