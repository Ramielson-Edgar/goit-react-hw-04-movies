import React from "react";
import s from "./Container.module.css";

const container = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default container;
