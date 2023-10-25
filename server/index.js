const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
const passport = require("passport");
require("./config/passport")(passport);
const cors = require("cors");

// 連結 MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/mernDB")
  .then(() => {
    console.log("連結到 mongodb...");
  })
  .catch((e) => {
    console.log(e);
  });

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use("/api/user", authRoute);

// 只有登入系統的人，才能夠去新增課程或是註冊課程。所以這些人一定都會有 JWT
// 在製作跟 course 有關的 routes 時，
// 要去驗證這些人擁有的 JWT，是不是有效的JWT。
// 只有驗證過 JWT 的人，才能讓他去新增或是註冊課程

// course route 應該被 JWT 保護
// 如果 request header 內部沒有 JWT，則 request 就會被視為是 unauthorized
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);

app.listen(8080, () => {
  console.log("後端伺服器在聆聽 port 8080... ");
});
