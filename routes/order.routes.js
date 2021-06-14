const orders = require("../controllers/order.controller.js");
const { authJwt } = require("../middleware");

var router = require("express").Router();

var bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

// Create a new products
router.post("/", jsonParser, [authJwt.verifyToken], orders.create);

// Retrieve all products
router.get("/", [authJwt.verifyToken, authJwt.isAdmin], orders.findAll);

// Delete all products
router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], orders.deleteAll);

module.exports = router;