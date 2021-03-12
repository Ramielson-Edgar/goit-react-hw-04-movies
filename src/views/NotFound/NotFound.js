import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = (props) => {
  return (
    <>
      <h3>
        Sorry, this page was not found. <NavLink to="/">Link</NavLink>
        to go back homepage
      </h3>
    </>
  );
};

export default NotFound;
