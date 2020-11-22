const express = require("express");
const router = express.Router();
const Lyrics = require("../models/lyric");

router.get("/", async (req, res) => {
  try {
    const results = await Lyrics.find();
    console.log(results);
    res.json(results);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
