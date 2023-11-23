import RootLayout from "@/components/UI/RootLayout";
import React from "react";

const setting = () => {
  return <div>setting</div>;
};

export default setting;

setting.getLayout = function getLayout(pages) {
  return <RootLayout>{pages}</RootLayout>;
};
