const mongoose = require("mongoose");

const festivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  time: { type: Date, required: true},
  stage: { type: String, required:true},
});

const Festival = mongoose.model("Festival", festivalSchema);

module.exports = Festival;