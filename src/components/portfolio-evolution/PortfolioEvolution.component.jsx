import React from "react";
import EvolutionGraph from "../evolution-graph/Evolution-graph.component";

import "./portfolio-evolution.scss";

const PortfolioEvolution = () => (
  <div className="evolution-container">
      <h4 className="title portfolio-title">Portfolio evolution</h4>
    <div className="evolution-chart">
    <EvolutionGraph />
    </div>
  </div>
);

export default PortfolioEvolution;
