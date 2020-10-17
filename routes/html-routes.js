// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // 
    if (req.user)
     {
       
      // res.redirect("/orders");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the orders page
    if (req.user) {
      console.log("user object")
       console.log(req.user)
      res.redirect("/orders");
    }
    res.render("login");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the orders page
    if (req.user) {
      res.redirect("/orders");
    }
    res.render("signup");
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/orders", isAuthenticated, (req, res) => {
    db.Meally.findAll({raw:true}).then(function(dbMeals) {
      
      res.render("orders", {meals:dbMeals, user: req.user})
  });})
};
