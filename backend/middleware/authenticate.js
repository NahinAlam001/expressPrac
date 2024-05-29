const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Authentication failed: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret"); // Use the same secret as in the login
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Authentication failed: Invalid token" });
  }
};

module.exports = authenticate;
