import React, { Component } from "react";
import PropTypes from "prop-types";
import Api from "../../Srvices";
import QueryMovie from "../../components/queryMovie/QueryMovie";
import MovieList from "../../MovieList";
import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    searchQuery: "",
    movieList: [],
  };

  componentDidMount() {
    const query = this.getCategoryFromProps(this.props);
    const parsed = queryString.stringify(query);

    if (!parsed) {
      return;
    }

    return Api.fetchWithQuery(query.query).then((data) =>
      this.setState({ movieList: data.results })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      Api.fetchWithQuery(searchQuery).then((data) =>
        this.setState({ movieList: data.results })
      );
    }
  }

  getCategoryFromProps = (props) => {
    return queryString.parse(props.location.search);
  };

  addListQuery = (query) => {
    this.setState({ searchQuery: query });

    this.props.history.push({
      pathname: `${this.props.match.url}`,
      search: `?query=${query}`,
      state: {
        from: this.props.location,
      },
    });
  };

  render() {
    const { movieList } = this.state;

    return (
      <div>
        <h1>Search page</h1>
        <QueryMovie addListQuery={this.addListQuery} />
        <MovieList movieList={movieList} />
      </div>
    );
  }
}

MoviesPage.propTypes = {
  searchQuery: PropTypes.string,
  movieList: PropTypes.array,
};

export default MoviesPage;
