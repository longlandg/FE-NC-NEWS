import React, { Component } from "react";

import { navigate } from "@reach/router";
import { postComment } from "../Functions/apis";

import NewCommentForm from "../PageElements/NewCommentForm";

class PostCommentView extends Component {
  state = {
    // username: this.props.userName,
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = this.state;
    console.log("this is the rops", this.props);
    newComment.username = this.props.userName;
    console.log("this is the new comment", newComment);
    postComment(newComment, this.props.article_id).then(res => {
      navigate(`/articles/${this.props.article_id}`);
    });
  };

  render() {
    return (
      <NewCommentForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default PostCommentView;
