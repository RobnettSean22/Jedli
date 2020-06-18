import React from "react";
import Header from "../Header/Header";
import "../Events/Events.scss";
import { withRouter } from "react-router-dom";

function Events() {
  return (
    <div id='eventsCase'>
      <Header />
      <div id='eventsHead'></div>
      <div id='eventsTail'></div>
    </div>
  );
}

export default withRouter(Events);
