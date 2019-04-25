import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./components/PageElements/Title.jsx";
import NavBar from "./components/PageElements/NavBar";
import { navigate } from "@reach/router";

import SignInPageView from "./components/PageViews/SignInPageView";
import UserPageView from "./components/PageViews/UserPageView";
import HomePageView from "./components/PageViews/HomePageView";
import SingleArticleView from "./components/PageViews/SingleArticleView";
import CreateTopicView from "./components/PageViews/CreateTopicView";
import PostArticleView from "./components/PageViews/PostArticleView";
import QueryNewArticleView from "./components/PageViews/QueryNewArticleView";
import PostCommentView from "./components/PageViews/PostCommentView";
import Error from "./components/PageViews/Error";

import "./App.css";

class App extends Component {
  state = {
    userName: null,
    loggedIn: false
  };

  componentDidMount() {
    console.log(localStorage);
    console.log(localStorage.userName);
    {
      localStorage.userName && this.userLoginFunc(localStorage.userName);
    }
    //   const recentlyLoggedInUser = localStorage.getItem("userName");
    //   this.setState({ userName: recentlyLoggedInUser });
    //   this.userLoginFunc(this.state.userName);
  }
  render() {
    return (
      <div className="App">
        <div className="head">
          <Title userName={this.state.userName} />
          <NavBar userName={this.state.userName} logOutFunc={this.logOutFunc} />
        </div>
        <div className="Router">
          <Router>
            <SignInPageView
              path="/signin"
              userLoginFunc={this.userLoginFunc}
              userName={this.state.userName}
            />
            <UserPageView
              path="/users/:username"
              userName={this.state.userName}
              loggedIn={this.state.loggedIn}
            />
            <HomePageView
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              path="/"
            />
            <HomePageView
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              path="/topics/createtopic/:topic"
              //  path="/:topic"
            />
            {/* <SingleArticleView
            loggedIn={this.state.loggedIn}
            userName={this.state.userName}
            path="/articles/:article_id"
          /> */}
            <SingleArticleView
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              path="/articles/:article_id"
            />
            <CreateTopicView
              article_id={this.state.article_id}
              userName={this.state.userName}
              path="/topics/createtopic"
            />
            <PostArticleView
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              path="/article/postarticle"
            />

            <PostArticleView
              loggedIn={this.state.loggedIn}
              userName={this.state.userName}
              path="/article/postarticle/:newTopic"
            />
            <PostCommentView
              loggedIn={this.state.loggedIn}
              article_id={this.state.article_id}
              userName={this.state.userName}
              path="/articles/:article_id/postcomment"
            />
            <QueryNewArticleView
              loggedIn={this.state.loggedIn}
              slug={this.state.slug}
              userName={this.state.userName}
              path="/article/createquery/:newTopic"
            />
            <Error path="/Error" default />
            <Error path="/Error/:ErrorMsg" default />
          </Router>
        </div>
      </div>
    );
  }
  userLoginFunc = loggedUserName => {
    this.setState({ userName: loggedUserName, loggedIn: true });
    localStorage.setItem("userName", loggedUserName);
  };
  logOutFunc = () => {
    localStorage.removeItem("userName");
    this.setState({ userName: null, loggedIn: false });
    navigate(`/`);
  };
}

export default App;
