import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./components/PageElements/Title.jsx";
import NavBar from "./components/PageElements/NavBar";
import { navigate } from "@reach/router";

import SignInPageView from "./components/PageViews/SignInPageView";
import UserPageView from "./components/PageViews/UserPageView";
import HomePageView from "./components/PageViews/HomePageView";
// import SingleArticleView from "./components/PageViews/SingleArticleView";

import "./App.css";

class App extends Component {
  state = {
    userName: null,
    loggedIn: false
  };
  render() {
    return (
      <div className="App">
        <Title userName={this.state.userName} />
        <NavBar userName={this.state.userName} logOutFunc={this.logOutFunc} />
        <Router>
          <SignInPageView
            path="/signin"
            userLoginFunc={this.userLoginFunc}
            userName={this.state.userName}
          />
          <UserPageView
            path="/users/:username"
            userName={this.state.userName}
          />
          <HomePageView path="/" userName={this.state.userName} />
          {/* <SingleArticleView
            loggedIn={this.state.loggedIn}
            userName={this.state.userName}
            path="/articles/:article_id"
          /> */}
        </Router>
      </div>
    );
  }
  userLoginFunc = loggedUserName => {
    this.setState({ userName: loggedUserName, loggedIn: true });
  };
  logOutFunc = () => {
    this.setState({ userName: null, loggedIn: false });
    navigate(`/`);
  };
}

export default App;
