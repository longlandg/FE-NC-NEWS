import React, { Component } from "react";
import { Link, navigate } from "@reach/router";
import { postArticle, fetchAllTopics } from "../Functions/apis";

import NewArticleForm from "../PageElements/NewArticleForm";

class PostArticleView extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    AllTopics: "",
    TopicDoesExist: true
  };
  componentDidMount = () => {
    fetchAllTopics().then(topics => {
      this.setState({ AllTopics: topics });
      {
        this.props.newTopic && this.setState({ topic: this.props.newTopic });
      }
      console.log("hello im the topics", topics);
      console.log(this.props);
    });
  };

  render() {
    console.log(this.state.topic);
    return (
      <div className="articleinform">
        {!this.state.AllTopics && <h1>LOADING...</h1>}
        <NewArticleForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          newTopic={this.props.newTopic}
          TopicDoesExist={this.state.TopicDoesExist}
        />
      </div>
    );
  }
  handleChange = event => {
    console.log(event.target.name);
    let name = event.target.name;
    this.setState({ [name]: event.target.value });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    const newArticle = {
      title: this.state.title,
      body: this.state.body,
      topic: this.state.topic,
      username: this.props.userName
    };
    let check = this.state.AllTopics.filter(
      topic => topic.slug === this.state.topic
    );

    if (check.length === 0) {
      this.setState({ TopicDoesExist: false });
      console.log("need a topic");
    } else {
      postArticle(newArticle).then(res => {
        this.setState({ TopicDoesExist: true });
        navigate(`/users/${this.props.userName}`);
      });
    }
  };
  isThereTopic = () => {
    if (this.state.TopicDoesExist === true) return "you need a new topic";
  };
}

export default PostArticleView;
