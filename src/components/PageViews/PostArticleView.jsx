import React, { Component } from "react";
import { navigate } from "@reach/router";
import { postTopic } from "../Functions/apis";

class PostArticleView extends Component {
  state = {
    slug: "",
    description: ""
  };

  render() {
    return <h1> thisis the post article view</h1>;
  }
}
export default PostArticleView;
