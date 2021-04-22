import React, { Component } from "react";

import ASSETS_DATA from "./../../data/page-2-assets.json";
import ASSETS_DATA2 from "./../../data/page-3-ajouter-un-asset.json";

import "./assets-page.scss";

class AssetsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      assets: ASSETS_DATA,
      popupOpen: false,
      assetsBis: ASSETS_DATA2,
      id: "",
      name: "",
      quantity: 0,
      entry_date: "",
      buy_price: 0,
      actual_price: 0,
      variation: "+9%",
      logo: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  renderTableData = () => {
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

      const dateStr = entry_date.substring(0, 10);

      return (
        <tr className="table-row" key={id}>
          <td>
            <img className="logo-assets" src={logo} alt="logo" />
          </td>
          <td>{id}</td>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{dateStr}</td>
          <td>{buy_price}$</td>
          <td>{actual_price}$</td>
          <td className={variation.startsWith("+") ? "positive" : "negative"}>
            {variation}
          </td>
        </tr>
      );
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      buy_price,
      quantity,
      assets,
      name,
      entry_date,
      id,
      logo,
      variation,
    } = this.state;
    const newData = assets;
    const joined = newData.concat({
      name: name,
      quantity: quantity,
      entry_date: entry_date,
      buy_price: buy_price,
      logo: logo,
      id: id,
      variation: variation,
    });
    this.setState({ assets: joined }, () => console.log("Assets updated"));
    this.setState({ popupOpen: !this.state.popupOpen });
  };

  renderTableHeader = () => {
    let header = Object.keys(this.state.assets[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  handleClick = () => {
    this.setState({ popupOpen: !this.state.popupOpen });
  };

  setButtonPopup = () => {
    this.setState({ popupOpen: false });
  };

  render() {
    return (
      <div className="assets-container">
        <div className="assets-title-container">
          <div className="assets-picture"></div>
          <h2 className="assets-title">Tracking of your assets</h2>
          <button className="assets-button" onClick={this.handleClick}></button>
        </div>
        <p className="basic-text">
          Tracker allows you to get live access to the price movements of all
          popular stocks, cryptocurrencies, ETFs, indices, mutual funds, bonds,
          futures, and options. Follow you favorites and get notified when a
          significant change has happened for an asset you follow. No delays,
          always in the know. A clear overview of your total portfolio balance,
          profit & loss during various time periods.
        </p>

        {
          <table id="assets-table">
            <tbody>
              <tr className="table-row table-header">
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
        }

        {this.state.popupOpen ? (
          <div className="popup-container">
            <div className="popup-inner">
              <div className="popup-header">
                <h4>Add an asset</h4>
                <h4 onClick={this.handleClick} className="close-btn">
                  Close
                </h4>
              </div>
              <div className="popup-separator"></div>

              <div className="inputs-field">
                <div className="hint-input"></div>
                <form onSubmit={this.handleSubmit}>
                  <label className="hint-label">
                    Search for an asset to add
                  </label>

                  <input
                    className="input-with-hint"
                    onChange={this.handleChange}
                    type="text"
                    name="name"
                    list="autocompleteList"
                  />
                  <datalist id="autocompleteList">
                    {this.state.assetsBis.map((element, index) => (
                      <option key={index}>{element.name}</option>
                    ))}
                    );
                  </datalist>

                  <label className="hint-label">Search for an asset id</label>
                  <input
                    className="input-with-hint"
                    onChange={this.handleChange}
                    type="text"
                    name="id"
                    list="autocompleteList2"
                  />
                  <datalist id="autocompleteList2">
                    {this.state.assetsBis.map((element, index) => (
                      <option key={index}>{element.id}</option>
                    ))}
                    );
                  </datalist>

                  <label className="hint-label">Search for an asset logo</label>
                  <input
                    className="input-with-hint"
                    onChange={this.handleChange}
                    type="text"
                    name="logo"
                    list="autocompleteList3"
                  />
                  <datalist id="autocompleteList3">
                    {this.state.assetsBis.map((element, index) => (
                      <option key={index}>{element.logo}</option>
                    ))}
                    );
                  </datalist>

                  <div className="middle-field">
                    <div className="date-input">
                      <input
                        id="date"
                        label="Entry date"
                        type="date"
                        name="entry_date"
                        className="date-field"
                        defaultValue="2021-01-17"
                        onChange={this.handleChange}
                      />
                      <p className="info-text">
                        Please add an entry date to the asset
                      </p>
                    </div>
                    <div className="quantity-input">
                      <label>Quantity</label>
                      <input
                        type="number"
                        label="Quantity"
                        name="quantity"
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="price-input">
                    <label>Buy price</label>
                    <input
                      type="number"
                      label="buy_price"
                      onChange={this.handleChange}
                      name="buy_price"
                    />
                    <p className="info-text">
                      Please add a buy price for the asset
                    </p>
                  </div>

                  <button type="submit" className="form-btn">
                    Add Asset
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AssetsPage;
