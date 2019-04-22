import React, { Component } from "react";
import { navigate } from "@reach/router";

import Chart from "./Chart";

const UserInfoCard = props => {
  return (
    <div className="UserInfoCard">
      <img className="UserAvatar" src={props.userInfo.avatar_url} />
      <div className="UserPersonalDetails">
        <h1 className="UserUserName">{props.userInfo.username}</h1>
        <p className="UserName">{props.userInfo.name}</p>
      </div>
      <Chart />
      <p className="UserStats">userstates</p>
    </div>
  );
};

export default UserInfoCard;
