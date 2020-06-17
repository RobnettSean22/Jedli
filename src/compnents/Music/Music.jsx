import React from "react";
import "./Music.scss";
import { withRouter } from "react-router-dom";

const Music = () => {
  return (
    <div id='musicCase'>
      <div id='musicHead'></div>
      <div id='musicTail'></div>
    </div>
  );
};

export default withRouter(Music);
