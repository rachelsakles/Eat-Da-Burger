const express = require("express"); 
const expHbs = require("express-handlebars"); 
const routes = require("./controllers/burgers_controllers.js")

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("server listening on: http://localhost:" + PORT)
});
