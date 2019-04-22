// import Axios from "axios";
import { postTopic } from "../Functions/apis";
import { navigate } from "@reach/router";

// export const handleSubmit = event => {
//   event.preventDefault();
//   console.log("hello");
//   console.log(event.target);
//   console.log(this.props);

export const handleChange = event => {
  console.log(event.target.name);
  let name = event.target.name;
  this.setState({ [name]: event.target.value });
};

export const handleSubmit = event => {
  event.preventDefault();
  const newTopic = this.state;

  postTopic(newTopic).then(res => {
    navigate(`/article/createquery/${this.state.slug}`);
  });
};
