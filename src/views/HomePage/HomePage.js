import React, { Component } from "react";
import Api from "../../Srvices";
import MovieList from "../../MovieList";

class HomePage extends Component {
  state = {
    movieList: [],
  };

  async componentDidMount() {
    await Api.fetchMovies().then((data) =>
      this.setState({
        movieList: data.results,
      })
    );
  }

  render() {
    const { movieList } = this.state;
    console.log(movieList);
    return (
      <>
        <h1>Trending tody</h1>
        <MovieList movieList={movieList} />
      </>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
