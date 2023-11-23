import ProductCardOne from "@/components/shared/card/ProductCardOne";
import useAllData from "@/hooks/useAllData";
import { useRouter } from "next/navigation";
import React from "react";
import Styles from "@/styles/dedicated/makePc/allCategoryProduct/AllCategoryProducts.module.css";

const AllCategoryProducts = ({ allProducts, category }) => {
  const router = useRouter();
  const { myUserHook, pcMakeInfos, setPcMakeInfos } = useAllData();
  const handleAddToBuildPc = (category, productId, productInfo) => {
    // alert(`calling handleAddToBuildPc from  AllCategoryProducts`);
    const pcData = pcMakeInfos;

    const pId = productInfo._id;
    pcData[category]["pId"] = productId;
    pcData[category]["data"] = productInfo;
    console.log(pcData);
    setPcMakeInfos(pcData);
    router.push("/make-pc");
  };
  return (
    <div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-full m-auto sm:py-[5px] md:py-[20px] ${Styles.all_category_product_card_container}`}
      >
        {allProducts.map((product, index) => (
          <ProductCardOne
            key={`make-pc-${category}${index}_${product?._id}`}
            product={product}
            myUserHook={myUserHook}
            handleAddToBuildPc={handleAddToBuildPc}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCategoryProducts;
