import React, { Component } from "react";

import SignInForm from "../PageElements/SignInForm";

import { fetchAllUsers } from "../Functions/apis";

class SignInPageView extends Component {
  state = {
    allUsers: []
  };
  render() {
    return (
      <div className="SignInPage">
        {!this.state.allUsers && <h1>LOADING...</h1>}
        <SignInForm
          className="SignInForm"
          allUsers={this.state.allUsers}
          userLoginFunc={this.props.userLoginFunc}
        />
      </div>
    );
  }

  componentDidMount = () => {
    fetchAllUsers().then(users => {
      this.setState({ allUsers: users });
    });
  };
}

export default SignInPageView;
