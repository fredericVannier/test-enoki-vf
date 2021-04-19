import React from "react";

import "./repartition-graph.scss";

import ReactApexChart from "react-apexcharts";
import DATA_ASSETS from "../../data/page-2-assets.json";


const assets = DATA_ASSETS;
const percentageArr = [];
const total = [];

const series = percentageArr;
const options = {
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "75%",
      },
    },
  },
  colors: [
    "rgb(92, 78, 212)",
    "rgb(84, 73, 184)",
    "rgb(79, 70, 158)",
    "rgb(68, 63, 110)",
    "rgb(59, 56, 83)",
    "rgb(49, 46, 66)",
    "rgb(44, 43, 56)",
    "rgb(38, 37, 47)",
  ],
  labels: [
    [`${assets[0].name}`],
    [`${assets[1].name}`],
    [`${assets[2].name}`],
    [`${assets[3].name}`],
    [`${assets[4].name}`],
    [`${assets[5].name}`],
    [`${assets[6].name}`],
    [`${assets[7].name}`],
  ],
  fill: {
    colors: [
      "rgb(92, 78, 212)",
      "rgb(84, 73, 184)",
      "rgb(79, 70, 158)",
      "rgb(68, 63, 110)",
      "rgb(59, 56, 83)",
      "rgb(49, 46, 66)",
      "rgb(44, 43, 56)",
      "rgb(38, 37, 47)",
    ],
  },
  stroke: {
    show: true,
    colors: ["rgb(31, 30, 30)"],
    width: 5,
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    fillSeriesColor: false,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 0.7,
      },
    },
  },
};

const percentageData = () => {
  assets.map((element) => percentageArr.push((element.quantity * 100) / 50));
};

const totalPrice = () => {
  assets.map((element) => total.push(element.actual_price));
};

totalPrice();

const sum = total.reduce(function (a, b) {
  return a + b;
}, 0);

percentageData();

const RepartitionGraph = () => (
  <div className="repartition-graph-container">
  
    <ReactApexChart
      options={options}
      series={series}
      type="donut"
      className="repartition-chart"
    />

    <div className="sum-repartition">
      <span className="solde">{`${sum} $`}</span>{" "}
      <span className="info-text">USD</span>
    </div>
  </div>
);

export default RepartitionGraph;
