require("dotenv").config();
/**
 * Requirements
 */
const mongoose = require("mongoose");
const express = require("express");
const app = express();
//include the method-override package place this where you instructor places it
const methodOverride = require("method-override");
/**
 * Configuration
 */
const PORT = 3000;
/**
 * Controllers
 */
const festivalController = require("./controllers/festival/festivalController");
const userController = require("./controllers/user/userController");

//connect to database
const db = require("./db");
db.once("open", () => {
  console.log("connected to mongo");
});
/**
 * Middleware
 */
app.use(express.static("public")); //tells express to try to match requests with files in the directory called 'public'

//...
//after app has been defined
//use methodOverride.  We'll be adding a query parameter to our delete form named _method
app.use(methodOverride("_method"));
// Middleware example
function logger(req, res, next) {
  console.info(req.path);
  next();
}


app.use(logger);

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// Allow express to use urlencoded
app.use(express.urlencoded({ extended: true }));
//used to help with postman and creating api
app.use(express.json());
/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());
/**
 * Controllers
 */

app.use("/festivals", festivalController);
app.use("/user", userController);



  
//redirect


app.get("/", (req, res) => {
  res.redirect("/festivals/");
});
// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});
