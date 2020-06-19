import React, { Component } from "react";
import { Switch, Route } from "react-router";
import axios from "axios";
import Music from "./compnents/Music/Music";
import Lyrics from "./compnents/Lyrics/Lyrics";
import Events from "./compnents/Events/Events";
import PastEvents from "./compnents/PastEvents/PastEvents";
import Story from "./compnents/Story/Story";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  arival = () => {
    axios
      .get(
        `https://itunes.apple.com/search?term=jedli
    `
      )
      .then(res => {
        this.state({
          content: res.data
        });
      });
  };

  render() {
    console.log(this.state.content);
    return (
      <div>
        <div id='tiled'>
          <Switch>
            <Route exact path='/' exact render={() => <Music />} />
            <Route exact path='/lyrics' component={Lyrics} />
            <Route exact path='/events' component={Events} />
            <Route exact path='/past-events' component={PastEvents} />
            <Route exact path='/story' component={Story} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
