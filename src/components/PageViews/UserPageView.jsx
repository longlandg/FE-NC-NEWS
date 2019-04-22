import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchUserInfo, fetchUserArticles } from "../Functions/apis";

import UserInfoCard from "../PageElements/UserInfoCard";
import UserArticlesCard from "../PageElements/UserArticlesCard";

class UserPageView extends Component {
  state = {
    userInfo: null,
    userArticles: null,
    userComments: null
  };
  componentDidMount = () => {
    Promise.all([
      fetchUserInfo(this.props.userName),
      fetchUserArticles(this.props.userName)
    ]).then(([userInfo, userArticles]) => {
      this.setState({ userInfo, userArticles });
      console.log(this.state);
    });
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <div className="UserPageView">
        {this.state.userInfo && <UserInfoCard userInfo={this.state.userInfo} />}
        {this.state.userInfo && (
          <div className="UserArticles">
            <UserArticlesCard userArticles={this.state.userArticles} />
          </div>
        )}
      </div>
    );
  }
}
export default UserPageView;
