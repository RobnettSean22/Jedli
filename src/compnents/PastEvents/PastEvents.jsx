import React from "react";
import Header from "../Header/Header";
import "../PastEvents/PastEvents.scss";
import { withRouter } from "react-router-dom";

function PastEvents() {
  return (
    <div id='pastEventsCase'>
      <Header />
      <div id='pastEventsHead'></div>
      <div id='pastEventsTail'></div>
    </div>
  );
}

export default withRouter(PastEvents);
