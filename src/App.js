import React from "react";
import { Switch, Route } from "react-router";

import Music from "./compnents/Music/Music";
import Lyrics from "./compnents/Lyrics/Lyrics";
import Events from "./compnents/Events/Events";
import PastEvents from "./compnents/PastEvents/PastEvents";
import Story from "./compnents/Story/Story";
import "./App.scss";

const App = () => {
  return (
    <div>
      <div id='tiled'>
        <Switch>
          <Route exact path='/' component={Music} />
          <Route exact path='/lyrics' component={Lyrics} />
          <Route exact path='/events' component={Events} />
          <Route exact path='/past-events' component={PastEvents} />
          <Route exact path='/story' component={Story} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
