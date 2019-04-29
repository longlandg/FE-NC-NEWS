import React, { Component } from "react";

import { navigate } from "@reach/router";
import { postComment } from "../Functions/apis";

import NewCommentForm from "../PageElements/NewCommentForm";

class PostCommentView extends Component {
  state = {
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = this.state;

    newComment.username = this.props.userName;

    postComment(newComment, this.props.article_id).then(res => {
      navigate(`/articles/${this.props.article_id}`);
    });
  };

  render() {
    return (
      <div>
        {this.props.userName ? (
          <NewCommentForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        ) : (
          <p>Please log in to create acomment</p>
        )}
      </div>
    );
  }
}
export default PostCommentView;
