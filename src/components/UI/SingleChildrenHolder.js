import React from "react";
import Styles from "@/styles/UI/SingleChildrenHolder.module.css";

const SingleChildrenHolder = ({ childrenOne }) => {
  return (
    <div className={`${Styles["single-children-holder-main-outer-container"]}`}>
      {childrenOne}
    </div>
  );
};

export default SingleChildrenHolder;
