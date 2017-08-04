const express = require("express");
const router = express.Router();

// Import the model (burger.js) to use its database functions.
const Burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  Burger.findAll().then(function(results) {
    var hbsObject = {
      "burgersSequels": results
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  Burger.create({
    "burger_name": req.body.burger_name // has to match what you assigned this to in the HTML (input text box)
    });
    res.redirect("/");
});

router.put("/:id", function(req, res) {

  console.log(req.params.id);
  // if (req.body.id) {
  Burger.update({
    "devoured": 1
  }, { 
    where: {
      "id": req.params.id
    }
  });
  // }).then(function(updated) {
  res.redirect("/");
// }
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.delete(condition, function() {
//     res.redirect("/");

//     // should have a condition statement if it doesnt pass 
//   });
// });


// Export routes for server.js to use.
module.exports = router;