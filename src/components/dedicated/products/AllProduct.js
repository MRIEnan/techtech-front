import ProductCardOne from "@/components/shared/card/ProductCardOne";
import PrimaryOne from "@/components/shared/title/primary/PrimaryOne";
import React from "react";
import Styles from "@/styles/dedicated/products/AllProduct.module.css";
import useAllData from "@/hooks/useAllData";

const AllProduct = ({ category = "", categoryInfo = [] }) => {
  const { myUserHook } = useAllData();
  return (
    <div>
      <div>
        <PrimaryOne text={category} />
      </div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-full m-auto sm:py-[5px] md:py-[20px] ${Styles.all_product_card_container}`}
      >
        {categoryInfo.map((product, index) => (
          <ProductCardOne
            key={`${index}_${product?._id}`}
            product={product}
            myUserHook={myUserHook}
          />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;
