import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router";
import { useTransition, animated } from "react-spring";
import Music from "./compnents/Music";
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
          </Switch>
        </animated.div>
      </div>
    </div>
  ));
};

export default App;
