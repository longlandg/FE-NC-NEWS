import React, { Component } from "react";

import { Link } from "@reach/router";
import {
  deleteComment,
  updateArticleVotes,
  updateCommentsVotes,
  fetchSingleArticle,
  fetchAllCommentsByArticleId
} from "../Functions/apis";

import SingleArticleCard from "../PageElements/SingleArticleCard";
import AllCommentsCard from "../PageElements/AllCommentsCard";

class SingleArticleView extends Component {
  state = {
    individualArticle: null,
    allComments: null,
    voteChange: 0,
    CommentVoteChange: 0
  };

  componentDidUpdate() {}

  render() {
    return (
      <div>
        {this.state.individualArticle && this.state.allComments && (
          <div className="temp">
            <SingleArticleCard
              individualArticle={this.state.individualArticle}
            />
            <AllCommentsCard allComments={this.state.allComments} />
          </div>
        )}
      </div>
    );
  }
  componentDidMount = () => {
    Promise.all([
      fetchSingleArticle(this.props.article_id),
      fetchAllCommentsByArticleId(this.props.article_id)
    ]).then(([individualArticle, allComments]) => {
      this.setState({ individualArticle, allComments });
    });
    console.log(localStorage);
  };
}

export default SingleArticleView;
