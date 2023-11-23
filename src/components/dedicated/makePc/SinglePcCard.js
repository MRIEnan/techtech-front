/* pId: null,
      data: {},
      name: "Power Supply Unit",
      category: "powerSupplyUnit",
      icon: BoltIcon, */

"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/dedicated/makePc/SinglePcCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate, faTrashCanArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import useAllData from "@/hooks/useAllData";

const SinglePcCard = ({ product }) => {
  const [myProductData, setMyProductData] = useState({});
  const { pcMakeInfos, setPcMakeInfos } = useAllData();

  useEffect(() => {
    console.log(pcMakeInfos);
  }, [pcMakeInfos]);

  useEffect(() => {
    console.log(product);
    if (product.pId !== null) {
      setMyProductData(product.data);
    }
    // if (product?.data !== null) {
    //   setMyProductData(product.data);
    // }
  }, [product]);
  const router = useRouter();

  const handleAddToBuildPc = (category) => {
    // statement
    router.push(`/make-pc/tool?category=${category}`);
  };
  const handleRemoveFromBuildPc = (category) => {
    // alert(`calling handleRemoveFromBuildPc from  singlePcCard`);
    // statement
    const pcData = pcMakeInfos;

    pcData[category]["pId"] = null;
    pcData[category]["data"] = {};
    setPcMakeInfos(pcData);
    setMyProductData({});
  };

  return (
    <div className={`${styles["single-pc-card-main-outer-container"]}`}>
      <section className={`${styles["single-pc-card-section-one-holder"]}`}>
        <div
          className={`${styles["single-pc-card-section-one-image-container"]}`}
        >
          {myProductData && myProductData.image_url ? (
            <Image
              src={myProductData.image_url}
              width={40}
              height={40}
              responsive="true"
              alt={myProductData.product_name}
            />
          ) : (
            <product.icon
              className="h-[30px] w-[30px] text-gray-600 group-hover:text-indigo-600"
              aria-hidden="true"
            />
          )}
        </div>
        <div
          className={`${styles["single-pc-card-section-one-category-container"]}`}
        >
          <div>
            <div
              className={`${styles["single-pc-card-section-one-category-container-category"]}`}
            >
              <p>{product.name}</p>
            </div>
            {product.pId ? (
              <div
                className={`${styles["single-pc-card-section-one-category-container-title"]}`}
              >
                <p>{myProductData.product_name}</p>
              </div>
            ) : (
              <div
                className={`${styles["single-pc-card-section-one-category-container-title-none"]}`}
              ></div>
            )}
          </div>
        </div>
      </section>
      <section className={`${styles["single-pc-card-section-two-holder"]}`}>
        {product.pId !== null ? (
          <div
            className={`${styles["single-pc-card-section-two-choose-btn-holder"]}`}
          >
            <div
              className={`${styles["single-pc-card-section-two-choose-btn-Info-container"]}`}
            >
              <div
                className={`${styles["single-pc-card-section-two-choose-btn-Info-container-section-one"]}`}
              >
                <p>
                  {`${myProductData.price ? myProductData.price : "0"}`}&#2547;
                </p>
              </div>
              <div
                className={`${styles["single-pc-card-section-two-choose-btn-Info-container-section-two"]}`}
              >
                <div
                  title="Remove this item"
                  onClick={() => handleRemoveFromBuildPc(product.category)}
                >
                  <FontAwesomeIcon icon={faTrashCanArrowUp} />
                </div>
                <div
                  title="Replace this item"
                  onClick={() => handleAddToBuildPc(product.category)}
                >
                  <FontAwesomeIcon icon={faRotate} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`${styles["single-pc-card-section-two-choose-btn-holder"]}`}
          >
            <div
              className={`${styles["single-pc-card-section-two-choose-btn"]}`}
              onClick={() => handleAddToBuildPc(product.category)}
            >
              <p>Choose</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SinglePcCard;
