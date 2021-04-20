import React from "react";

import "./solde-total.scss";

import ReactApexChart from "react-apexcharts";
import DATA_ASSETS from "../../data/page-2-assets.json";

const actualTotal = [];
const firstTotal = [];
const assets = DATA_ASSETS;
let series = [];

const totalPrice = () => {
  assets.forEach((element) => {
    actualTotal.push(element.actual_price);
    firstTotal.push(element.buy_price);
  });
};

totalPrice();

const actualSum = actualTotal.reduce(function (a, b) {
  return a + b;
}, 0);

const firstSum = firstTotal.reduce(function (a, b) {
  return a + b;
}, 0);

const increasedPercentage = ((actualSum - firstSum) / firstSum) * 100;
const rounded = Math.round(increasedPercentage * 10) / 10;

const setSeries = () => {
  const seriesData = {
    name: "Total",
    data: [
      { x: `${"04-13-2021 GMT"}`, y: `${firstSum}` },
      { x: "04-19-2021 GMT", y: `${actualSum}` },
    ],
  };
  series.push(seriesData);
};


setSeries();

const options = {
  chart: {
    height: 350,
    type: "area",
    width: "100%",
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  color: {},
  colors: ["rgb(0, 255, 149)"],
  tooltip: {
    enabled: false,
  },
  noData: {
    text: "Loading...",
  },
};

const SoldeTotal = () => (
  <div className="solde-total-container">
    <h4 className="title">Solde total</h4>
    <span className="solde">{`${actualSum} $`}</span>{" "}
    <span className="info-text">Total</span>
    <br />
    <span className="rounded">{`+${rounded} %`}</span>
    <ReactApexChart
      className="solde-chart"
      options={options}
      series={series}
      type="line"
      height={200}
      width={200}
    />
  </div>
);

export default SoldeTotal;
