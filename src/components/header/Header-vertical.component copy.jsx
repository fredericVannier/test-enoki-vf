import React from "react";
import { Link } from "react-router-dom";

import "./header-vertical.scss";

const HeaderVertical = () => (
  <div className="header-vertical">
    <Link to="/">
      <div className="hamburger">Menu</div>
    </Link>
  </div>
);

export default HeaderVertical;
