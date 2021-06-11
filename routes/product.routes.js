    const products = require("../controllers/product.controller.js");
    const { authJwt } = require("../middleware");
    const controller = require("../controllers/user.controller");

    var router = require("express").Router();
  
    var bodyParser = require('body-parser')

    var jsonParser = bodyParser.json();

    // Create a new products
    router.post("/", jsonParser, [authJwt.verifyToken, authJwt.isAdmin], products.create, );
  
    // Retrieve all products
    router.get("/", [authJwt.verifyToken], products.findAll);
  
    // Retrieve all published products
    router.get("/published",[authJwt.verifyToken], products.findAllPublished);
  
    // Retrieve a single products with id
    router.get("/:id", [authJwt.verifyToken], products.findOne);
  
    // Update a products with id
    router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], products.update);
  
    // Delete a products with id
    router.delete("/:id", [authJwt.verifyToken, authJwt.isAdmin], products.delete);
  
    // Delete all products
    router.delete("/", [authJwt.verifyToken, authJwt.isAdmin], products.deleteAll);
  
    module.exports = router;