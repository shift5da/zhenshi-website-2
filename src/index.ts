/*
 * @Author: Wuda
 * @Date: 2025-11-17 20:19:27
 * @LastEditTime: 2026-05-03 22:29:58
 * @Description:
 */
import express from "express";
import path from "path";

const app = express();
const port = 3001;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index.html", (req, res) => {
  res.render("index");
});

app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml");
  res.sendFile(path.join(__dirname, "../public", "sitemap.xml"));
});

app.get("/seasonal_gi", (req, res) => {
  res.render("seasonal_gi/index", {
    activeMenu: "gi",
    subActiveMenu: "seasonal_gi",
  });
});

app.get("/news/251201", (req, res) => {
  res.render("news/251201");
});

app.get("/news/251219", (req, res) => {
  res.render("news/251219");
});

app.get("/news/260503", (req, res) => {
  res.render("news/260503");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
