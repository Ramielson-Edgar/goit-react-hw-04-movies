import React from "react";
import Navigation from "../Navigation";
import s from "./AppBar.module.css";

const AppBar = (props) => {
  return (
    <header className={s.barContaienr}>
      <Navigation />
    </header>
  );
};

AppBar.propTypes = {};

export default AppBar;
