const express = require("express");
const router = express.Router();
const Lyric = require("../models/lyric");

router.get("/", async (req, res) => {
  const results = await Lyric.find({});
  try {
    res.send(results);
    console.log("ok");
  } catch (err) {
    res.json({ message: "Not found" });
  }
});
module.exports = router;
