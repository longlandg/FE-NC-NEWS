// import Axios from "axios";

export const handleSubmit = event => {
  event.preventDefault();
  console.log("hello");
  console.log(event.target);
  console.log(this.props);
  //   console.log(userName);
  //   console.log(event.target.value);
  // this.props.userLoginFunc(this.state.userName);

  // this.setState({ ugserName: this.state.userName });

  // const checkForUser = this.state.AllUsers.filter((user) => {
  //   return user.username === this.state.userName;
  // });

  // if (checkForUser.length === 1) {
  //   // SaveState(this.props.userName, this.props.loggedIn);
  //   SaveState(this.state.userName, true);
  //   navigate(`/users/${this.state.userName}`);
  // } else {
  //   navigate(`/login`);
  // }
};
// handleChange = event => {
//   return event.target.value;
// };
// export default { handleSubmit, handleUserNameChange };
