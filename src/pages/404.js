import RootLayout from "@/components/UI/RootLayout";
import React from "react";

const NotFound = () => {
  return <div>NotFound</div>;
};

export default NotFound;

NotFound.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
