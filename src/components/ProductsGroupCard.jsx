import React from "react";

const ProductsGroupCard = ({ productsGroup }) => {
  return (
    <>
      {productsGroup.map((item, idx) => {
        return (
          <div className="products-group-wrapper" key={idx}>
            <div className="products-group-title">{item.title}</div>
            <img src={item.img} />
            <div className="products-group-action">{item.action.title}</div>
          </div>
        );
      })}
    </>
  );
};

export default ProductsGroupCard;

ProductsGroupCard.defaultProps = {
  productsGroup: [
    {
      title: "Health & Personal Care",
      img: "https://images.pexels.com/photos/5613566/pexels-photo-5613566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      action: {
        title: "Shop now",
      },
    },
  ],
};
