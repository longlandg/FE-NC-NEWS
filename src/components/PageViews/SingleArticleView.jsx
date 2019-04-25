import React, { Component } from "react";

import { Link, navigate } from "@reach/router";
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
    voteChange: 0
  };

  componentDidUpdate() {}

  render() {
    return (
      <div className="SingleArticleView">
        {this.state.individualArticle && this.state.allComments && (
          <>
            <div className="SingleArticleCard">
              <SingleArticleCard
                individualArticle={this.state.individualArticle}
                loggedIn={this.props.loggedIn}
                voteChange={this.state.voteChange}
                handleVoteClick={this.handleVoteClick}
              />
            </div>
            <div className="AllCommentsCard">
              <AllCommentsCard
                allComments={this.state.allComments}
                userName={this.props.userName}
                clickHandler={this.clickHandler}
                loggedIn={this.props.loggedIn}
                individualArticle={this.state.individualArticle}
              />
            </div>
          </>
        )}
      </div>
    );
  }
  componentDidMount = () => {
    Promise.all([
      fetchSingleArticle(this.props.article_id),
      fetchAllCommentsByArticleId(this.props.article_id)
    ])
      .then(([individualArticle, allComments]) => {
        this.setState({ individualArticle, allComments });
      })
      .catch(err => {
        let ErrorMsg = err.response.data.msg;
        navigate(`/Error/${ErrorMsg}`);

        // console.log("this is the catch error", err.response.data.msg);
      });
  };

  clickHandler = event => {
    const comments_id = event.target.name;
    deleteComment(comments_id).then(res => {
      let filteredcomments = this.state.allComments.filter(
        comment => comment.comments_id !== +comments_id
      );
      this.setState({ allComments: filteredcomments }, () => {});
    });
  };

  handleVoteClick = numberOfVotes => {
    updateArticleVotes(numberOfVotes, this.props.article_id);
    this.setState(prevState => {
      console.log(this.state.voteChange);
      return {
        voteChange: prevState.voteChange + numberOfVotes
      };
    });
  };
}

export default SingleArticleView;
