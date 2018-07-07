import React, { Component } from "react";
import PropTypes from "prop-types";

import "./styles.scssm";

class Footer extends Component {
  static propTypes = {
    copyright: PropTypes.string
  };

  render() {
    const { copyright = "&copy; React 2017" } = this.props;

    return (
      <div styleName="footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;
