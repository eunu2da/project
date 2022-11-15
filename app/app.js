"use strict";
//app.js -> node server의 기본설정들
//server의 실행파일은 bin
//src에는 mvc디자인패턴대로 파일 분류
//home.ctrl -> js파일에서 컨트롤러
//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

//앱세팅
app.set("views", "./app/src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;
