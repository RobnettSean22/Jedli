import React, { Component } from "react";
import Header from "../Header/Header";
import "./Music.scss";
import { withRouter } from "react-router-dom";
import AudioControls from "../AudioControls";
class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flipSwitch: 1
    };
  }
  minsSeconds = ms => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  playButton = y => {
    var x = document.getElementById(y);
    x.play();
  };
  stopButton = y => {
    var x = document.getElementById(y);
    x.pause();
  };
  pauseTrigger = () => {
    this.setState({
      flipSwitch: 3
    });
  };
  playTrigger = () => {
    this.setState({
      flipSwitch: 1
    });
  };

  render() {
    const { content } = this.props;

    console.log(content);

    return (
      <div id='musicCase'>
        <Header />
        <div id='musicHead'></div>
        <div id='musicTail'>
          <div id='songlist'>
            <div id='album-title'></div>
            {content.length > 1 &&
              content.map(song => {
                const trackTime = this.minsSeconds(song.trackTimeMillis);
                const newCredentials = song.trackName.replace(/\s/g, "");

                return (
                  <div id='tracks' key={song.trackNumber}>
                    {song.trackName}
                    {trackTime}

                    <AudioControls
                      play={this.playButton}
                      stop={this.stopButton}
                      pauseTrig={this.pauseTrigger}
                      playTrig={this.playTrigger}
                      switch={this.state.flipSwitch}
                      identify={newCredentials}
                    />
                    <audio id={newCredentials} src={song.previewUrl}>
                      Your browser does not support the
                      <code></code> element.
                    </audio>
                  </div>
                );
              })}
          </div>

          <div id='alblum-grid'>
            <img
              src='https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/49/95/d6/4995d64d-1b1b-e880-1c0e-29fc5b61ba85/source/100x100bb.jpg'
              alt=''
            />
            <img
              src='https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/7a/80/7e/7a807e03-9702-31dc-4d0f-055ca612a231/source/100x100bb.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Music);
