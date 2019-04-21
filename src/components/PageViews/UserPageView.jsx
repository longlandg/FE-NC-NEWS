import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchUserInfo, fetchUserArticles } from "../Functions/apis";

import UserInfoCard from "../PageElements/UserInfoCard";

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
      <div>
        {this.state.userInfo && (
          <div>
            <h1>this is the user page view</h1>
            <UserInfoCard userInfo={this.state.userInfo} />
          </div>
        )}
      </div>
    );
  }
}
export default UserPageView;
