import React, { Component } from "react";

import { fetchAllArticles } from "../Functions/apis";

import SortBySelector from "../PageElements/SortBySelector";
import AllArticles from "../PageElements/AllArticles";

class HomePageView extends Component {
  state = {
    allArticles: null,
    sortBy: "",
    filterBy: "",
    topic: ""
  };

  render() {
    return (
      <div className="HomeView">
        <div className="SortBySelector">
          <SortBySelector
            allArticles={this.state.allArticles}
            changeSorting={this.changeSorting}
          />
        </div>
        {this.state.allArticles && (
          <AllArticles allArticles={this.state.allArticles} />
        )}
      </div>
    );
  }

  componentDidMount = () => {
    fetchAllArticles(this.state.filterBy, this.state.sortBy).then(articles => {
      this.setState({ allArticles: articles });
    });
  };

  changeSorting = event => {
    event.preventDefault();

    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  homeFilterReset = event => {
    event.preventDefault();
    if (event.target.value !== this.state.sortBy) {
      this.setState({ sortBy: event.target.value });
    }
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    if (
      this.state.sortBy !== prevState.sortBy ||
      prevProps.path !== this.props.path
    ) {
      fetchAllArticles(this.props.topic, this.state.sortBy).then(articles => {
        this.setState({ allArticles: articles });
      });
    }
  };
}

export default HomePageView;
