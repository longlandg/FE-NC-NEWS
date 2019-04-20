import React, { Component } from "react";

import SignInForm from "../PageElements/SignInForm";

import { fetchAllUsers } from "../Functions/apis";

class SignInPageView extends Component {
  state = {
    allUsers: []
  };
  render() {
    return (
      <div>
        <h1>this is the sign in page view</h1>
        <SignInForm
          allUsers={this.state.allUsers}
          userLoginFunc={this.props.userLoginFunc}
        />
      </div>
    );
  }

  componentDidMount = () => {
    fetchAllUsers().then(users => {
      this.setState({ allUsers: users });
      console.log(this.state.allUsers);
      console.log("these are the props", this.props);
    });
  };
}

export default SignInPageView;
