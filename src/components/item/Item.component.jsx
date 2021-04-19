import React from "react";

import "./item.scss";

const Item = ({ id, name, percentage }) => (
  <div className="item-container">
    <div className="item-row">
      <div className="graphic-element"></div>
      <div className="text-item">
        <span className="info-text">{`${id} - ${name}`}</span>

        <span className="percentage">{`${percentage} %`}</span>
      </div>
    </div>
  </div>
);

export default Item;
