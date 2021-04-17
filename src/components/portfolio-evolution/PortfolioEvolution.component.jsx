import React from "react";

import "./portfolio-evolution.scss";

const PortfolioEvolution = () => (
  <div className="evolution-container">
    <div className="top-evolution">
      <h4 className="title">Portfolio evolution</h4>
      <div className="legende">
        <div className="ui-element"></div>
        <span className="info-text">This Month</span>
        <div className="ui-element-bis"></div>
        <span className="info-text">Previous Month</span>
      </div>

      <div className="calendar">calendar</div>
    </div>
    <div className="evolution-chart"></div>
  </div>
);

export default PortfolioEvolution;
