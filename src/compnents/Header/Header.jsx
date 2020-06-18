import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  //   const toMusic = () => {
  //     this.props.history.push("/");
  //   };
  //   const toEvents = () => {
  //     this.props.history("/events");
  //   };
  //   const toStory = () => {
  //     this.props.history("/story");
  //   };
  return (
    <div id='headerContain'>
      <div id='logoContain'></div>
      <div id='linkContain'>
        <ul>
          <li>
            <NavLink activeClassName='active' className='inactive' to='/'>
              Music
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='inactive' to='events'>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='inactive' to='story'>
              Story
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
