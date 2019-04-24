import React, { Component } from "react";
import { Link } from "@reach/router";

import {
  fetchUserInfo,
  fetchUserArticles,
  deleteArticle
} from "../Functions/apis";

import UserInfoCard from "../PageElements/UserInfoCard";
import UserArticlesCard from "../PageElements/UserArticlesCard";

class UserPageView extends Component {
  state = {
    userInfo: null,
    userArticles: null
  };
  componentDidMount = () => {
    Promise.all([
      fetchUserInfo(this.props.userName),
      fetchUserArticles(this.props.userName)
    ]).then(([userInfo, userArticles]) => {
      this.setState({ userInfo, userArticles });
    });
  };

  componentDidUpdate = () => {};

  render() {
    return (
      <div className="UserPageView">
        {this.state.userInfo && (
          <UserInfoCard
            userArticles={this.state.userArticles}
            userInfo={this.state.userInfo}
          />
        )}
        {this.state.userInfo && (
          <div className="UserArticles">
            <UserArticlesCard
              userArticles={this.state.userArticles}
              userComments={this.state.userComments}
              clickHandler={this.clickHandler}
            />
          </div>
        )}
      </div>
    );
  }

  clickHandler = event => {
    console.log("1st line of click handler", this.state.userArticles);
    const article_id = event.target.name;
    deleteArticle(article_id).then(res => {
      let filteredarticles = this.state.userArticles.filter(
        article =>
          // console.log(
          //   "2st line of click handler",
          //   article.article_id,
          //   +article_id
          // )
          article.article_id !== +article_id
      );

      this.setState({ userArticles: filteredarticles });
      console.log(this.state.userArticles);
    });
  };
}
export default UserPageView;
