import React from "react";

import Repartition from "../repartition/Repartition.component";
import SoldeTotal from "../solde total/Solde-total.component";
import PortfolioEvolution from "../portfolio-evolution/PortfolioEvolution.component";
import "./directory.scss";

const Directory = () => (
  <div className="directory-menu">
    <div className="top-dashboard">
      <SoldeTotal />
      <Repartition />
    </div>
    <div className="bottom-dashboard">
      <PortfolioEvolution />
    </div>
  </div>
);

export default Directory;
