const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socila-media", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
