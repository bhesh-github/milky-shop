import React from "react";
import Header from "../Header";
import SingleProductHead from "./SingleProductRatings";
import SingleProductPrice from "./SingleProductPrice";
import SingleProductChooseColor from "./SingleProductChooseColor";
import SingleProductSize from "./SingleProductSize";
import SingleProductQty from "./SingleProductQty";
import SingleProductActionBtns from "./SingleProductActionBtns";
import SingleProductDisplayImg from "./SingleProductDisplayImg";
import SingleProductTitle from "./SingleProductTitle";

const SingleProduct = () => {
  const productDisplayUrl = {
    videoUrl: "https://www.youtube.com/watch?v=TBTgQbjRsqg",
    imgUrl: [
      "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/617I3mDGmTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51OoKCakCfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/51lEdIxlNDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/517i7g9q7zL._AC_SL1500_.jpg",
    ],
    videoUrl: {
      thumbnail: "https://i.ytimg.com/vi/TBTgQbjRsqg/maxresdefault.jpg",
      url: "https://www.youtube.com/watch?v=TBTgQbjRsqg",
    },
  };
  return (
    <>
      <Header />
      <div className="single-product-head-body-wrapper">
        <SingleProductTitle/>
        <div className="single-product-body-wrapper">
          <SingleProductDisplayImg prodcutDisplayUrl={productDisplayUrl} />
          <div className="single-product-custom-wrapper">
            <SingleProductHead />
            <hr className="single-product-hr" />
            <SingleProductPrice />
            <hr className="single-product-hr" />
            <SingleProductChooseColor />
            <hr className="single-product-hr" />
            <SingleProductSize />
            <hr className="single-product-hr" />
            <SingleProductQty />
            <hr className="single-product-hr" />
            <SingleProductActionBtns />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
