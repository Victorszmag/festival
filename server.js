require("dotenv").config();
/**
 * Requirements
 */

const express = require("express");
const app = express();

/**
 * Configuration
 */
const PORT = process.env.PORT || 3000;
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
const setupMiddleware = require("./middleware/setupMiddleware");


setupMiddleware(app);

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
