import React, { Component } from "react";

import { updateCommentsVotes } from "../Functions/apis";

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
    updateCommentsVotes(vote, comment_id);
    this.setState(prevState => {
      return {
        voteChange: prevState.voteChange + vote
      };
    });
  };
}

export default Voter;
