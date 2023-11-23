import React from "react";
import Styles from "@/styles/shared/title/primary/PrimaryOne.module.css";

const PrimaryOne = ({ text = "title", textCaseType = "capitalize" }) => {
  return (
    <div className={`${Styles["shared-btn-primary-one-main-container"]}`}>
      <h1
        className={`${textCaseType} ${Styles["shared-btn-primary-one-text-holder"]}`}
      >
        {text}
      </h1>
    </div>
  );
};

export default PrimaryOne;
