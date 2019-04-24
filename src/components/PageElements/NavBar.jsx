import React, { components } from "react";
import { Link } from "@reach/router";

const NavBar = props => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <button className="HomeButton btn btn-secondary btn-sm" type="button">
          HOME
        </button>
      </Link>
      <div className="RightHandSideNavBar">
        {props.userName && (
          <>
            <Link to={`/users/${props.userName}`}>
              <button
                className="UserPage btn btn-secondary btn-sm"
                type="button"
              >
                USER PAGE
              </button>
            </Link>
            <Link to={`/topics/createtopic`}>
              <button className="newTopicButton btn btn-secondary btn-sm">
                CREATE NEW TOPIC
              </button>
            </Link>
            <Link to={`/article/postarticle `}>
              <button className="newArticleButton btn btn-secondary btn-sm">
                WRITE NEW ARTICLE
              </button>
            </Link>
          </>
        )}
        {props.userName ? (
          <button
            className="LogOut btn btn-secondary btn-sm"
            type="button"
            onClick={() => props.logOutFunc()}
          >
            LOG OUT
          </button>
        ) : (
          <Link to={"/signin"}>
            <button className="LogIn btn btn-secondary btn-sm" type="button">
              LOG IN
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
