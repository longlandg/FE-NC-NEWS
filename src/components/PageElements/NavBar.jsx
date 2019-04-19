import React, { components } from "react";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <button className="HomeButton" type="button">
        HOME
      </button>
      {props.userName && (
        <button className="UserPage" type="button">
          USER PAGE
        </button>
      )}
      {props.userName ? (
        <button className="LogOut" type="button">
          LOG OUT
        </button>
      ) : (
        <button className="LogIn" type="button">
          LOG IN
        </button>
      )}
    </nav>
  );
};

export default NavBar;
