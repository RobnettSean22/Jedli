import React from "react";
import Header from "../Header/Header";
import "../Lyrics/Lyrics.scss";
import { withRouter } from "react-router-dom";
function Lyrics() {
  return (
    <div id='lyricsCase'>
      <Header />
      <div id='lyricsHead'></div>
      <div id='lyricsTail'></div>
    </div>
  );
}

export default withRouter(Lyrics);
