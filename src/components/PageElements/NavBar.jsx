import React from "react";
import { Link } from "@reach/router";

const NavBar = props => {
  return (
    <nav className="NavBar" expand="lg">
      <div className="LeftHandSideNavBar">
        <Link to="/">
          <button
            className="AllArticles btn btn-secondary btn-sm"
            type="button"
          >
            ALL ARTICLES
          </button>
        </Link>
        <Link to={`/topics/createtopic`}>
          <button className="newTopicButton btn btn-secondary btn-sm">
            TOPICS PAGE
          </button>
        </Link>
      </div>
      <div className="RightHandSideNavBar">
        {props.userName && (
          <>
            <Link to={`/users/${props.userName}`}>
              <button
                className="UserPage btn btn-secondary btn-sm"
                type="button"
              >
                {props.userName.toUpperCase()}'S PAGE
              </button>
            </Link>
            <Link to={`/article/postarticle `}>
              <button className="newArticleButton btn btn-secondary btn-sm">
                NEW ARTICLE
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
          <>
            <p className="PreLogInNotice">
              For more functionality please log in{" "}
            </p>
            <Link to={"/signin"}>
              <button className="LogIn btn btn-secondary btn-sm" type="button">
                LOG IN
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
