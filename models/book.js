const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//we define our book schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [String],
  description: String,
  image: String,
  previewLink: String,
  infoLink: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
