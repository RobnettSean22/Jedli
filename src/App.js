import React from "react";
import { Switch, Route } from "react-router";
import Landing from "./compnents/Landing";
import Music from "./compnents/Music";
import AlbumSongList from "./compnents/AlbumSongList";
import Lyrics from "./compnents/Lyrics";
import Videos from "./compnents/Videos";
import Events from "./compnents/Events";

const App = props => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/music/' component={Music} />
        <Route exact path={`/music/:album/`} component={AlbumSongList} />
        <Route path={`/music/:album/:song/`} component={Lyrics} />
        <Route exact path='/videos/' component={Videos} />
        <Route exact path='/events/' component={Events} />
      </Switch>
    </>
  );
};
export default App;
