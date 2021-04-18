import React, { useEffect, useState } from "react";
import axios from "axios";
import { Hint } from "react-autocomplete-hint";
import { TextField } from "@material-ui/core";

import "./popup.scss";

const Popup = (props) => {
  const [hintData, setHintData] = useState([]);
  const [text, setText] = useState("");

  const getData = async () => {
    const res = await axios.get("./page-3-ajouter-un-asset.json");
    var hintArray = [];
    res.data.map((a) => hintArray.push(a.name));
    setHintData(hintArray);
  };

  useEffect(() => {
    getData();
  });

  return props.open ? (
    <div className="popup-container">
      <div className="popup-inner">
        <div className="popup-header">
          <h4>Add an asset</h4>
          <h4 onClick={props.setTrigger} className="close-btn">
            Close
          </h4>
        </div>
        <div className="popup-separator"></div>

        <div className="inputs-field">
          <div className="hint-input"></div>
          <label className="hint-label">Search for an asset to add</label>
          <Hint options={hintData} allowTabFill>
            <input
              className="input-with-hint"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Hint>

          <div className="middle-field">
            <div className="date-input">
              <TextField
                id="date"
                label="Entry date"
                type="date"
                className="date-field"
                defaultValue="2021-01-17"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <p className="info-text">Please add an entry date to the asset</p>
            </div>
            <div className="quantity-input">
              <label>Quantity</label>
              <input type="text" label="Quantity" />
            </div>
          </div>
          <div className="price-input">
            <label>Buy price</label>
            <input type="text" label="Quantity" />
            <p className="info-text">Please add a buy price for the asset</p>
          </div>

          <button className="form-btn">Add Asset</button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
