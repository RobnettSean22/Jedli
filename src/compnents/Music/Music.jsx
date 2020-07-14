import React, { Component } from "react";
import Header from "../Header/Header";
import "./Music.scss";
import { withRouter } from "react-router-dom";

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
                return (
                  <div id='tracks' key={song.trackNumber}>
                    {song.trackName}
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
