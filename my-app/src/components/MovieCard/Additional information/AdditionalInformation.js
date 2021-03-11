import React from "react";
import { Link } from "react-router-dom";

const AdditionalInformation = ({ match, location }) => {
  return (
    <div>
      <ul className="list">
        <p>Additional information</p>
        <li>
          <Link
            to={{
              pathname: `${match.url}/cast`,
              state: { from: location },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${match.url}/reviews`,
              state: { from: location },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
