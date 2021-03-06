import React from "react";
import bannerBackground from "assets/images/banner2.jpg";
import arrow from "assets/images/down-arrow.png";
import "./styles.scssm";

const Banner = () => (
  <div
    styleName="banner"
    style={{ backgroundImage: `url(${bannerBackground})` }}
  >
    <div styleName="content">
      <div styleName="wrapper">
        <span styleName="title">Test</span>
        <span styleName="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          porttitor imperdiet augue sed accumsan. Phasellus eget velit ultrices,
          imperdiet sapien vitae, blandit neque. Morbi luctus eros sem,
          fringilla consequat mauris suscipit et. Duis iaculis rutrum dolor.
          Maecenas at tempus diam.
        </span>
      </div>
      <a href="#first" styleName="arrow">
        <img src={arrow} alt="arrow" />
      </a>
    </div>
  </div>
);

export default Banner;
