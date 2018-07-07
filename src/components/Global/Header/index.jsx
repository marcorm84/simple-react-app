import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "assets/images/react-logo.png";

import "./styles.scssm";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;

    return (
      <div styleName="header">
        <div styleName="logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>

          <ul styleName="menu">
            {items &&
              items.map((item, key) => (
                <li key={key}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
