import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

const UserArticlesCard = props => {
  return (
    <div className="UserArticlesCard">
      {props.userArticles && (
        <div>
          <ul>
            {props.userArticles.map(article => {
              const {
                title,
                topic,
                created_at,
                comment_count,
                votes,
                article_id
              } = article;
              return (
                <li key={article_id} className="individualArticleCards">
                  <Link to={`/articles/${article_id}`}>
                    <h4 className="articletitle">{title} </h4>
                    <p className="articledetails">{topic} </p>
                    <p className="articledetails">Date Posted: {created_at}</p>
                    <p className="articledetails">
                      Number of Comments: {comment_count}{" "}
                    </p>
                    <p className="articledetails">Votes: {votes}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserArticlesCard;
