import React from "react";

const ProductShowcaseLayout = ({ childrenOne, childrenTwo }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
      <section>{childrenOne}</section>
      <section>{childrenTwo}</section>
    </div>
  );
};

export default ProductShowcaseLayout;
