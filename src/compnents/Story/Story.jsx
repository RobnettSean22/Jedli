import React from "react";
import Header from "../Header/Header";
import "../Story/Story.scss";
import { withRouter } from "react-router-dom";

function Story() {
  return (
    <div id='storyCase'>
      <Header />
      <div id='storyHead'></div>
      <div id='storyTail'></div>
    </div>
  );
}

export default withRouter(Story);
