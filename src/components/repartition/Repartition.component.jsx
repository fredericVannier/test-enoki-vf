import React from "react";

import ItemPreview from "../items-preview/Items-preview.component";
import RepartitionGraph from "../repartition-graph/Repartition-graph.component";

import "./repartition.scss";

const Repartition = () => (
  <div className="repartition-container">
    <h4 className="title">Répartition</h4>
    <div className="repartition-content">
      <div id="chart">
        <RepartitionGraph />
      </div>
      <ItemPreview />
    </div>
  </div>
);

export default Repartition;
