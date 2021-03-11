import React from "react";
import PropTypes from "prop-types";
import s from "./GoBackButton.module.css";

const GoBackButton = ({ children, onHandleGoBack, ...rest }) => {
  return (
    <>
      <div className={s.container}>
        <button
          className={s.btn}
          type="button"
          onClick={onHandleGoBack}
          {...rest}
        >
          {children}
        </button>
      </div>
    </>
  );
};

GoBackButton.defaultProps = {
  onHandleGoBack: () => null,
  children: null,
};

GoBackButton.propTypes = {
  onHandleGoBack: PropTypes.func,
  childre: PropTypes.node,
  "arial-lable": PropTypes.string.isRequired,
};
export default GoBackButton;
