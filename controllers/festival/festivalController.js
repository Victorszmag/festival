const express = require("express");
const router = express.Router();

// Data controller
const dataController = require("./dataController");
const viewController = require("./viewController");
const apiController = require("./apiController");
//Index api
router.get("/api", dataController.index, apiController.index);
// Show api
router.get("/api/:id", dataController.show, apiController.show);
//delete api
router.get("/api/:id", dataController.destroy, apiController.show);
//Update api
router.get("/api/:id", dataController.update, apiController.show);
//creste api
router.get("/api/", dataController.create, apiController.show);







// Index
router.get("/", dataController.index, viewController.index);

// New
router.get("/new", viewController.newView);

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

// Update
router.put("/:id", dataController.update, viewController.redirectShow);

// Create
router.post("/", dataController.create, viewController.redirectHome);

// Edit
router.get("/:id/edit", dataController.show, viewController.edit);
// Show - Route
router.get("/:id", dataController.show, viewController.show);

module.exports = router;