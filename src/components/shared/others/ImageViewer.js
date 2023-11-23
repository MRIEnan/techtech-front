import Image from "next/image";
import React from "react";
import styles from "../../../styles/shared/others/ImageViewer.module.css";

const ImageViewer = ({ imgInfo }) => {
  return (
    <div className={`${styles["image-viewer-main-container"]} `}>
      <Image
        src={imgInfo.img_url}
        height={400}
        width={1400}
        alt={`${imgInfo.landing_uid}`}
        responsive="true"
      />
    </div>
  );
};

export default ImageViewer;
