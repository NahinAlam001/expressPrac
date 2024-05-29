const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/user");

// Registration
exports.registerUser = async (req, res) => {
  const { firstName, lastName, gender, dateOfBirth, email, password } =
    req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    res
      .status(500)
      .json({ message: "User registration failed", error: err.message });
  }
};

// Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

// Get Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve profile", error: err.message });
  }
};

// Update Profile
exports.updateProfile = async (req, res) => {
  const { firstName, lastName, gender, dateOfBirth, email } = req.body;
  try {
    await User.update(
      { firstName, lastName, gender, dateOfBirth, email },
      { where: { id: req.user.id } },
    );
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update profile", error: err.message });
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.user.id } });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete user", error: err.message });
  }
};

// Upload Profile Image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).single("profileImage");

exports.uploadProfileImage = (req, res) => {
  upload(req, res, async (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Image upload failed", error: err.message });

    try {
      await User.update(
        { profileImageUrl: req.file.path },
        { where: { id: req.user.id } },
      );
      res.status(200).json({ message: "Profile image uploaded successfully" });
    } catch (err) {
      res
        .status(500)
        .json({
          message: "Failed to update profile image",
          error: err.message,
        });
    }
  });
};
