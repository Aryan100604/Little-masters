const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");

const app = express();
const port = 5000;
const secretKey = "your_secret_key";

app.use(cors());
app.use(bodyParser.json());

let users = []; // Dummy database

app.post(
  "/api/signup",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("class")
      .isInt({ min: 1, max: 10 })
      .withMessage("Class must be between 1 and 10"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, class: userClass } = req.body;

    const userExists = users.find((u) => u.username === username);
    if (userExists) {
      return res.status(400).send("Username already taken");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword, class: userClass });

    res.status(200).send("User registered successfully");
  }
);

app.post(
  "/api/login",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign(
      { username: user.username, class: user.class },
      secretKey,
      { expiresIn: "1h" }
    );
    res.status(200).json({ message: "Login successful", token });
  }
);

app.get("/api/protected", (req, res) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("Token required");
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    res.status(200).json({ message: "Protected content", user: decoded });
  } catch (err) {
    res.status(401).send("Invalid token");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
