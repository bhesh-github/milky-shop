import React from "react";
import { useState } from "react";

const SingleProductChooseColor = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].color);
  const [colorImgClass, setColorImgClass] = useState("inactive");

  const handleColorImgClicked = ({ id }) => {
    colors.map((item) =>
      item.id === id ? setSelectedColor(item.color) : item
    );
  };
  const handleColorImgToggleClass = ({ id }) => {
    colors.map((item) =>
      item.id === id ? setColorImgClass("active") : setColorImgClass("inactive")
    );
  };

  const handleColorSquareClicked = ({ id }) => {
    colors.map((item) =>
      item.id === id ? setSelectedColor(item.color) : item
    );
  };

  const colorCard =
    colors &&
    colors.map((item, idx) =>
      item.url ? (
        <div
          className={`color-img-wrapper ${colorImgClass}`}
          key={idx}
          onClick={() => {
            handleColorImgClicked(item);
            handleColorImgToggleClass(item);
          }}
        >
          <span className="color-img-card">
            <img className="color-img" src={item.url} />
          </span>
        </div>
      ) : item.colorCode ? (
        <span
          className="color-square"
          style={{ backgroundColor: `${item.colorCode}` }}
          onClick={() => {
            handleColorSquareClicked(item);
          }}
        ></span>
      ) : (
        ""
      )
    );

  return (
    <div className="single-product-choose-color-wrapper">
      {
        <p>
          Color: <span className="s-p-selected-color">{selectedColor}</span>
        </p>
      }
      <div className="color-container">{colorCard}</div>
    </div>
  );
};

export default SingleProductChooseColor;

SingleProductChooseColor.defaultProps = {
  colors: [
    {
      id: 2,
      color: "Maroon",
      colorCode: "#800000",
    },
    {
      id: 0,
      color: "Charcoal",
      colorCode: "#36454F",
    },
    {
      id: 3,
      color: "Navy",
      colorCode: "#000080",
    },
    {
      id: 4,
      color: "Royal",
      colorCode: "#4169e1",
    },
    {
      id: 5,
      color: "White",
      colorCode: "#FFFFFF",
    },
    {
      id: 6,
      color: "Gold",
      colorCode: "#FFD700",
    },

    // {
    //   id: 0,
    //   url: "https://m.media-amazon.com/images/I/71LYmPFFwNL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Charcoal",
    // },
    // {
    //   id: 1,
    //   url: "https://m.media-amazon.com/images/I/71XcH7gr0yL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Maroon",
    // },
    // {
    //   id: 2,
    //   url: "https://m.media-amazon.com/images/I/71pG3CofN2L._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Navy",
    // },
    // {
    //   id: 3,
    //   url: "https://m.media-amazon.com/images/I/718vQeBGG0L._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Royal",
    // },
    // {
    //   id: 4,
    //   url: "https://m.media-amazon.com/images/I/71d-Z1KoolL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "White",
    // },
    // {
    //   id: 5,
    //   url: "https://m.media-amazon.com/images/I/71nRqsW7IhL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Antique Cherry Red",
    // },
    // {
    //   id: 6,
    //   url: "https://m.media-amazon.com/images/I/71wbvL+21NL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Carolina Blue",
    // },
    // {
    //   id: 7,
    //   url: "https://m.media-amazon.com/images/I/718p-MYPzuL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Daisy",
    // },
    // {
    //   id: 8,
    //   url: "https://m.media-amazon.com/images/I/71d8cjnrxhL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Forest Green",
    // },
    // {
    //   id: 9,
    //   url: "https://m.media-amazon.com/images/I/71Q-+JCxIvL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Gold",
    // },
    // {
    //   id: 10,
    //   url: "https://m.media-amazon.com/images/I/81twDqOTWbL._AC_SX466._SX._UX._SY._UY_.jpg",
    //   color: "Heather Cardinal",
    // },
    // {
    //   id: 11,
    //   url: "https://m.media-amazon.com/images/I/61ALsCNwRxL._AC_SY550._SX._UX._SY._UY_.jpg",
    //   color: "Indigo Blue",
    // },
  ],
};
