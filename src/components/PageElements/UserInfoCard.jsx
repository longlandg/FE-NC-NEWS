import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";
import Chart from "./Chart";

const UserInfoCard = props => {
  console.log(props.userArticles);
  return (
    <div className="UserInfoCard">
      <div className="imageContainer">
        <img className="UserAvatar" src={props.userInfo.avatar_url} />
      </div>
      <div className="UserPersonalDetails">
        <h1 className="UserUserName">{props.userInfo.username}</h1>
        <p className="UserName">{props.userInfo.name}</p>
      </div>
      {props.userArticles && (
        <Chart
          userName="Chart"
          userArticles={props.userArticles}
          userComments={props.userComments}
        />
      )}
      <p className="UserStats">userstates</p>
    </div>
  );
};

export default UserInfoCard;
