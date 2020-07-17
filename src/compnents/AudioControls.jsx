import React from "react";

const AudioControls = props => {
  if (props.switch === 1) {
    return (
      <div>
        <button
          onClick={e => {
            props.play(props.identify);
            props.pauseTrig();
          }}
        >
          play
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button
          onClick={e => {
            props.stop(props.identify);
            props.playTrig();
          }}
        >
          stop
        </button>
      </div>
    );
  }
};

export default AudioControls;
