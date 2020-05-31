import React from "react";
import "./App.scss";

function App() {
  return (
    <div className='App'>
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
  );
}

export default App;
