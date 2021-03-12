import React, { Component } from "react";
import PropTypes from "prop-types";
import Api from "../../Srvices";
import MyPnotify from "../../components/MyPnotify";

class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await Api.fetchReviews(movieId).then((data) =>
      this.setState({ reviews: data.results })
    );
  }
  render() {
    const { reviews } = this.state;

    if (!reviews.length > 0) {
      return <MyPnotify />;
    }
    return (
      <div>
        <ul className="list">
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <strong>{author}</strong>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;
