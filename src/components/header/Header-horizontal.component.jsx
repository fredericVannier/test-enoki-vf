import React from "react";
import { Link } from 'react-router-dom'

import "./header-horizontal.scss";

const HeaderHorizontal = () => (
  <div className="header-horizontal">
    <div className="left-side">
      <div className="hamburger-menu">
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
      <div className="vertical-separator"></div>
      <Link className="tab" to='/'>Dashboard</Link>
      <Link className="tab" to='/assets'>Assets</Link>
    </div>

    <div className="right-side">
      <div className="user-info">
        <div className="username" to="/profile">
          Frederic Vannier
        </div>
        <div className="profile-picture"></div>
      </div>
    </div>
  </div>
);

export default HeaderHorizontal;
