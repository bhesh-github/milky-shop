import React from "react";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import Slider from "../Slider";
import ProductsGroupCard from "../ProductsGroupCard";
import { slides, productsGroup, bookList } from "../Data";
import MultiCarousel from "../MultiCarousel";
import Footers from "../Footers";
import ProductCard from "../ProductCard";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />
      <div className="slider-container">
        <Slider slides={slides} />
      </div>
      <div className="products-group-card">
        <ProductsGroupCard productsGroup={productsGroup} />
      </div>
      <div className="multicarousel-container">
        <MultiCarousel bookList={bookList} />
      </div>
      <div className="product-card">
        <ProductCard />
      </div>
      <div className="load-more-wrapper">
        <button className="load-more-btn">LOAD MORE</button>
      </div>
      <div className="footers-container">
        <Footers />
      </div>
    </div>
  );
};

export default Home;
