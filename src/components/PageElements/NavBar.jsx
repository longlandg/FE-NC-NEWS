import React, { components } from "react";
import { Link } from "@reach/router";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <button className="HomeButton" type="button">
          HOME
        </button>
      </Link>
      <div className="RightHandSideNavBar">
        {props.userName && (
          <Link to={`/users/${props.userName}`}>
            <button className="UserPage" type="button">
              USER PAGE
            </button>
          </Link>
        )}
        {props.userName ? (
          <button
            className="LogOut"
            type="button"
            onClick={() => props.logOutFunc()}
          >
            LOG OUT
          </button>
        ) : (
          <Link to={"/signin"}>
            <button className="LogIn" type="button">
              LOG IN
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
