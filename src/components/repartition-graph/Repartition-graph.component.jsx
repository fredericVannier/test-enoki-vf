import React from "react";

import "./repartition-graph.scss";

import ReactApexChart from "react-apexcharts";
import DATA_ASSETS from "../../data/page-2-assets.json";

const assets = DATA_ASSETS;
const percentageArr = [];

const series = percentageArr;
const options = {
  chart: {
    type: "donut",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

const percentageData = () => {
  assets.map((element) => percentageArr.push((element.quantity * 100) / 50));
};

percentageData();

const RepartitionGraph = () => (
  <div className="repartition-graph-container">
    GRAPHIC LATER
    <ReactApexChart options={options} series={series} type="donut" />

  </div>
);

export default RepartitionGraph;
