import RootLayout from "@/components/UI/RootLayout";
import MakePcMain from "@/components/dedicated/makePc/MakePcMain";
import Head from "next/head";
import React from "react";
const makePc = () => {
  return (
    <div>
      <Head>
        <title>Build Pc : Tech-en</title>
      </Head>
      <MakePcMain />
    </div>
  );
};

export default makePc;

makePc.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
