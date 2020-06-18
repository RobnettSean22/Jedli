import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";
import Music from "./compnents/Music/Music";
import Lyrics from "./compnents/Lyrics/Lyrics";
import Events from "./compnents/Events/Events";
import PastEvents from "./compnents/PastEvents/PastEvents";
import Story from "./compnents/Story/Story";
import "./App.scss";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(0%,100%" },
    enter: { opacity: 1, transform: "translate(0,0%" },
    leave: { opacity: 0, transform: "translate(0,-50%" }
  });

  return transitions.map(({ item, props, key }) => (
    <div>
      <div id='tiled'>
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path='/' component={Music} />
            <Route exact path='/lyrics' component={Lyrics} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/past-events' component={PastEvents} />
            <Route exact path='/story' component={Story} />
          </Switch>
        </animated.div>
      </div>
    </div>
  ));
};

export default App;
