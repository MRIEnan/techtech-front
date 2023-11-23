import React, { useState } from "react";
import Styles from "../../../styles/shared/card/ProductCardOne.module.css";
import spImageProcessorOne from "../../../assets/images/products-images/icons/cpu-image-one.png";
import spImageMonitorOne from "../../../assets/images/products-images/icons/monitor-img-one.png";
import spImageRamOne from "../../../assets/images/products-images/icons/ram-img-one.png";
import spImageMotherboardOne from "../../../assets/images/products-images/icons/motherboard-img-one.png";
import spImagePowerOne from "../../../assets/images/products-images/icons/power-supply-img-one.png";
import spImageStorageOne from "../../../assets/images/products-images/icons/storage-img-one.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "../../../../node_modules/@fortawesome/react-fontawesome";
import { faCentos } from "../../../../node_modules/@fortawesome/free-brands-svg-icons";
import EnRating from "../rating/EnRating";
import ButtonOne from "../button/ButtonOne";
import { useRouter } from "next/navigation";

// category logo icons
const productCategoryImages = {
  processor: spImageProcessorOne,
  monitor: spImageMonitorOne,
  ram: spImageRamOne,
  motherboard: spImageMotherboardOne,
  "power supply unit": spImagePowerOne,
  storage: spImageStorageOne,
};

const ProductCardOne = ({
  product,
  handleAddToBuildPc = (category, productId, productInfo) => {},
  myUserHook = {},
}) => {
  const router = useRouter();
  if (!product) {
    return;
  }

  return (
    <div className={Styles.card_container}>
      <div className={`${Styles.card_category_logo_holder}`}>
        {product?.category &&
          !productCategoryImages[`${product.category.toLowerCase()}`] && (
            <FontAwesomeIcon icon={faCentos} className="w-8 h-8" />
          )}
        {product?.category &&
          productCategoryImages[`${product.category.toLowerCase()}`] && (
            <Image
              src={productCategoryImages[`${product.category.toLowerCase()}`]}
              height={40}
              width={40}
              responsive="true"
              alt={`${product?.category}`}
            />
          )}
        <div className={Styles.product_category_tooltip}>
          <h1>{product?.category}</h1>
        </div>
      </div>
      <div className={Styles.card_product_image_holder}>
        {product?.image_url && (
          <Image
            src={product?.image_url}
            height={20}
            width={300}
            responsive="true"
            alt={`${product?.product_name}`}
          />
        )}
      </div>
      {/* product name section */}
      <div
        className={`h-[54px] 
         mb-2 break-word w-full py-1 flex items-end text-justify`}
      >
        <h1
          className={`inline font-bold text-[14px] text-ellipsis overflow-hidden break-word m-0`}
          title={product?.product_name.slice(0, 60)}
        >
          {product?.product_name}
        </h1>
      </div>
      <div className={`h-[20px] mb-2`}>
        <h1>Category : {product?.category}</h1>
      </div>
      <div className={`mb-2`}>
        <h1>
          Availability : {product?.stock > 0 ? "In Stock" : "Out of stock"}{" "}
          {product?.stock > 0 ? "✅" : "❌"}
        </h1>
      </div>
      <div className={`mb-2`}>
        <h1 className={`flex  items-center`}>
          Rating :
          <EnRating
            product_uid={product._id}
            key={product._id}
            ratingVal={product.average_rating}
          />
        </h1>
      </div>
      <div className={`mb-2`}>
        <h1>Price : {product?.price}&#2547;</h1>
      </div>
      <Link href={`/products/${product._id}`}>
        <ButtonOne
          text="Details"
          btnAction={(e) => {
            e.stopPropagation();
            console.log(product.id);
          }}
        />
      </Link>
      {myUserHook.email && (
        <div>
          <ButtonOne
            text="Add to Build PC"
            btnAction={() =>
              handleAddToBuildPc(product?.category, product._id, product)
            }
          />
        </div>
      )}
    </div>
  );
};

export default ProductCardOne;
