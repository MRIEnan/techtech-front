import RootLayout from "@/components/UI/RootLayout";
import AllCategoryProducts from "@/components/dedicated/makePc/allCategoryProduct/AllCategoryProducts";
import React from "react";

const SinglePcMakerToolComponent = ({ category, allProduct }) => {
  return (
    <div>
      <AllCategoryProducts allProducts={allProduct} category={category} />
    </div>
  );
};

export default SinglePcMakerToolComponent;

SinglePcMakerToolComponent.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { category } = query;
  const res = await fetch(
    `https://tech-backend-lovat.vercel.app/api/v1/products?category=${category}`
  );
  const data = await res.json();
  return {
    props: {
      key: `makepc-tools-${category}`,
      allProduct: data?.data,
      category: category,
    },
  };
};

export const config = {
  unstable_revalidate: 20,
};
