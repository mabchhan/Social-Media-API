const { Thought, User } = require("../Models");

module.exports = {
  // Get all thoughts
  // /api/thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};
