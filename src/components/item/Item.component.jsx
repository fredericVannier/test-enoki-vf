import React from "react";

import "./item.scss";

const Item = ({ id, name, percentage }) => (
  <div className="item-container">
    <div className="first-row">
      <div className="graphic-element"></div>
      <span className="info-text">{`${id} - ${name}`}</span>
    </div>
    <span className="percentage">{percentage}</span>
  </div>
);

export default Item;
