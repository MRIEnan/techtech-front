import useAllData from "@/hooks/useAllData";
import React, { useEffect, useRef, useState } from "react";
import logoImageOne from "../../../assets/images/techtech_logo_One.png";
import Image from "next/image";
import styles from "@/styles/dedicated/makePc/MakePcMain.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faSave,
  faSprayCanSparkles,
} from "@fortawesome/free-solid-svg-icons";
import SinglePcCard from "./SinglePcCard";
import ButtonOne from "@/components/shared/button/ButtonOne";
import html2canvas from "html2canvas";

/*  
{
    processor: {
      pId: null,
      name: "CPU/ Processor",
      category: "processor",
    },
    motherboard: {
      pId: null,
      name: "Motherboard",
      category: "motherboard",
    },
    ram: {
      pId: null,
      name: "RAM",
      category: "ram",
    },
    powerSupplyUnit: {
      pId: null,
      name: "Power Supply Unit",
      category: "powerSupplyUnit",
    },
    storage: {
      pId: null,
      name: "Storage",
      category: "storage",
    },
    monitor: {
      pId: null,
      name: "Monitor",
      category: "monitor",
    },
  }
*/

const MakePcMain = () => {
  const { pcMakeInfos } = useAllData();
  const [hidden, setHidden] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const makePcMainRef = useRef();
  const [totalInfo, setTotalInfo] = useState({
    totalElem: 0,
    totalElemPrice: 0,
  });

  useEffect(() => {
    console.log(pcMakeInfos);
  }, [pcMakeInfos]);

  useEffect(() => {
    let total = 0;
    let totalElem = 0;
    if (pcMakeInfos) {
      Object.entries(pcMakeInfos).forEach((elem) => {
        const thisElemData = elem[1];
        if (thisElemData.data && Number(thisElemData?.data?.price) >= 0) {
          total = total + Number(thisElemData?.data?.price);
          totalElem++;
        }
      });
    }
    const myElem = {
      totalElem: totalElem,
      totalElemPrice: total,
    };
    setTotalInfo(myElem);
  }, [pcMakeInfos]);

  const getdateName = () => {
    const d = new Date();
    return d.getTime();
  };

  const handleScreenshot = () => {
    setIsDownloading(true);
    const myTimerScreenshot = setTimeout(() => {
      html2canvas(
        document.getElementById("make-pc-main-screenshot-container")
      ).then(function (canvas) {
        let a = document.createElement("a");
        a.href = canvas
          .toDataURL("..assets/image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        a.download = `my-pc-specification-${getdateName()}`;
        // a.download = `energycheckerviewerof${nome.replace(" ",'')}${downloadCounter}`;
        a.click();
        setIsDownloading(false);
      });
    }, 1000);
    return () => clearTimeout(myTimerScreenshot);
  };

  const handleBuildPc = () => {
    console.log(`building the pc`);
  };

  return (
    <div
      className={`${styles["make-pc-main-outer-container"]}`}
      id={`make-pc-main-screenshot-container`}
      ref={makePcMainRef}
    >
      <section className={`${styles["make-pc-inner-section-one-container"]}`}>
        <div
          className={`${styles["make-pc-inner-section-one-inner-top-info-wrapper"]}`}
        >
          <div
            className={`${styles["make-pc-inner-section-one-inner-top-info-wrapper-left"]}`}
          >
            <Image
              src={logoImageOne}
              height={40}
              width={40}
              responsive={"true"}
              alt="tech tech logo"
            />
          </div>
          <div
            className={`${styles["make-pc-inner-section-one-inner-top-info-wrapper-right"]}`}
          >
            <div
              className={`${styles["make-pc-inner-section-one-inner-top-info-wrapper-right-icon"]}`}
              onClick={() => handleScreenshot()}
            >
              <FontAwesomeIcon icon={faSave} />
            </div>
            <div
              className={`${styles["make-pc-inner-section-one-inner-top-info-wrapper-right-icon"]}`}
              onClick={() => handleScreenshot()}
            >
              <FontAwesomeIcon icon={faCamera} />
            </div>
          </div>
        </div>

        <div
          className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper"]}`}
        >
          <p
            className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-title"]}`}
          >
            Build PC - Build your personal Computer - Tech T Tech
          </p>
          {!isDownloading && (
            <div
              className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-hidden-controller"]}`}
            >
              <input
                onClick={() => setHidden(!hidden)}
                type="checkbox"
                id="hideComponent"
              />
              <label onClick={() => setHidden(!hidden)} htmlFor="hideComponent">
                Hide Unconfigured Components
              </label>
            </div>
          )}
          <div
            className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-total-info-card"]}`}
          >
            <div
              className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-total-info-card-title"]}`}
            >
              <p>Total</p>
            </div>
            <div
              className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-total-info-card-info"]}`}
            >
              <div
                className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-total-info-card-info-one"]}`}
              >
                <p>{totalInfo.totalElemPrice}&#2547;</p>
              </div>
              <div
                className={`${styles["make-pc-inner-section-one-inner-middle-info-wrapper-total-info-card-info-two"]}`}
              >
                <p>{`${totalInfo.totalElem} ${
                  totalInfo.totalElem >= 2 ? "pieces" : "piece"
                }`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* bottom cards */}
      <section>
        {pcMakeInfos &&
          hidden &&
          Object.entries(pcMakeInfos).map((elem, index) => {
            if (elem[1]["pId"]) {
              return (
                <SinglePcCard
                  product={elem[1]}
                  key={`make-pc${elem[1]["pId"]}`}
                />
              );
            } else {
              return;
            }
          })}
        {pcMakeInfos &&
          !hidden &&
          Object.entries(pcMakeInfos).map((elem, index) => {
            if (elem[1]["pId"]) {
              return (
                <SinglePcCard
                  product={elem[1]}
                  key={`make-pc${index}${
                    elem[1]["pId"] ? elem[1]["pId"] : index
                  }`}
                />
              );
            } else {
              return (
                <SinglePcCard
                  product={elem[1]}
                  key={`make-pc${index}${
                    elem[1]["pId"] ? elem[1]["pId"] : index
                  }`}
                />
              );
            }
          })}
        {!isDownloading && (
          <div>
            <ButtonOne
              text="Build PC"
              disabled={totalInfo.totalElem >= 6 ? false : true}
              btnAction={() => handleBuildPc()}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default MakePcMain;
