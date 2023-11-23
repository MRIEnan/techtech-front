import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import landingImgOne from "../../assets/images/landing-images/landing_img_one.png";
import ImageViewer from "../shared/others/ImageViewer";

const contentStyle = {
  margin: 0,
  height: "100vh",
  color: "#fff",
  maxHeight: "600px",
  textAlign: "center",
  background: "#364d79",
  display: "inline-grid",
  width: "100%",
  placeItems: "center",
  ObjectFit: "contain",
};

const CarouselPage = ({ carObj }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Carousel
      // afterChange={onChange}
      // autoplay={true}
      // autoplaySpeed={"20"}
      // pauseOnHover
      // infinite
      // responsive={true}
      >
        {carObj.map((elem) => (
          <div key={`${elem.landing_uid}`} style={contentStyle}>
            <ImageViewer imgInfo={elem} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
