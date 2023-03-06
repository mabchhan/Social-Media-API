// const { connect, connection } = require("mongoose");

// connect("mongodb://localhost/social-media", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const mongoose = require("mongoose");

// Wrap Mongoose around local connection to MongoDB

mongoose.connect("mongodb://127.0.0.1:27017/social-media", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
module.exports = mongoose.connection;
