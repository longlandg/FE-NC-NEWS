import React, { Component } from "react";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

import {
  deleteComment,
  updateCommentsVotes,
  fetchAllCommentsByArticleId
} from "../Functions/apis";

class Voter extends Component {
  state = {
    voteChange: 0
  };

  render() {
    return (
      <div>
        <p name="totalVotes" className="tinytextblack">
          total votes:
          {this.props.votes + this.state.voteChange}
        </p>

        {/* <div key="" className="deletebutton">
          <button
            name={this.props.comments_id}
            className="deletebutton btn btn-warning btn-sm"
            type="button"
            disabled={
              this.props.userName !== this.props.individualArticle.author
            }
            onClick={this.props.clickHandler}
          >
            delete comment
          </button>
        </div> */}
        <div name="voting" className="votebutton">
          <button
            disabled={!this.props.loggedIn || this.state.voteChange > 0}
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => this.handleVoteClick(1, this.props.comments_id)}
          >
            vote up
          </button>
          <button
            disabled={!this.props.loggedIn || this.state.voteChange < 0}
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              this.handleVoteClick(-1, this.props.comments_id);
            }}
          >
            vote down
          </button>
        </div>
      </div>
    );
  }
  handleVoteClick = (vote, comment_id) => {
    console.log(comment_id);
    console.log(vote);
    console.log(this.props);
    updateCommentsVotes(vote, comment_id);
    this.setState(prevState => {
      console.log(this.state.voteChange);
      return {
        voteChange: prevState.voteChange + vote
      };
    });
  };
}

export default Voter;
