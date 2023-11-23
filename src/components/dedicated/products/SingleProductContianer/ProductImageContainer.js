import Image from "next/image";
import React from "react";
import Styles from "@/styles/dedicated/products/SingleProductContianer/ProductImageContainer.module.css";

const ProductImageContainer = ({ productInfo }) => {
  return (
    <div className={`${Styles["product-image-container-main-container"]}`}>
      {productInfo?.image_url && (
        <Image
          src={productInfo?.image_url}
          height={300}
          width={500}
          responsive="true"
          alt={`${productInfo?.product_name}`}
        />
      )}
    </div>
  );
};

export default ProductImageContainer;
