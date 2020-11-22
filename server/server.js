require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
app.use(bodyParser.json());
const lyricRoute = require("./routes/lyricController");

app.use("/lyrics", lyricRoute);
const { DB_CONNECTION } = process.env;
mongoose.connect(
  DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

let port = 4000 || 5000;

app.listen(port, () => console.log(`server is up and running on port ${port}`));
