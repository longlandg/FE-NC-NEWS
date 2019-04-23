import React, { Component } from "react";

import { Link } from "@reach/router";

const AllTopicsButtons = props => {
  console.log(props);
  console.log(props.allTopicsSlugs);
  return (
    <>
      {props.allTopicsSlugs && (
        <div className="AllTopicsButtons">
          {/* <button>{props.allTopicsSlugs[0]}</button> */}
          {props.allTopicsSlugs.map(topic => {
            return (
              <Link to={"/"}>
                <button className="topicButton" key={topic} type="button">
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
