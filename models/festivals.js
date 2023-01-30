const mongoose = require("mongoose");

const festivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  when: { type: String, required: true },
  where: { type: String, required: true },
  readyToSee: { type: Boolean, default: false },
});

const Festival = mongoose.model("Festival", festivalSchema);

module.exports = Festival;