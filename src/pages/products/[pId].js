import RootLayout from "@/components/UI/RootLayout";
import SingleProductsDescription from "@/components/dedicated/products/SingleProductsDescription";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React from "react";

const SingleProductsDetails = ({ productData }) => {
  console.log(productData);
  const { pId } = useRouter();
  return (
    <div>
      <Head>
        <title>{productData?.product_name}</title>
      </Head>
      {/* <h1>SingleProductsDetails : {pId}</h1> */}
      <SingleProductsDescription productInfo={productData} />
    </div>
  );
};

export default SingleProductsDetails;

SingleProductsDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://tech-backend-lovat.vercel.app/api/v1/products`
  );
  const resData = await res.json();
  const allProd = await resData.data;
  const paths = allProd.map((prod) => ({
    params: { pId: prod._id },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { pId },
  } = context;
  const res = await fetch(
    `https://tech-backend-lovat.vercel.app/api/v1/products/${pId}`
  );
  const myData = await res.json();
  const data = await myData.data;
  return {
    props: {
      productData: data,
    },
    revalidate: 30,
  };
};
