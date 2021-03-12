import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Api from "../../Srvices";
import MovieCard from "../../components/MovieCard/MovieCard";
import GoBackButton from "../../components/GoBackButton";
import { ReactComponent as Goback } from "../../components/GoBackButton/svg/goBack.svg";
import { routes } from "../../Route";

const Cast = lazy(() =>
  import("../../components/Cast" /* webpackChunkName:  "Cast" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews" /* webpackChunkName:  "Reviews" */)
);

class MovieDetailsPage extends Component {
  state = {
    movieDetails: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    await Api.fetchMovieDetails(movieId).then((response) =>
      this.setState({ movieDetails: response })
    );
  }

  HadnleGoback = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      history.push(location.state.from);
    }
  };

  render() {
    const { movieDetails } = this.state;

    return (
      <>
        <GoBackButton onHandleGoBack={this.HadnleGoback} arial-lable="go-back">
          <Goback width="9" height="9" fill="white" />
        </GoBackButton>

        <MovieCard onMovieDetails={movieDetails} />

        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.reviews} component={Reviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
