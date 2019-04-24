import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = props => {
  const positiveArticles = [];
  const negativeArticles = [];
  const evenArticles = [];

  props.userArticles.forEach(article => {
    if (article.votes === 0) {
      evenArticles.push(article);
    } else if (article.votes > 0) {
      positiveArticles.push(article);
    } else if (article.votes < 0) {
      negativeArticles.push(article);
    }
  });

  const data = {
    labels: ["positve articles", "even articles", "negativeArticles"],
    datasets: [
      {
        data: [
          positiveArticles.length,
          evenArticles.length,
          negativeArticles.length
        ],
        backgroundColor: ["red", "teal"],
        hoverBackgroundColor: ["orange", "skyblue"]
      }
    ]
  };
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
