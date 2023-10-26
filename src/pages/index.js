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
      <details>
        <summary className="list-none">This is it</summary>
        <div className="grid">
          <description>This is a</description>
          <description>This is b</description>
          <description>This is c</description>
          <description>This is d</description>
        </div>
      </details>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
