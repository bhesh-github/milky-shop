import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 9,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MultiCarousel = ({ bookList }) => {
  const filteredBooks = bookList.map(
    (item) => item.category === "book" && item
  );
  return (
    <>
      <h3 className="carousel-title">Top Sellers in Books for you</h3>
      <Carousel responsive={responsive}>
        {filteredBooks.map((item, idx) => (
          <div className="multicarousel-wrapper card" key={idx}>
            <a>
              <img className="multicarousel-img" src={item.url} />
            </a>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MultiCarousel;

MultiCarousel.defaultProps = {
  bookList: {
    bookTitle: "Jonathan Livingstone Seagull",
    url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Johnathan_Livingston_Seagull.jpg/220px-Johnathan_Livingston_Seagull.jpg",
    category: "book",
    // qty: 20
  },
};
