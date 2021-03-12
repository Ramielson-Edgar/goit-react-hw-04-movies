import { Route, Switch } from "react-router-dom";
import React, { Component, Suspense, lazy } from "react";
import Container from "./components/Container";
import AppBar from "./components/AppBar/AppBar";
import NotFound from "./views/NotFound";
import { routes } from "./Route";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "Home-page" */)
);

const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "Movies-Page" */)
);

const MovieDetailsPage = lazy(() =>
  import("./views/MovieDetailsPage" /* webpackChunkName:  "Details-Page" */)
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.movies} component={MoviesPage} />
              <Route path={routes.MovieDetails} component={MovieDetailsPage} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;
