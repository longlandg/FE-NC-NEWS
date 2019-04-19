import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./components/PageElements/Title.jsx";

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
      </div>
    );
  }
}

export default App;
