const mongoose = require("mongoose");

const LyricSchema = mongoose.Schema({
  trackNumber: {
    type: Number,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  collectionName: {
    type: String,
    required: true
  },
  trackName: {
    type: String,
    required: true
  },
  lyrics: {
    type: String,
    required: true
  }
  // trackNumber:Number,
  // artist:String,
  // collectionName:String,
  // trackName:String,
  // lyrics:String
});
module.exports = mongoose.model("lyric", LyricSchema);
