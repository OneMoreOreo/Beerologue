const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: String,
  brewery: String,
  category: String,
  photo: String,
  reviewtext: String,
});

module.exports = mongoose.model("Review", ReviewSchema);
