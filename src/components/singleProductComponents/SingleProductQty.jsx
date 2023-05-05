import React from "react";
import { useState, useEffect } from "react";

const SingleProductQty = ({ qty }) => {
  const [selectedQty, setSelectedQty] = useState(1);
  const [btnDecClass, setBtnDecClass] = useState("allowed");
  const [btnIncClass, setBtnIncClass] = useState("allowed");

  useEffect(() => {
    selectedQty === 1 && setBtnDecClass("not-allowed");
    selectedQty !== 1 && setBtnDecClass("allowed");
    selectedQty === qty && setBtnIncClass("not-allowed");
    selectedQty !== qty && setBtnIncClass("allowed");
  }, [selectedQty]);

  const handleDec = () => {
    selectedQty === 1
      ? setSelectedQty(selectedQty)
      : setSelectedQty((prev) => prev - 1);
  };
  const handleInc = () => {
    selectedQty < qty && setSelectedQty((prev) => prev + 1);
  };

  return (
    <div className="single-product-qty-wrapper">
      <p className="qty-label">Quantity</p>
      <div className="input-btns-wrapper">
        <button className={`btn minus ${btnDecClass}`} onClick={handleDec}>
          –
        </button>
        <span className="selected-qty">{selectedQty}</span>
        <button className={`btn add ${btnIncClass}`} onClick={handleInc}>
          +
        </button>
      </div>
    </div>
  );
};

export default SingleProductQty;

SingleProductQty.defaultProps = {
  qty: 5,
};
