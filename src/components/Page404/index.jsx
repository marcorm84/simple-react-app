import React, { PureComponent } from "react";
import page404 from "assets/images/404.png";
import "./styles.scssm";

class Home extends PureComponent {
  render() {
    return (
      <div styleName="page-404">
        <div styleName="wrapper">
          <div styleName="column">
            <div styleName="title">
              <span styleName="line is-bold">Opps!</span>
            </div>
            <div styleName="text">La página que busca no existe.</div>
          </div>
          <div styleName="column">
            <img src={page404} alt="Not found" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
