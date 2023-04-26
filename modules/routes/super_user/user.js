"use strict";

let express = require("express"),
  router = express.Router(),
  
  controller = require("../../controllers/super_user/user");


router.post(
  "/add",controller.addEmployees
);

module.exports = router;
