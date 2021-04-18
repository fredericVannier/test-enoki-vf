import React, { Component } from "react";

import ASSETS_DATA from "./../../data/page-2-assets.json";

import "./assets-page.scss";

class AssetsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assets: ASSETS_DATA,
    };
  }

  renderTableData() {
    return this.state.assets.map((element, index) => {
      const {
        id,
        name,
        quantity,
        entry_date,
        buy_price,
        actual_price,
        variation,
        logo,
      } = element;
      console.log("element", element);
      return (
        <tr className="table-row" key={id}>
          <td>
            <img className="logo-assets" src={logo} alt="logo" />
          </td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{`${Date.parse(entry_date)}`}</td>
          <td>{buy_price}$</td>
          <td>{actual_price}$</td>
          <td>{variation}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = Object.keys(this.state.assets[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    return (
      <div>
        <table id="assets-table">
          <tbody>
            <tr className="table-header">
              <th></th>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Entry date</th>
              <th>Buy price</th>
              <th>Actual price</th>
              <th>Variation/24h</th>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AssetsPage;
