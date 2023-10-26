import React from "react";
import Navbar from "../shared/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
    </div>
  );
};

export default RootLayout;
