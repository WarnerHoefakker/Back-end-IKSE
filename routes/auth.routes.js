const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth");

var router = require("express").Router();
  
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json();

router.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post(
    "/api/auth/signup", jsonParser, 
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
);

router.post("/api/auth/signin", jsonParser, controller.signin);

module.exports = router;