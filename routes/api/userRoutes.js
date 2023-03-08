const router = require("express").Router();

const {
  createUser,
  getAllUsers,
  getUserByID,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").post(createUser).get(getAllUsers);

// /api/users/:userId
router.route("/:userId").get(getUserByID).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").put(addFriend).delete(deleteFriend);

module.exports = router;
