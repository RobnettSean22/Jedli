import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div id='headerContain'>
      <div id='logoContain'></div>
      <div id='linkContain'>
        <ul>
          <li>Music</li>
          <li>Events</li>
          <li>Story</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
