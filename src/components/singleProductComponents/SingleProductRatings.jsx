import React from "react";
import StarRatings from "../StarRatings";

const SingleProductRatings = ({
  stars,
  answeredQuestions,
  brand,
  count: totalRatings,
}) => {
  return (
    <div className="single-product-ratings">
      <p className="product-brand">Visit the {brand} Store</p>
      <span className="product-stars">
      <span className="stars-icon">

        <StarRatings stars={stars} className="stars" />
      </span>
        <span className="t-a-wrapper">
          <span className="total-ratings"> {totalRatings} ratings</span>
          <hr className="t-a-hr"/>
          <span className="answered-questions">
            {answeredQuestions} answered questions
          </span>
        </span>
      </span>
          <p><span className="brand-label">Brand</span> All Stars</p>
    </div> 
  );
};

export default SingleProductRatings;

SingleProductRatings.defaultProps = {
  title:
    "New 3 Pcs Autumn Summer Women Pajama Sets Sleepwear Loose Pajama Shorts, Pant And T-shirt Set",
  stars: 3.5,
  count: 56,
  answeredQuestions: 126,
  brand: "All Stars",
};
