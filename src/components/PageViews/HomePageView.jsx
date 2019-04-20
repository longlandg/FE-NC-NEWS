import React, { Component } from "react";

import { fetchAllArticles } from "../Functions/apis";

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
      <div>
        {this.state.allArticles && (
          <div className="articlecard">
            <AllArticles allArticles={this.state.allArticles} />
          </div>
        )}
        <h1>im in the home page</h1>
      </div>
    );
  }

  componentDidMount = () => {
    console.log("i mounted");
    fetchAllArticles(this.state.filterBy, this.state.sortBy).then(articles => {
      this.setState({ allArticles: articles });
      console.log(this.state.allArticles);
    });
  };
}

export default HomePageView;
