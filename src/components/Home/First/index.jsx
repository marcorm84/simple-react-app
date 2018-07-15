import React, { PureComponent } from "react";
import "./styles.scssm";

class First extends PureComponent {
  render() {
    return (
      <div id="first" styleName="first">
        <div styleName="wrapper">
          <div styleName="title">
            <span styleName="line is-bold">First Section</span>
          </div>
          <div styleName="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            ligula eget erat congue faucibus. Cras condimentum viverra commodo.
            Aliquam vestibulum erat nec cursus porta. Maecenas malesuada viverra
            venenatis. Sed vel metus blandit, consectetur lorem quis, tincidunt
            justo. Etiam luctus.
          </div>
        </div>
      </div>
    );
  }
}

export default First;
