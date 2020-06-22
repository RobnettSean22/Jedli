import React, { Component } from "react";
import Header from "../Header/Header";
import "./Music.scss";
import { withRouter } from "react-router-dom";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  render() {
    const { content } = this.props;
    const { loading } = this.state;
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
                return (
                  <div id='tracks' key={song.trackNumber}>
                    {song.trackName}
                  </div>
                );
              })}
          </div>
          <div id=' albulm-grid'></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Music);
