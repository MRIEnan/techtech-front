import RootLayout from "@/components/UI/RootLayout";
import { Button } from "antd";
import React from "react";
import useData from "./hooks/useData";
import useAllData from "./hooks/useAllData";

const HomePage = () => {
  const { testData, counterHelper } = useAllData();
  return (
    <div>
      <h1>This is Homepage</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
