import React from "react";

const SingleProductPrice = ({ price, prevPrice, disPercentage }) => {
  return (
    <div>
      <div className="single-product-price-wrapper">
        <p className="single-product-price">Rs. {price}</p>
        <span className="single-product-prev-price">Rs. {prevPrice}</span>
        <span> -{disPercentage}%</span>
      </div>
    </div>
  );
};

export default SingleProductPrice;

SingleProductPrice.defaultProps = {
  price: 109.95,
  prevPrice: 150,
  disPercentage: 25,
};
