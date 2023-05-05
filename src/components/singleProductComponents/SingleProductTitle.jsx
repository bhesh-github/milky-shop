import React from "react";

const SingleProductTitle = ({ title }) => {
  return <div className="single-product-title">{title}</div>;
};

export default SingleProductTitle;

SingleProductTitle.defaultProps = {
  title:
    "Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone",
};
