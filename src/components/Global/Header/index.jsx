import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "assets/images/react-logo.png";
import menu from "assets/images/menu-icon.png";

import "./styles.scssm";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;

    return (
      <header styleName="header">
        <div styleName="wrapper">
          <a styleName="logo" href="/">
            <img src={logo} alt="logo" />
          </a>
          <nav>
            <a href="#" styleName="menu-icon">
              <img src={menu} alt="logo" />
            </a>
            <ul>
              {items &&
                items.map((item, key) => (
                  <li key={key}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
