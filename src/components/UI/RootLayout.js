import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
