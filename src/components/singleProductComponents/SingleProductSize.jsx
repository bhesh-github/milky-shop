import React from "react";
import { useState } from "react";

const SingleProductSize = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  const handleSelectedSize = (i) => {
    sizes.map((item) => {
      return item === i ? setSelectedSize(item) : "";
    });
  };
  const sizeSquare = sizes.map((item, idx) => (
    <span
      className="size-square"
      key={idx}
      onClick={() => {
        handleSelectedSize(item);
      }}
    >
      {item}
    </span>
  ));
  return (
    <div className="Single-product-size-wrapper">
      <p className="size">
        Size: <span className="selected-size">{selectedSize}</span>
      </p>
      <span className="size-square-container">{sizeSquare}</span>
    </div>
  );
};

export default SingleProductSize;

SingleProductSize.defaultProps = {
  sizes: ["S", "M", "L", "XL", "2XL", "3XL", "4XL"],
};
