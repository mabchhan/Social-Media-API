const { User } = require("../Models");

module.exports = {
  // Create a new user
  createUser(req, res) {
    User.create(req.body)

      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
};
