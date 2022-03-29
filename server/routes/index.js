const express = require("express");
const router = express.Router();

const blogs = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    description: "Two imprisoned",
    author: "Stephen King",
  },
  {
    id: 2,
    title: "The Godfather",
    description: "The aging patriarch",
    author: "Mario Puzo",
  },
];

router.get("/hello", (req, res) => {
  return res.json({ message: "Hello World" });
});

router.get("/blogs", (req, res) => {
  return res.json(blogs);
});

router.post("/blogs", (req, res) => {
  const newBlog = req.body;
  newBlog.id = blogs.length + 1;
  blogs.push(newBlog);
  return res.json(newBlog);
});

module.exports = router;
