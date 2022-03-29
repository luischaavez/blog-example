const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
  return res.json({ message: "Hello World" });
});

module.exports = router;
