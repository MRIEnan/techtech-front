"use client";
import ProductCardOne from "@/components/shared/card/ProductCardOne";
import React, { useEffect } from "react";
import Styles from "@/styles/dedicated/home/ProductFeaturedSet.module.css";
import PrimaryOne from "@/components/shared/title/primary/PrimaryOne";
import useAllData from "@/hooks/useAllData";

const ProductFeaturedSet = ({ allFeaturedProduct, myUserHook }) => {
  return (
    <div>
      <div>
        <PrimaryOne text="Featured" />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-full m-auto sm:py-[5px] md:py-[20px] ${Styles.product_featured_set_card_container}`}
      >
        {allFeaturedProduct.map((product, index) => (
          <ProductCardOne
            myUserHook={myUserHook}
            key={`${index}_${product?._id}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductFeaturedSet;
