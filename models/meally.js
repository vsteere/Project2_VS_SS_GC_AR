const orm = require("../config/orm.js");

let order = {
  selectAll: function(cb) {
    orm.selectAll("orders", function(res) {
      cb(res);
    });
  },
 
  createOne: function(cols, vals, cb) {
    orm.createOne("orders", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("orders", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("orders", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = order;
