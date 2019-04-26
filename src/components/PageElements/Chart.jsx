import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = props => {
  const data = {
    labels: ["positve articles", "even articles", "negativeArticles"],
    datasets: [
      {
        data: [
          props.positiveArticles,
          props.evenArticles,
          props.negativeArticles
        ],
        backgroundColor: ["teal", "grey", "red"],
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
