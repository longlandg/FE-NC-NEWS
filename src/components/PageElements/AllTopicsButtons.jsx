import React, { Component } from "react";

import { Link } from "@reach/router";

const AllTopicsButtons = props => {
  return (
    <>
      {props.allTopicsSlugs && (
        <div className="AllTopicsButtons">
          {/* <button>{props.allTopicsSlugs[0]}</button> */}
          {props.allTopicsSlugs.map(topic => {
            return (
              <Link to={`/topics/articles/${topic}`} key={topic}>
                <button
                  className="topicButton  btn btn-secondary btn-sm"
                  type="button"
                >
                  {topic}
                </button>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default AllTopicsButtons;
