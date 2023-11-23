import React from "react";
import Styles from "../../../styles/shared/button/ButtonOne.module.css";

const ButtonOne = ({ text, btnAction, disabled = false, className }) => {
  if (disabled) {
    return (
      <div className={`${Styles["button-one-disabled"]}`}>
        <p className={``}>{text}</p>
      </div>
    );
  }
  return (
    <div
      onClick={btnAction}
      className={`${Styles["button-one-main-container"]}`}
    >
      <p className={`${Styles["button-one-text-holder"]}`}>{text}</p>
    </div>
  );
};

export default ButtonOne;
