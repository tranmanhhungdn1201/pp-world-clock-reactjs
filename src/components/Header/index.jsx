import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="header">
      <h1 className="header__title">Time</h1>
    </div>
  );
}

export default Header;
