import React from "react";

import ReactApexChart from "react-apexcharts";
import DATA_ASSETS from "./../../data/page-2-assets.json";
import "./evolution-graph.scss";

const EvolutionGraph = () => {
  const series = [
    {
      name: "tesssst",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "testtttt2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      width: "100%",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    color: {},
    xaxis: {
      categories: [
        "1",
        "5",
        "10",
        "15",
        "20",
        "25",
        "30",
      ],
    },
    colors: ["rgb(92, 78, 212)", 'rgb(73, 73, 73)'],
    fill: {
        colors: ["rgba(92, 78, 212, 0.02)", 'rgba(73, 73, 73, 0.02)']
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
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
