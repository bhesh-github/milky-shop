import React from "react";
import {
  TiStarFullOutline,
  TiStarHalfOutline,
  TiStarOutline,
} from "react-icons/ti";

const StarRatings = ({ stars, count, totalRatings }) => {
  const star = Array.from({ length: 5 }, (_, idx) => {
    let number = idx + 0.5;
    return (
      <span className="star-icons" key={idx}>
        {stars >= idx + 1 ? (
          <TiStarFullOutline />
        ) : stars >= number ? (
          <TiStarHalfOutline />
        ) : (
          <TiStarOutline />
        )}
      </span>
    );
  });
  return (
    <div className="stars-comp-wrapper">
      {star && star}
      <span className="star-in-num">{stars && `(${stars})`}</span>
      <span> {count && `(${count})`}</span>
     
    </div>
  );
};

export default StarRatings;

StarRatings.defaultProps = {
  // stars: 3.9,
  // count: 120,
};
