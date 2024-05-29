const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  deleteUser,
  uploadProfileImage,
} = require("../controllers/user");
const authenticate = require("../middleware/authenticate"); // Ensure this path is correct

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticate, getProfile);
router.put("/profile", authenticate, updateProfile);
router.delete("/profile", authenticate, deleteUser);
router.post("/upload-profile-image", authenticate, uploadProfileImage);

module.exports = router;
