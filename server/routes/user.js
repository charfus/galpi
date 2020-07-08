const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("./auth");

// 로그인
router.post("/login", (req, res) => {
  // 이메일 있는지 확인
  // 비밀번호 확인
  // 토큰 부여

  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "해당하는 유저가 없습니다.",
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({
          loginSuccess: false,
          massage: "비밀번호가 틀렸습니다.",
        });
    });

    user.generateToken((err, user) => {
      if (err) return res.status(400).send(err);
      res
        .cookie("x_auth", user.token)
        .status(200)
        .json({ loginSuccess: true, userId: user._id });
    });
  });
});

//로그아웃
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});