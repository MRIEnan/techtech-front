import RootLayout from "@/components/UI/RootLayout";
import AllProduct from "@/components/dedicated/products/AllProduct";
import Head from "next/head";
import React from "react";

const AllProductsCategory = ({ category, allProducts }) => {
  if (!category || !allProducts) {
    return;
  }

  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>
      <AllProduct category={category} categoryInfo={allProducts} />
    </div>
  );
};

export default AllProductsCategory;

AllProductsCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://tech-backend-lovat.vercel.app/api/v1/products`
  );
  const fetchedData = await res.json();
  const allProd = await fetchedData.data;
  const allProdCategory = [];
  allProd.forEach((elem) => {
    if (!allProdCategory.includes(elem.category.toLowerCase())) {
      const nameCategory = elem.category;
      allProdCategory.push(nameCategory);
    }
  });
  const paths = allProdCategory.map((prod) => ({
    params: { slug: prod },
  }));
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const {
    params: { slug },
  } = context;
  const res = await fetch(
    `https://tech-backend-lovat.vercel.app/api/v1/products?category=${slug}`
  );
  const resData = await res.json();
  const data = await resData.data;
  return {
    props: {
      category: slug,
      allProducts: data,
    },
    revalidate: 30,
  };
};
