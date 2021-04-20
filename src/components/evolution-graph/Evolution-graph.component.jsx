import React from "react";

import ReactApexChart from "react-apexcharts";
import DATA_ASSETS from "./../../data/page-2-assets.json";
import "./evolution-graph.scss";

const EvolutionGraph = () => {
  const assets = DATA_ASSETS;
  let series = [];

  const setSeries = () => {
    assets.forEach((element) => {
      const myDataPerso = {
        name: `${element.name}`,
        data: [
          { x: `${element.entry_date}`, y: `${element.buy_price}` },
          { x: "04-19-2021 GMT", y: `${element.actual_price}` },
        ],
      };
      series.push(myDataPerso);
    });
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
    yaxis: {
      tickAmount: 5,
      labels: {
        formatter: function (value) {
          return value + " $";
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    color: {},
    xaxis: {
      type: "datetime",
      tickAmount: 10,
    },
    colors: [
      "rgb(92, 78, 212)",
      "rgb(255, 217, 0)",
      "rgb(41, 184, 41)",
      "rgb(0, 255, 179)",
      "rgb(255, 145, 0)",
      "rgb(255, 0, 85)",
      "rgb(0, 59, 253)",
      "rgb(0, 174, 255)",
    ],
    fill: {
      colors: [
        "rgba(92, 78, 212, 0.01)",
        "rgba(255, 217, 0, 0.01)",
        "rgba(41, 184, 41, 0.01)",
        "rgba(0, 255, 179, 0.01)",
        "rgba(255, 145, 0, 0.01)",
        "rgba(255, 0, 85, 0.01)",
        "rgba(0, 59, 253, 0.01)",
        "rgba(0, 174, 255, 0.01)",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
      theme: "dark",
    },
    noData: {
      text: "Loading...",
    },
  };

  return (
    <div className="evolution-container">
      <ReactApexChart
        className="evolution-chart"
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default EvolutionGraph;
