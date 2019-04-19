import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./components/PageElements/Title.jsx";
import NavBar from "./components/PageElements/NavBar";

import SignInPageView from "./components/PageViews/SignInPageView";
import UserPageView from "./components/PageViews/UserPageView";
import HomePageView from "./components/PageViews/HomePageView";

import "./App.css";

class App extends Component {
  state = {
    userName: "george",
    loggedIn: false
  };
  render() {
    return (
      <div className="App">
        <Title userName={this.state.userName} />
        <NavBar userName={this.state.userName} />
        <Router>
          <SignInPageView path="/signin" userName={this.state.userName} />
          <UserPageView
            path="/users/:username"
            userName={this.state.userName}
          />
          <HomePageView path="/" userName={this.state.userName} />
        </Router>
      </div>
    );
  }
}

export default App;
