//setting up the express and router functionalities
const express = require("express");

const router = express.Router();

//imports the meally model 
let meally = require("../models/meally.js");

//router functions and logic
router.get("/", function (req, res) {

    //the selectAll matches the code in the ORM file
    meally.selectAll(function (data) {
      let hbsObject = {
        orders: data
      };
      console.log(hbsObject);
      //the handlebars file where we will render the datase results
      res.render("TOBENAMEDLATER", hbsObject);
    });
  });
  
  //this will write the new burger to the database
  router.post("/api/orders", function (req, res) {
    meally.createOne([
      "new_order"
    ], [
      req.body.name
    ], function (result) {
  
      res.json({ id: result.insertId });
    });
  });
  
  //this is to update the order
  router.put("/api/orders/:id", function (req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);
    //this is to change the status of the burger from not eaten to eaten
  
    //this is where it pulls from the boolean variable in SQL
    meally.updateOne({
      delivered: req.body.delivered
    }, condition, function (result) {
      if (result.changedRows == 0) {
  
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/orders/:id", function (req, res) {
    let condition = "id = " + req.params.id;
  
    meally.deleteOne(condition, function (result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  //exporting for use
  module.exports = router;