import {
  faMinus,
  faPlus,
  faSearchPlus,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Styles from "@/styles/dedicated/products/SingleProductContianer/BuyNowCard.module.css";
import ButtonTwo from "@/components/shared/button/ButtonTwo";

const BuyNowCard = ({
  text = "Buy",
  max = 0,
  btnAction = () => {
    console.log("nothing assigned");
  },
  qRef,
}) => {
  const increaseMyTotal = () => {
    const val = Number(qRef.current.value);
    console.log("increasing", val);
    if (val < max) {
      const newVal = val + 1;
      qRef.current.value = newVal;
    }
  };
  const decreaseMyTotal = () => {
    const val = Number(qRef.current.value);
    console.log("decreasing", val);
    if (val >= 1) {
      const newVal = val - 1;
      qRef.current.value = newVal;
    }
  };

  return (
    <div className={`${Styles["buy-now-card-main-outer-container"]}`}>
      <div className={`${Styles["buy-now-card-main-container"]}`}>
        <section className={`${Styles["buy-now-card-inner-container"]}`}>
          <section
            className={`${Styles["buy-now-card-inner-container-section"]}`}
            onClick={increaseMyTotal}
          >
            <FontAwesomeIcon icon={faPlus} />
          </section>
          <section
            className={`${Styles["buy-now-card-inner-container-section"]}`}
          >
            <input
              type="number"
              min={0}
              max={max}
              defaultValue={0}
              ref={qRef}
            />
          </section>
          <section
            className={`${Styles["buy-now-card-inner-container-section"]}`}
            onClick={decreaseMyTotal}
          >
            <FontAwesomeIcon icon={faMinus} />
          </section>
        </section>
      </div>
      <div>
        <ButtonTwo text={text} btnAction={btnAction} />
      </div>
      <div>
        <div
          title="add to your pc"
          className={`${Styles["buy-now-card-make-pc-btn"]}`}
        >
          <FontAwesomeIcon icon={faSquarePlus} />
        </div>
      </div>
    </div>
  );
};

export default BuyNowCard;
