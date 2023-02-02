const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

router.post("/signup", async (req, res) => {
  const { name, password } = req.body;

  try {
    // hash the password that we recieve
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );
    const createdUser = await User.create({ name, password: hashedPassword });
    console.log(createdUser);
    res.json({ hashedPassword });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  try {
    // Find the user by their name
    const foundUser = await User.findOne({ name });
    // Compare the sent password with the hashed one
    const result = await bcrypt.compare(password, foundUser.password);

    console.log(result);

    if (result) {
      // generate JWT & Send back
      const token = jwt.sign(
        { name: foundUser.name, _id: foundUser._id },
        process.env.SECRET
      );
      res.status(200).json({ token });
    } else {
      // error if password doesn't match
      res.json({ error: "password doesn't match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;