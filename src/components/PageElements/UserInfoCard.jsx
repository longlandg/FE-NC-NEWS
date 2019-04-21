import React, { Component } from "react";
import { navigate } from "@reach/router";

const UserInfoCard = props => {
  return (
    <div className="UserInfoCard">
      <div className="userpagehead">
        <h1 className="articledetails">{props.userInfo.username}</h1>
        <p className="articledetails">{props.userInfo.name}</p>
        <img src={props.userInfo.avatar_url} />
      </div>
    </div>
  );
};

export default UserInfoCard;
