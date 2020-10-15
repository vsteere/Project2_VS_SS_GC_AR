const db = require("../models");
const passport = require("../config/passport");
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"),  (req, res) => {
    // res.redirect("orders")
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  app.put("/api/orders", function(req, res) {
    db.Meally.update({onTheway:1},
      {
      where:{id:req.body.id}
      
    } ).then(function(dbMeally){
      res.send(dbMeally)
      console.log(dbMeally)
    })


  })

  app.delete("/api/orders", function(req, res) {
    console.log("calling route")
    db.Meally.destroy({
      where: {
        id: req.body.id
      }

    }).then(function(dbMeally) {
      res.sendStatus(200);
    });
  })
  

//route to pull the data from the database and redner onto orders handlebars
  app.get("/api/orders", function(req, res)  {

    db.Meally.findAll({}).then(function(dbMeally) {
      res.json(dbMeally)

    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.post("/api/orders", (req, res) => {
    console.log(req.body)
    db.Meally.create({
      customer_name: req.body.customer_name,
      customer_address: req.body.customer_address,
      customer_order: req.body.customer_order,
      customer_total: parseFloat(req.body.customer_total)
          })
      .then(function(dbMeally) {
          console.log("added new order!");
          res.json(dbMeally)
        })
      .catch(err => {
        throw(err)
      });
  });





};


