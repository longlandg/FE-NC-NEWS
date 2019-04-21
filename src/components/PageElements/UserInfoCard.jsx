import React, { Component } from "react";
import { navigate } from "@reach/router";

const UserInfoCard = props => {
  return (
    <div className="UserInfoCard">
      <h1>{props.userInfo.username}</h1>
      <p>{props.userInfo.name}</p>
      <img src={props.userInfo.avatar_url} />
    </div>
  );
};

export default UserInfoCard;
