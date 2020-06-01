import React from "react";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <div id='landing'>
        <div className='head'></div>
        <div className='title'>
          <div>
            <h1>JedLi</h1>
          </div>
          <div className='links'>
            <ul>
              <li>
                <button>music</button>
              </li>
              <li>events</li>
              <li>style</li>
            </ul>
          </div>
        </div>
      </div>
      <div id='music'>
        <div id='albums'></div>
      </div>
      <div id='events'>
        <div id='timer'>
          <div id='clock'></div>
          <div id='current-event'></div>
        </div>
        <div id='directions'></div>
      </div>
      <div id='previous_events'>
        <div id='event-links'></div>
        <div id='past_events'></div>
      </div>
      <div id='style'></div>
    </div>
  );
}

export default App;
