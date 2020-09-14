const orm = require("../config/orm.js"); 

const burger = { 
    all: function(val, cb) { 
        orm.selectAll("burgers", "burger_name", val, function(res){ 
            cb(res);
        })
    }, 
    insert: function(nameVal, devouredVal, cb){ 
        orm.insertOne("burgers", "burger_name", "devoured", nameVal, devouredVal, function(res){ 
            cb(res);
        })
    }, 
    update: function(colVals, condition, cb){ 
        orm.updateOne("burgers", colVals, condition, function(res){ 
            cb(res);
        })
    }



} 

// Export the database functions for the controller 
module.exports = burger;