import React from "react";

import { Link } from "@reach/router";

const SingleArticleCard = props => {
  return (
    <div>
      {props.individualArticle && (
        <div className="SingleArticleCard">
          <h1>{props.individualArticle.title}</h1>
          <p className="articledetails">{props.individualArticle.author}</p>
          <p className="tinytext">
            {" "}
            Posted:{Date(props.individualArticle.created_at)}
          </p>
          <p className="tinytext">Topic:{props.individualArticle.topic}</p>
          <p className="articledetails">{props.individualArticle.body}</p>
          <p className="tinytextblack">
            total votes: {props.individualArticle.votes + props.voteChange}
          </p>
          <Link
            to={`/articles/${props.individualArticle.article_id}/postcomment`}
          >
            <button
              disabled={!props.loggedIn}
              className="postbutton btn btn-primary btn-sm"
              type="button"
            >
              comment
            </button>
          </Link>

          <Link to={`/topics/articles/${props.individualArticle.topic}`}>
            <button
              className="articlesbutton btn btn-info btn-sm"
              type="button"
            >
              similar articles
            </button>
          </Link>
          <div className="votebutton">
            <button
              disabled={!props.loggedIn || props.voteChange > 0}
              type="button"
              className="btn btn-success btn-sm"
              onClick={() => props.handleVoteClick(1)}
            >
              vote up
            </button>
            <button
              disabled={!props.loggedIn || props.voteChange < 0}
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => props.handleVoteClick(-1)}
            >
              vote down
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleArticleCard;
