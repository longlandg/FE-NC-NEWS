import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";
import Chart from "./Chart";

const UserInfoCard = props => {
  const positiveArticles = [];
  const negativeArticles = [];
  const evenArticles = [];

  props.userArticles.forEach(article => {
    if (article.votes === 0) {
      evenArticles.push(article);
    } else if (article.votes > 0) {
      positiveArticles.push(article);
    } else if (article.votes < 0) {
      negativeArticles.push(article);
    }
  });
  return (
    <div className="UserInfoCard">
      <div className="imageContainer">
        <img
          className="UserAvatar"
          src={props.userInfo.avatar_url}
          img
          alt
          src="http://artlung.com/smorgasborg/friendster-profile-default.jpg"
        />
      </div>
      <div className="UserPersonalDetails">
        <p className="tinytext ">Username:</p>
        <h4 className="UserUserName">{props.userInfo.username}</h4>
        <p className="tinytext ">Name:</p>
        <p className="UserName">{props.userInfo.name}</p>
      </div>
      {props.userArticles && (
        <div className="Chartcard">
          {" "}
          <Chart
            userArticles={props.userArticles}
            userComments={props.userComments}
            positiveArticles={positiveArticles.length}
            negativeArticles={negativeArticles.length}
            evenArticles={evenArticles.length}
          />
        </div>
      )}
      <p className="UserStats">
        You have written {props.userArticles.length} articles, of which{" "}
        {positiveArticles.length} have a positive number of votes,{" "}
        {negativeArticles.length} have a negative number of votes and{" "}
        {evenArticles.length} have a vote total of zero.
      </p>
    </div>
  );
};

export default UserInfoCard;
