import React from "react";
import bannerBackground from "assets/images/banner1.png";
import "./styles.scssm";

const Banner = () => (
  <div
    styleName="banner"
    style={{ backgroundImage: `url(${bannerBackground})` }}
  >
    <div styleName="wrapper">
      <div />
    </div>
  </div>
);

export default Banner;
