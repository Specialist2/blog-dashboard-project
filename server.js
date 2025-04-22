const express = require("express");
const app = express();
const mysql = require("mysql");
const formatCustomDate = require("./utils.js");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "blog_db",
});

const protectedRoutes = ["/profile", "/dashboard"];

function checkForProtectedRoutes(req, res, next) {
  if (protectedRoutes.includes(req.url)) {
    res.end("You have to be logged in");
  } else {
    next();
  }
}
// middleware functions --- use cases in express js web server
app.use(checkForProtectedRoutes);

// routes
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.get("/register", (req, res) => {
  res.render("register.ejs");
});
app.get("/posts", (req, res) => {
  // show all posts with posible actions like (edit, delete, hide, view post, view post comments, view likes and much more) - the actions will be in form of a links or buttons.
  //   192.168.1.46:8000/posts

  connection.query("SELECT * FROM posts", (error, posts) => {
    if (error) {
      res.json(error);
    } else {
      res.render("posts.ejs", {
        blogs: posts,
        formatCustomDate: formatCustomDate,
      });
    }
  });
});
app.get("/posts/:postID", (req, res) => {
  // show a single post (all content, images, comments(preview)) - for public(no actions), for admin(actions like edit, delete to be shown in this page)
  res.render("post.ejs");
});
app.get("/newPost", (req, res) => {
  res.render("newpost.ejs");
});
app.post(
  "/newPost",
  express.urlencoded({ extended: true }),
  checkForProtectedRoutes,
  (req, res) => {
    // console.log(req.body);
    connection.query(
      `INSERT INTO posts(user_id, title, content) VALUES(2,"${req.body.title}","${req.body.content}")`,
      (err) => {
        if (err) {
          res.status(504);
          res.json(err);
        } else {
          res.redirect("/posts");
        }
      }
    );
    // res.redirect("/posts/5");
  }
);
// listen/start -- alway define/write after all routess --- at the end (js is interprated)
app.listen(8000, () => console.log("App started and running on port 8000"));
