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
      music: ""
    };
  }
  componentDidMount() {
    this.arival();
  }

  async arival() {
    const res = await axios.get(
      `https://itunes.apple.com/search?term=JedLi&country=JP`
    );
    const { data } = await res;
    const filterMusic = await data.results.filter(specArtist => {
      return specArtist.artistId === 1492578733;
    });
    this.setState({
      music: filterMusic
    });
  }

  render() {
    const { music } = this.state;

    console.log(music);
    return (
      <div>
        <div id='tiled'>
          <Switch>
            <Route
              exact
              path='/'
              exact
              render={() => <Music content={music} />}
            />
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
