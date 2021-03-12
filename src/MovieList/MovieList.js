import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MovieList = ({ movieList, location }) => {
  return (
    <>
      <ul className="list">
        {movieList.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `/movies/${id}`,
                state: { from: location },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      titl: PropTypes.string,
    })
  ),
};

export default withRouter(MovieList);
