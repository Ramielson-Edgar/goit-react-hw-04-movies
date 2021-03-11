import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AdditionalInformation from "./Additional information";
import s from "./MovieCard.module.css";

const MovieCard = ({ onMovieDetails, match, location }) => {
  const {
    id,
    original_title,
    poster_path,
    release_date,
    title,
    overview,
    vote_average,
    genres = [],
  } = onMovieDetails;

  return (
    <>
      <ul className={s.list}>
        <li key={id}>
          <div className={s.imgContainer}>
            <img
              src={`https://image.tmdb.org/t/p/w300${poster_path}`}
              alt={title}
            />
          </div>

          <div className={s.info}>
            <h1 className={s.title}>
              {original_title} ({[release_date].join(" ").slice(0, 4)})
            </h1>

            <p>Rating: {vote_average}</p>
            <strong>overview:</strong>
            <p>{overview}</p>
            <strong>Genres</strong>

            <ul className={s.genres}>
              {genres.map(({ id, name }) => (
                <li key={id} className={s.listItem}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </li>

        <AdditionalInformation match={match} location={location} />
      </ul>
    </>
  );
};

MovieCard.propTypes = {
  overview: PropTypes.string,
  id: PropTypes.number,
  original_title: PropTypes.string,
  release_date: PropTypes.number,
  title: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default withRouter(MovieCard);
