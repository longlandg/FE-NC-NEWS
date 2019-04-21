import React, { Component } from "react";
import { navigate } from "@reach/router";

const AllCommentsCard = props => {
  return (
    <div>
      {props.individualArticle && (
        <div className="SingleArticleCard">
          <h1>{props.individualArticle.title}</h1>
          <p className="articledetails">{props.individualArticle.author}</p>
          <p className="tinytext">
            {" "}
            Posted:{props.individualArticle.created_at}
          </p>
          <p className="tinytext">Topic:{props.individualArticle.topic}</p>
          <p className="articledetails">{props.individualArticle.body}</p>
          <p className="tinytextblack">
            total votes: {props.individualArticle.votes + props.voteChange}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllCommentsCard;
