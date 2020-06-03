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
                <a href='#music'>
                  <button>music</button>
                </a>
              </li>
              <li>
                <a href='#events'>events</a>
              </li>
              <li>
                <a href='#styles'>styles</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id='music'>
        <div id='albums'></div>
      </div>
      <div id='events'>
        <div id='timer'>
          <div id='clock'>
            <div id='clock_container'></div>
          </div>
          <div id='current-event'>
            <div>
              <h1>Event title</h1>
            </div>
            <div>
              <h2>Loocations</h2>
            </div>
            <div>
              <h3>Date</h3>
            </div>
          </div>
        </div>
        <div id='directions'>
          <div>
            <div className='event-info'></div>
            <div className='event-info'></div>
            <div className='event-info'></div>
            <div className='event-info'></div>
            <div className='event-info'></div>
          </div>
        </div>
      </div>
      <div id='previous_events'>
        <div id='event-links'></div>
        <div id='past_events'></div>
      </div>
      <div id='styles'></div>
    </div>
  );
}

export default App;
