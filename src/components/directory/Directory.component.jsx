import React from "react";

import Repartition from "../repartition/Repartition.component";
import SoldeTotal from "../solde total/Solde-total.component";
import "./directory.scss";

const Directory = () => (
  <div className="directory-menu">
    <SoldeTotal />
    <Repartition />
  </div>
);

export default Directory;
