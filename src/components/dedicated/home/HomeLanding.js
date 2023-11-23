import CarouselPage from "@/components/antdUi/CarouselPage";
import React from "react";

import landingImgOne from "../../../assets/images/landing-images/landing_img_one.png";
import landingImgTwo from "../../../assets/images/landing-images/landing_img_two.png";

const myLandingInfos = [
  {
    landing_uid: "landing_0000001",
    img_url: landingImgOne,
  },
  {
    landing_uid: "landing_0000002",
    img_url: landingImgTwo,
  },
];
const HomeLanding = () => {
  return (
    <div className="h-[100%] w-[100%] max-h-[600px] mb-4 overflow-hidden">
      <CarouselPage carObj={myLandingInfos} />
    </div>
  );
};

export default HomeLanding;
