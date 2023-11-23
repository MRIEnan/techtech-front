import React, { useEffect, useState } from "react";
import Styles from "../../../styles/shared/rating/EnRating.module.css";

const SingleStar = ({ ratVal = 40, starUid }) => {
  const [size, setSize] = useState(`20px`);
  const [viewBoxSize, setViewBoxSize] = useState(`20`);
  //   const [myVal, setMyVal] = useState("0%");
  //   useEffect(() => {
  //     console.log("ratval arrived", ratVal);
  //     setMyVal(`${ratVal}%`);
  //   }, [ratVal]);
  return (
    <svg
      className={`${Styles["c-star"]} ${Styles["active"]} h-[${size}px] w-[${size}px]`}
      width={size}
      height={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
    >
      <mask id={`${starUid}-starMask`}>
        <rect x="0%" y="0%" width={size} height={size} fill="white" />
        <rect x={`${ratVal}%`} y="0%" width={size} height={size} fill="grey" />
      </mask>

      <path
        mask={`url(#${starUid}-starMask)`}
        // d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"
        // d="M50% 15.25c-0.73 -0.48 -1.16 -1.26 -0.93 -2.18l-3.20 -6.47l-1.43 -2.88c-0.16 -0.42 -0.57 -0.69 -1.02 -0.69l-2.84 2.88l-6.42 0.41c-0.71 0.05 -1.33 0.56 -1.55 1.27c-0.23 0.71 0.02 1.48 0.60 1.97l4.75 4.05l-1.41 5.54c-0.20 0.78 0.10 1.61 0.77 2.09c0.65 0.47 1.54 0.50 2.22 0.07l5.15 -3.26h1.93l5.51 3.49c0.29 0.19 0.63 0.28 0.98 0.28c1.04 0 1.88 -0.85 1.88 -1.88c0 -0.16 -0.02 -0.32 -0.06 -0.47l-1.60 -6.48l4.98 -4.16c0.58 -0.48 0.81 -1.28 0.58 -2.01z"
        d="M10 1.6l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"
      />
    </svg>
  );
};

export default SingleStar;
