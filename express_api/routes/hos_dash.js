var express = require("express");
var router = express.Router();

// id --> hospital_id
router.get("/hos_dash/:id", function (req, res, next) {
  // return a json file
  // profile data of the hospital with the id
    final_json = {}
    
    get_id = req.params;
    console.log("get_id: ", get_id)

  res.send("Calling from backend - hospitals");
});

module.exports = router;
