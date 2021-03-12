import React, { Component } from "react";
import PropTypes from "prop-types";
import Api from "../../Srvices";

class Cast extends Component {
  state = {
    actors: [],
  };

  async componentDidMount() {
    await Api.fetchCast(this.props.match.params.movieId).then((response) =>
      this.setState({ actors: response.cast })
    );
  }
  render() {
    const { actors } = this.state;

    return (
      <>
        <ul className="list">
          {actors.map(
            ({ id, character, name, original_name, profile_path }) => (
              <li key={id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                    alt={original_name}
                  />
                </div>
                {name}
                <p>{character}</p>
              </li>
            )
          )}
        </ul>
      </>
    );
  }
}

Cast.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      character: PropTypes.string,
      name: PropTypes.string,
      original_name: PropTypes.string,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;
