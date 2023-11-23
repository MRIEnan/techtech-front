import RootLayout from "@/components/UI/RootLayout";
import SingleChildrenHolder from "@/components/UI/SingleChildrenHolder";
import Banner from "@/components/dedicated/home/Banner";
import FeaturedCategorySet from "@/components/dedicated/home/FeaturedCategorySet";
import HomeLanding from "@/components/dedicated/home/HomeLanding";
import ProductFeaturedSet from "@/components/dedicated/home/ProductFeaturedSet";
import Footer from "@/components/shared/footer/Footer";
import useAllData from "@/hooks/useAllData";
import shuffleArray from "@/utils/shuffleArray";
import Head from "next/head";
import React, { useEffect } from "react";

const HomePage = ({ allProductsFeatured }) => {
  const { myUserHook, pcMakeInfos } = useAllData();
  return (
    <div>
      <Head>
        <title>Tech tech : HOME</title>
      </Head>
      {/* banner section */}
      <Banner />
      {/* landing page with carousel */}
      <HomeLanding />
      {/* Featured set secton*/}
      <SingleChildrenHolder
        childrenOne={
          allProductsFeatured && !allProductsFeatured.isError ? (
            <ProductFeaturedSet
              allFeaturedProduct={allProductsFeatured.data}
              myUserHook={myUserHook}
            />
          ) : (
            <div>
              <h2>{allProductsFeatured.message}</h2>
            </div>
          )
        }
      />

      {/* Featured Category Section */}
      <SingleChildrenHolder childrenOne={<FeaturedCategorySet />} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  try {
    const res = await fetch(
      `https://tech-backend-lovat.vercel.app/api/v1/products`
    );
    const fetchedData = await res.json();
    const data = await fetchedData.data;
    const myFinalData = {};
    let check = 0;
    data.forEach((elem) => {
      if (elem.stock > 0) {
        check++;
        if (myFinalData[`${elem.category}`]) {
          myFinalData[`${elem.category}`].push(elem);
        } else {
          const myArr = [elem];
          myFinalData[`${elem.category}`] = myArr;
        }
      }
    });

    if (check < 6) {
      data.forEach((elem) => {
        if (elem.stock <= 0) {
          if (myFinalData[`${elem.category}`]) {
            myFinalData[`${elem.category}`].push(elem);
          } else {
            const myArr = [elem];
            myFinalData[`${elem.category}`] = myArr;
          }
        }
      });
    }
    const resData = [];
    Object.entries(myFinalData).forEach((elem) => {
      const myRandomNum = parseInt(Math.floor(Math.random() * elem[1].length));
      resData.push(elem[1][myRandomNum]);
    });

    const returnedData = [...shuffleArray(resData)];

    return {
      props: {
        allProductsFeatured: {
          data: returnedData.splice(0, 6),
          isError: false,
          message: "Network is okay, enjoy",
        },
      },
      revalidate: 20,
    };
  } catch (err) {
    return {
      props: {
        allProductsFeatured: {
          isError: true,
          message: "Network error",
        },
      },
    };
  }
};
