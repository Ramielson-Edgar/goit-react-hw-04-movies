import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <>
      <ul className={s.list}>
        <li className={s.listItem}>
          <NavLink
            exact
            to="/"
            className={s.navigationlink}
            activeClassName={s.navigationLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.listItem}>
          <NavLink
            to="/movies"
            className={s.navigationlink}
            activeClassName={s.navigationLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
