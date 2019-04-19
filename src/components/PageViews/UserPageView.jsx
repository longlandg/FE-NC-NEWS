import React, { Component } from "react";
import { Link } from "@reach/router";

class UserPageView extends Component {
  state = {
    userInfo: null,
    userArticles: null,
    userComments: null
  };
  render() {
    return (
      <div>
        <h1>this is the user page view</h1>
      </div>
    );
  }
}
export default UserPageView;
