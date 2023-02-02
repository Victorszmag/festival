const Festival = require("../../models/festivals");

const dataController = {
  index(req, res, next) {
    Festival.find({username: req.session.username}, (error, allFestivals) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.festivals = allFestivals;
        next();
      }
    });
  },
  create(req, res, next) {
    req.body.readyToSee = req.body.readyToSee === "on" ? true : false;

    req.body.username = req.session.username;
    // Use Model to create artists
    Festival.create(req.body, (error, createdFestival) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.festival = createdFestival;
        next();
      }
    });
  },
  show(req, res, next) {
    Festival.findById(req.params.id, (error, foundFestival) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.festival = foundFestival;
        next();
      }
    });
  },
  update(req, res, next) {
    req.body.readyToSee = req.body.readyToSee === "on" ? true : false;
    Festival.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedFestival) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.festival = updatedFestival;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    Festival.findByIdAndRemove(req.params.id, (error, festival) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.festival = festival;
        next();
      }
    });
  },
};

module.exports = dataController;