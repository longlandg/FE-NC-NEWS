import React, { Component } from "react";
import { navigate } from "@reach/router";
import { fetchAllArticles, fetchAllTopics } from "../Functions/apis";

import SortBySelector from "../PageElements/SortBySelector";
import AllArticles from "../PageElements/AllArticles";

class AllArticlesPageView extends Component {
  state = {
    allArticles: null,
    sortBy: "",
    filterBy: "",
    topic: "",
    noArticlesForTopic: false
  };

  render(props) {
    return (
      <div className="HomeView">
        {!this.state.allArticles ||
          (this.state.noArticlesForTopic && <h1>LOADING...</h1>)}
        <div className="SortBySelector">
          <SortBySelector
            allArticles={this.state.allArticles}
            changeSorting={this.changeSorting}
            filterBy={`topic=${this.props.topic}&&`}
          />
        </div>
        {this.state.allArticles && (
          <AllArticles
            data-cy="AllArticles"
            allArticles={this.state.allArticles}
            loggedIn={this.props.loggedIn}
          />
        )}
        {this.state.noArticlesForTopic && (
          <p>At the moment there are no articles for this topic</p>
        )}
      </div>
    );
  }

  componentDidMount = () => {
    let filterby = "";
    if (this.props.topic === undefined) {
    } else if (this.props.topic) {
      filterby = `topic=${this.props.topic}&&`;
    }

    fetchAllArticles(filterby, this.state.sortBy)
      .then(articles => {
        this.setState({
          allArticles: articles,
          filterBy: `topic=${this.props.topic}&&`,
          topic: this.props.topic
        });
      })
      .catch(err => {
        fetchAllTopics().then(topics => {
          const existingTopic = topics.filter(topic => {
            return topic.slug === this.props.topic;
          });

          if (err.response.status === 422 && existingTopic.length === 1) {
            this.setState({ noArticlesForTopic: true });
          } else if (existingTopic.length !== 1) {
            navigate(`/Error/${err.response.status}`);
          }
        });
      });
  };

  changeSorting = event => {
    event.preventDefault();

    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    let filterBy = "";
    if (this.props.topic) {
      filterBy = `topic=${this.props.topic}&&`;
    } else {
      filterBy = "";
    }
    if (
      this.state.sortBy !== prevState.sortBy ||
      prevProps.path !== this.props.path
    ) {
      fetchAllArticles(filterBy, this.state.sortBy)
        .then(articles => {
          this.setState({ allArticles: articles });
        })
        .catch(err => this.setState({ Error: true }));
    }
  };
}

export default AllArticlesPageView;
