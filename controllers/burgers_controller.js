const express = require("express");
const router = express.Router();
// Import the model
const Burger = require("../models/burger.js");

// Create routes 
router.get("/", function (req, res) {
    Burger.selectAll(function (data) {
        const htmlObject = {
            burgers: data
        };
        console.log(htmlObject);
        res.render("index", htmlObject);
    });
});

router.post("/api/burgers", function (req, res) {
    Burger.insertOne(
        "burger_name",
        "devoured",
        req.body.burger_name,
        req.body.devoured,
        function (result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
        }
        );
    });
    
    
    router.put("/api/burgers/:id", function (req, res) {
        console.log("hello");
        Burger.updateOne("devoured", req.body.devoured, "id", req.params.id, function (result) {
            if (result.changedRows == 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                //res.status(200).json(results);
                res.status(200).end();
            }
    
        })
    });
    module.exports = router;
