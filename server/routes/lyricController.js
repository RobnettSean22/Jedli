const express = require("express");
const router = express.Router();
const Lyric = require("../models/lyric");
// manogo cluster connectioon
router.get("/", async (req, res) => {
  const results = await Lyric.find({});
  try {
    res.send(results);
  } catch (err) {
    res.json({ message: "Not found" });
  }
});
module.exports = router;
