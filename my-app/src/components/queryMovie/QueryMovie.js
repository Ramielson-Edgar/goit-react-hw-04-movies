import React, { Component } from "react";
import PropTypes from "prop-types";

class QueryMovie extends Component {
  state = {
    searchQuery: "",
  };

  onSearchQuery = ({ target }) => {
    const { value } = target;
    this.setState({ searchQuery: value });
  };

  onHadleChange = (e) => {
    e.preventDefault();

    this.props.addListQuery(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };
  render() {
    const { searchQuery } = this.state;

    return (
      <div>
        <form onSubmit={this.onHadleChange}>
          <input
            name="search"
            placeholder="serach..."
            value={searchQuery}
            onChange={this.onSearchQuery}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

QueryMovie.propTypes = {
  searchQuery: PropTypes.string,
};

export default QueryMovie;
