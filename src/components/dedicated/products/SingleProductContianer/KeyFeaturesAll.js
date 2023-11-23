import PrimaryOne from "@/components/shared/title/primary/PrimaryOne";
import React from "react";
import Styles from "@/styles/dedicated/products/SingleProductContianer/KeyFeaturesAll.module.css";

const KeyFeaturesAll = ({ productInfo }) => {
  return (
    <section>
      <PrimaryOne text="Specification" />
      <div className={`${Styles["key-features-table-main-outer-container"]}`}>
        {productInfo?.key_features &&
          Object.entries(productInfo?.key_features).map((elem, index) => (
            <div
              className={`${Styles["key-features-table-element-holder"]}`}
              key={`${productInfo._id}${index}`}
            >
              <div className="capitalize font-medium">{elem[0]}</div>
              <div className="capitalize font-medium">{elem[1]}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default KeyFeaturesAll;
