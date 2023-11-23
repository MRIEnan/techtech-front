import React from "react";
import Styles from "../../../styles/shared/button/ButtonTwo.module.css";

const ButtonTwo = ({ text, btnAction, className }) => {
  return (
    <div
      onClick={btnAction}
      className={`${Styles["button-two-main-container"]}`}
    >
      <p className={`${Styles["button-two-text-holder"]}`}>{text}</p>
    </div>
  );
};

export default ButtonTwo;
