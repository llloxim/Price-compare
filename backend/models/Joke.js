const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  //   createdBy: {
  //     type: String,
  //     required: true,
  //   },
  //   date: {
  //     type: String,
  //     required: true,
  //   },
  //   rating: {
  //     type: Number,
  //     required: true,
  //   },
});

module.exports = mongoose.model("Joke", jokeSchema);
