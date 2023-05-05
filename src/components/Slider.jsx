import React from "react";
import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="slide-text">{slides[currentIndex].offers}</div>
      <div onClick={goToPrev} className="leftArrowStyles">
        <GoChevronLeft className="slider-icon" />
      </div>
      <div onClick={goToNext} className="rightArrowStyles">
        <GoChevronRight className="slider-icon" />
      </div>
      <div style={slideStyles}></div>
    </>
  );
};

export default Slider;

Slider.defaultProps = {
  slides: [
    {
      url: "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 ",
      title: "furniture",
      offers: "Save up to 50% this Diwali.",
    },
  ],
};
