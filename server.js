const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds251877.mlab.com:51877/heroku_h4rbqj6j";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> Server now listening on PORT ${PORT}!`);
});
