//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
require("dotenv").config();
const path = require("path");

const app = express();
app.use(express.static("Public"));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Public')));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true });
const teamSchema = {
  cname: String,
  cmobile: String,
  p1name: String,
  p1mobile: String,
  p2name: String,
  p2mobile: String,
  p3name: String,
  p3mobile: String,
  p4name: String,
  p4mobile: String,
  p5name: String,
  p5mobile: String,
  p6name: String,
  p6mobile: String,
  p7name: String,
  p7mobile: String,
  p8name: String,
  p8mobile: String,
  p9name: String,
  p9mobile: String,
  p10name: String,
  p10mobile: String,
  p11name: String,
  p11mobile: String,
  p12name: String,
  p12mobile: String,
  p13name: String,
  p13mobile: String,
};
const Team = new mongoose.model("Team", teamSchema);
app.get("/", function (req, res) {
  //   res.send("form");
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/form", function (req, res) {
  const newTeam = new Team({
    cname: req.body.cname,
    cmobile: req.body.cmobile,
    p1name: req.body.p1name,
    p1mobile: req.body.p1mobile,
    p2name: req.body.p2name,
    p2mobile: req.body.p2mobile,
    p3name: req.body.p3name,
    p3mobile: req.body.p3mobile,
    p4name: req.body.p4name,
    p4mobile: req.body.p4mobile,
    p5name: req.body.p5name,
    p5mobile: req.body.p5mobile,
    p6name: req.body.p6name,
    p6mobile: req.body.p6mobile,
    p7name: req.body.p7name,
    p7mobile: req.body.p7mobile,
    p8name: req.body.p8name,
    p8mobile: req.body.p8mobile,
    p9name: req.body.p9name,
    p9mobile: req.body.p9mobile,
    p10name: req.body.p10name,
    p10mobile: req.body.p10mobile,
    p11name: req.body.p11name,
    p11mobile: req.body.p11mobile,
    p12name: req.body.p12name,
    p12mobile: req.body.p12mobile,
    p13name: req.body.p13name,
    p13mobile: req.body.p13mobile,
  });
  newTeam
    .save()
    .then(() => {
      //   res.send("success");
      res.sendFile(__dirname + "/Public/success.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("app is running on port 3000");
});