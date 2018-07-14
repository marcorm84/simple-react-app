import React, { PureComponent } from "react";
import Banner from "components/Home/Banner";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <Banner />
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
