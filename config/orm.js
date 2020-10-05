// Import MYSQL connection
const connection = require("./connection.js");
const express = require("express");

const orm = {
    selectAll: function(table, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, [table], function(err,res){
            if (err) throw err;
            console.log(res);
            cb(res);
        })
    },
    insertOne: function(table, nameCol, devouredCol, nameVal, devouredVal, cb) {
        const query = "INSERT INTO ?? (??,??) VALUES (?,?)";
        connection.query(query, [table, nameCol, devouredCol, nameVal, devouredVal], function(err,res){
            if (err) throw err;
            console.log(res); 
            cb(res);
        })
    },
    updateOne: function(table, devouredCol, devouredVal, colId, valId, cb) {
        const query = "UPDATE ?? SET ?? = ? WHERE ?? = ? "; 
        connection.query(query, [table, devouredCol, devouredVal, colId, valId], function(err,res){ 
            if (err) throw err; 
            console.log(res); 
            cb(res);
        })
        
    },
};

module.exports = orm;