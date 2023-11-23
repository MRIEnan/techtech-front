import React from "react";
import Styles from "../../../styles/shared/rating/EnRating.module.css";
import SingleStar from "./SingleStar";

const ratingCalculator = (totalRating, maxRating = 5) => {
  const ratingArray = [];
  const averageRating = totalRating;

  for (let i = 1; i <= maxRating; i++) {
    if (i <= averageRating) {
      ratingArray.push(1); // Full star
    } else if (i - 1 < averageRating) {
      ratingArray.push((averageRating - parseInt(averageRating)).toFixed(2)); // Half star
    } else {
      ratingArray.push(0); // Empty star
    }
  }
  const finalArr = [];
  for (let i = 0; i < ratingArray.length; i++) {
    finalArr.push({ val: ratingArray[i] * 100 });
  }
  return finalArr;

  return ratingArray;
};

const EnRating = ({ product_uid, ratingVal = 0, total = 5 }) => {
  const myRatings = ratingCalculator(ratingVal);
  return (
    <div>
      <div className={`${Styles["rating-container"]}`}>
        {myRatings &&
          myRatings.map((elem, index) => (
            <SingleStar
              key={`${product_uid}-${index}`}
              starUid={`${product_uid}-${index}`}
              ratVal={elem.val}
            />
          ))}
      </div>
    </div>
  );
};

export default EnRating;
