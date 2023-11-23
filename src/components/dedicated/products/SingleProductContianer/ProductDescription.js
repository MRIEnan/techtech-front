import PrimaryOne from "@/components/shared/title/primary/PrimaryOne";
import React from "react";
import Styles from "@/styles/dedicated/products/SingleProductContianer/ProductDescription.module.css";

const ProductDescription = ({ productInfo }) => {
  return (
    <section>
      <PrimaryOne text="Description" />
      <div className={`${Styles["product-description-holder"]}`}>
        <p>{productInfo?.description}</p>
      </div>
    </section>
  );
};

export default ProductDescription;
