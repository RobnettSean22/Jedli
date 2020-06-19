import React from "react";
import Header from "../Header/Header";
import "./Music.scss";
import { withRouter } from "react-router-dom";

const Music = props => {
  return (
    <div id='musicCase'>
      <Header />
      <div id='musicHead'></div>
      <div id='musicTail'></div>
    </div>
  );
};

export default withRouter(Music);
