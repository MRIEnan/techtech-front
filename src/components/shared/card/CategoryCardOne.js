import React from "react";
import styles from "../../../styles/shared/card/CategoryCardOne.module.css";

import spImageProcessorOne from "../../../assets/images/products-images/icons/cpu-image-one.png";
import Image from "next/image";
import Link from "next/link";
import useAllData from "@/hooks/useAllData";

const CategoryCardOne = ({ cardInfo }) => {
  const { apiRoutesNames } = useAllData();
  return (
    <Link
      href={`${apiRoutesNames?.productsCategory}${cardInfo.href}`}
      className={`${styles["category-card-main-container"]}`}
    >
      <div>
        <div className={`${styles["category-card-image-holder"]}`}>
          {/* <Image
          src={spImageProcessorOne}
          width={40}
          height={40}
          alt="icon-title"
          responsive="true"
        /> */}
          <cardInfo.icon
            className={`h-[100%] w-[100%] ${styles["category-card-inner-image"]}`}
            aria-hidden="true"
          />
        </div>
        <div className={`${styles["category-card-title-holder"]}`}>
          <p>{cardInfo.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCardOne;
