import React, { PureComponent } from "react";
import movieService from "services/movies";
import "./styles.scssm";

class About extends PureComponent {
  state = {
    isLoading: false,
    movies: [],
    error: ""
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    this.setState({
      isLoading: true
    });

    try {
      this.setState({
        movies: await movieService.getMovies(),
        error: ""
      });
    } catch (error) {
      this.setState({
        movies: [],
        error: error.message
      });
    }

    this.setState({
      isLoading: false
    });
  };

  renderMovies() {
    return (
      <div>
        {this.state.movies.map((x, i) => (
          <div key={`thc-${i}`}>{x.show.name}</div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div id="about" styleName="about">
        <div styleName="wrapper">
          <div styleNamRepose="title">
            <span styleName="line is-bold">About Us</span>
          </div>
          <div styleName="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
            ligula eget erat congue faucibus. Cras condimentum viverra commodo.
            Aliquam vestibulum erat nec cursus porta. Maecenas malesuada viverra
            venenatis. Sed vel metus blandit, consectetur lorem quis, tincidunt
            justo. Etiam luctus.
          </div>
          {this.state.isLoading ? "Loading" : this.renderMovies()}
        </div>
      </div>
    );
  }
}

export default About;
