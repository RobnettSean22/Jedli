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
    const mapContent = content.map(song => {
      return <div key={song.trackCount}>{song.trackName}</div>;
    });
    return (
      <div id='musicCase'>
        <Header />
        <div id='musicHead'></div>
        <div id='musicTail'>
          <div id='songlist'>{mapContent}</div>
          <div id=' albulm-grid'></div>
        </div>
      </div>
    );
  }
}

export default withRouter(Music);
