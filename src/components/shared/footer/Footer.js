import React from "react";
import logoImageOne from "@/assets/images/techtech_logo_One.png";
import Image from "next/image";
import useAllData from "@/hooks/useAllData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@/styles/shared/footer/Footer.module.css";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { myUserHook } = useAllData();
  return (
    <div className={`${styles["footer-main-outer-container"]}`}>
      {/* section one */}
      <section className={`${styles["footer-section-one-main-outer"]}`}>
        <div className={`${styles["footer-section-one-inner"]}`}>
          <Image
            src={logoImageOne}
            alt="tech tech"
            height={80}
            width={80}
            responsive={"true"}
          />
        </div>
      </section>
      {/* section two */}
      <section className={`${styles["footer-section-two-main-outer"]}`}>
        <div className={`${styles["footer-section-two-inner"]}`}>
          <div className={`${styles["footer-section-two-inner-content"]}`}>
            <div className={`${styles["footer-section-two-inner-title"]}`}>
              <h2>Links</h2>
            </div>
            <div
              className={`${styles["footer-section-two-inner-links-holder"]}`}
            >
              <p>Home</p>
              <p>processors</p>
              <p>ram</p>
              <p>monitor</p>
              {!myUserHook.email && <p>sign in</p>}
              {myUserHook.email && <p>build PC</p>}
            </div>
          </div>
        </div>
      </section>
      {/* section three */}
      <section className={`${styles["footer-section-three-main-outer"]}`}>
        <div className={`${styles["footer-section-three-inner"]}`}>
          <div>
            <div className={`${styles["footer-section-three-inner-title"]}`}>
              <h2>Contact Us</h2>
            </div>
            <div
              className={`${styles["footer-section-three-inner-address-physical"]}`}
            >
              <p>+8801234567891</p>
              <br />
              <p>My Office, Chittagong, Bangladesh</p>
            </div>
            <div
              className={`${styles["footer-section-three-inner-address-social"]}`}
            >
              <div>
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div>
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div>
                <FontAwesomeIcon icon={faMailBulk} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
