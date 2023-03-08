const router = require("express").Router();

const { getAllThoughts } = require("../../controllers/thoughtController");

router.route("/api/thoughts").get(getAllThoughts);

module.exports = router;
