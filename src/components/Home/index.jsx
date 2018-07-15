import React, { PureComponent } from "react";
import Banner from "components/Home/Banner";
import First from "components/Home/First";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <First />
      </div>
    );
  }
}

export default Home;
