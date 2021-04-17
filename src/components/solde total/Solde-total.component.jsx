import React from "react";

import "./solde-total.scss";

import DATA_ASSETS from "../../data/page-2-assets.json";

const total = [];
const assets = DATA_ASSETS;

const totalPrice = () => {
  assets.map((element) => {
    total.push(element.actual_price);
  });
};

totalPrice();

const sum = total.reduce(function (a, b) {
  return a + b;
}, 0);

const SoldeTotal = () => (
  <div className="solde-total">
    <h4 className="title">Solde total</h4>
    <span className="solde">{`${sum} €`}</span>{" "}
    <span className="info-text">Total</span>
  </div>
);

export default SoldeTotal;
