const orm = require("../config/orm.js"); 

const burger = { 
    selectAll: function(cb) { 
        orm.selectAll("burgers", function(res){ 
            cb(res);
        })
    }, 
    insertOne: function(nameCol, devouredCol, nameVal, devouredVal, cb){ 
        orm.insertOne("burgers",nameCol, devouredCol, nameVal, devouredVal, function(res){ 
            cb(res);
        })
    }, 
    updateOne: function(devouredCol, devouredVal, colId, valId, cb){ 
        orm.updateOne("burgers", devouredCol, devouredVal, colId, valId, function(res){ 
            cb(res);
        })
    }



} 

// Export the database functions for the controller 
module.exports = burger;