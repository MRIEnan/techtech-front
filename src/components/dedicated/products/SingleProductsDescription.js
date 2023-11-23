import ProductShowcaseLayout from "@/components/UI/ProductShowcaseLayout";
import RootLayout from "@/components/UI/RootLayout";
import React, { useRef } from "react";
import ProductImageContainer from "./SingleProductContianer/ProductImageContainer";
import ProductBasicInfoContainer from "./SingleProductContianer/ProductBasicInfoContainer";
import SingleChildrenHolder from "@/components/UI/SingleChildrenHolder";
import KeyFeaturesAll from "./SingleProductContianer/KeyFeaturesAll";
import ProductDescription from "./SingleProductContianer/ProductDescription";

const SingleProductsDescription = ({ productInfo }) => {
  return (
    <div>
      <SingleChildrenHolder
        childrenOne={
          <ProductShowcaseLayout
            childrenOne={<ProductImageContainer productInfo={productInfo} />}
            childrenTwo={
              <ProductBasicInfoContainer productInfo={productInfo} />
            }
          />
        }
      />
      <SingleChildrenHolder
        childrenOne={<KeyFeaturesAll productInfo={productInfo} />}
      />
      <SingleChildrenHolder
        childrenOne={<ProductDescription productInfo={productInfo} />}
      />
    </div>
  );
};

export default SingleProductsDescription;
