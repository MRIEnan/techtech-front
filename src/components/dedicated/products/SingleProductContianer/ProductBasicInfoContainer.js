import React, { useRef } from "react";
import Styles from "@/styles/dedicated/products/SingleProductContianer/ProductBasicInfoContainer.module.css";
import BuyNowCard from "./BuyNowCard";
import EnRating from "@/components/shared/rating/EnRating";

// {
//     _id: '6540d1ac3f241cf686cde759',
//     image_url:
//       'https://www.pcworld.com/wp-content/uploads/2023/06/pcw06_DDR5.jpg?quality=50&strip=all&w=1024',
//     product_name:
//       'Corsair Vengeance LPX 16GB DDR4 RAM',
//     category: 'RAM',
//     status: 'In Stock',
//     stock: '20',
//     price: 79.99,
//     description:
//       'The Corsair Vengeance LPX is a high-performance DDR4 RAM module. It offers 16GB of memory capacity with a speed of 3200MHz. Designed for gamers and enthusiasts, it provides fast and reliable performance for your computer system.',
//     key_features: {
//       manufacturer: 'Corsair',
//       model_number: 'Vengeance LPX',
//       capacity: '16GB',
//       speed: '3200MHz',
//       type: 'DDR4',
//       cas_latency: '16'
//     },
//     individual_rating: 4.5,
//     average_rating: 4.5,
//     reviews: [
//       'Great RAM for gaming and multitasking!'
//     ]
//   }

// product_name
// category
// status
// stock
// price

const ProductBasicInfoContainer = ({ productInfo }) => {
  const qRef = useRef();
  const handleBuyAction = () => {
    console.log(qRef.current.value);
  };
  return (
    <div className={`${Styles["product-basic-info-container-main-container"]}`}>
      <section
        className={`${Styles["product-basic-info-container-inner-section"]}`}
      >
        <h2
          className={`${Styles["product-basic-info-container-inner-section-title"]}`}
        >
          {productInfo?.product_name}
        </h2>
        <div
          className={`${Styles["product-basic-info-container-inner-section-common-info-container"]}`}
        >
          <p
            className={`${Styles["product-basic-info-container-inner-section-common-info"]}`}
          >
            Price :{" "}
            {productInfo?.price.toLocaleString("us-en", {
              style: "currency",
              currency: "usd",
            })}
            {/* {productInfo?.price.toLocaleString("bn-bd", {
            style: "currency",
            currency: "bdt",
          })} */}
          </p>
          <p
            className={`${Styles["product-basic-info-container-inner-section-common-info"]}`}
          >
            Category: {productInfo?.category}
          </p>
          <p
            className={`${Styles["product-basic-info-container-inner-section-common-info"]}`}
          >
            Status:{" "}
            {productInfo?.stock > 0
              ? `${productInfo?.stock}${productInfo?.stock > 1 ? "pcs" : "pc"}`
              : "Out of Stock"}
          </p>
        </div>
        <section
          className={`${Styles["product-basic-info-container-inner-section-basic-keyword"]}`}
        >
          <p className={`text-[1.3rem]`}>Key Features</p>
          {productInfo &&
            Object.entries(productInfo?.key_features).map((elem, index) => {
              if (index < 4)
                return (
                  <p key={`${productInfo?._id}-key-basic-${index}`}>
                    {`${elem[0]} : ${elem[1]} `}
                    {index}
                  </p>
                );
            })}
          <h1
            className={`flex  items-center ${Styles["product-basic-info-container-rating-holder"]}`}
          >
            Rating :
            <EnRating
              product_uid={productInfo._id}
              key={productInfo._id}
              ratingVal={productInfo.average_rating}
            />
          </h1>
          <p className={`text-[var(--en-primary-color)] `}>View more info </p>
          <section
            className={`${Styles["product-basic-info-container-inner-section-buy-now-btn-holder"]}`}
          >
            {productInfo?.stock && (
              <BuyNowCard
                qRef={qRef}
                text="Buy"
                max={productInfo?.stock}
                btnAction={handleBuyAction}
              />
            )}
          </section>
        </section>
      </section>
    </div>
  );
};

export default ProductBasicInfoContainer;
