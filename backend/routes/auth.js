const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const cors = require("cors");
// app.use(cors({ origin: "http://127.0.0.1:5173/login", credentials: true }));
//REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  bcrypt.hashSync(password, salt);
    const userDetail = await User.findOne({username});
    console.log(userDetail);
    if (userDetail===null){
      const newUser = new User({ username, email, password: hashedPassword });
      const savedUser = await newUser.save();
       console.log(savedUser);
      res.status(200).json(savedUser);
    }else{
      console.log(userDetail);
      res.status(404).json(userDetail);
    }

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    //    console.log(user);

    if (!user) {
      return res.status(404).json("User not found!");
    }
    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(401).json("Wrong credentials!");
    }
    let token = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      "fbsdfbkjfbkjxzfbjkxzbf"
    );

    console.log("token" ,token);
    const { password, ...info } = user._doc;
    // res.cookie("uid", token);
    res.status(200).json(info);
    //  localStorage.setItem('token',token);
    // res.send({info ,token});
    // console.log(1);
    //  console.log(cookies.token);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGOUT
router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .send("User logged out successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//REFETCH USER
router.get("/refetch", (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, "fbsdfbkjfbkjxzfbjkxzbf", {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

module.exports = router;
