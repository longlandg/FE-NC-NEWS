import React from "react";

import { Link } from "@reach/router";

const QueryNewArticleView = props => {
  return (
    <div>
      <h4 className="topicquery">
        Congratulations you have created the following topic: {props.newTopic}
      </h4>

      <Link to={`/article/postarticle/${props.newTopic}`}>
        <p className="topicquery">
          Would you like to write a new article for this topic?
        </p>
      </Link>
      <Link to={`/users/:username`}>
        <p className="topicquery">
          or would you like to return to your user page?
        </p>
      </Link>
    </div>
  );
};

export default QueryNewArticleView;
