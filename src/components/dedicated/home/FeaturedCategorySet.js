import CategoryCardOne from "@/components/shared/card/CategoryCardOne";
import PrimaryOne from "@/components/shared/title/primary/PrimaryOne";
import useAllData from "@/hooks/useAllData";
import React from "react";

const FeaturedCategorySet = () => {
  const { navItems } = useAllData();
  if (!navItems) {
    return;
  }
  return (
    <div className={`py-5`}>
      <div className={`mb-[16px]`}>
        <PrimaryOne text="Featured Category" />
      </div>
      <div className={`flex flex-wrap justify-center`}>
        {navItems["computerAccessories"].map((elem, index) => (
          <CategoryCardOne cardInfo={elem} key={`elem-inner-card-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategorySet;
