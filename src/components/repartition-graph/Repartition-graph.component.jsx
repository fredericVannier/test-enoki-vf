import React from "react";

import "./repartition-graph.scss";

import DATA_ASSETS from "../../data/page-2-assets.json";

const assets = DATA_ASSETS;
const percentageArr = [];

const percentageData = () => {
  assets.map((element) => {
    percentageArr.push((element.quantity * 100) / 50);
  });
};

//en construction

const RepartitionGraph = () => (
  <div className="repartition-graph-container">GRAPHIC LATER</div>
);

export default RepartitionGraph;
