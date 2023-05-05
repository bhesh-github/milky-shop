import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSearchAlt2, BiCaretDown } from "react-icons/bi";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Header = ({ isLoggedIn, isRegistered }) => {
  const [burgerClass, setBurgerClass] = useState("unclicked");
  const [sidebarClass, setSidebarClass] = useState("hidden");
  const [isSidebarClicked, setIsSidebarClicked] = useState(false);

  const updateSidebar = () => {
    if (!isSidebarClicked) {
      setBurgerClass("clicked");
      setSidebarClass("visible");
      setIsSidebarClicked(true);
    } else {
      setBurgerClass("unclicked");
      setSidebarClass("hidden");
      setIsSidebarClicked(false);
    }
  };

  const myDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };
  window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
      var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains("show")) {
        myDropdown.classList.remove("show");
      }
    }
  };

  return (
    <>
      <nav className="heading-nav">
        <a href="#" className="main-logo">
          Milky Shop
        </a>
        <ul>
        <li>
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/saleOnMilky" className="nav-link">
              SALE ON MILKY
            </NavLink>
          </li>
          <li>
            <NavLink to="/trackMyOrder" className="nav-link">
              TRACK MY ORDER
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs" className="nav-link">
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/customerCare" className="nav-link">
              CUSTOMER CARE
            </NavLink>
          </li>
        </ul>
        <div className="burger-menu" onClick={updateSidebar}>
          {isSidebarClicked ? (
            <RxCross2 className={`burger-bar ${burgerClass}`} />
          ) : (
            <RxHamburgerMenu className={`burger-bar ${burgerClass}`} />
          )}
        </div>

        <div className={`sidebar ${sidebarClass}`}>
          <div className="sidebar-user-profile">User Info</div>
          <div className="sidebar-nav-link-wrapper">
            <NavLink to="/" className="sidebar-nav-link">
              SALE ON MILKY
            </NavLink>
            <NavLink to="/products" className="sidebar-nav-link">
              TRACK MY ORDER
            </NavLink>
            <NavLink to="/about" className="sidebar-nav-link">
              ABOUT US
            </NavLink>
            <NavLink to="/contact" className="sidebar-nav-link">
              CUSTOMER CARE
            </NavLink>
          </div>
        </div>
      </nav>
      <nav className="nav-bar">
        <div className="verify-location">
          <div className="icon-div">
            <MdLocationPin className="location-icon" />
          </div>
          <div className="info-to-deliver">
            <div className="top-line">Deliver to</div>
            <div className="verified-location">Nepal</div>
          </div>
        </div>
        <div className="search-bar">
          <div className="dropdown-menu">
            <button className="dropbtn" onClick={myDropdown}>
              All
              <BiCaretDown />
            </button>
            <div className="dropdown-content" id="myDropdown">
              <a href="#"> All Departments</a>
              <a href="#"> Health & beauty</a>
              <a href="#"> Electronics</a>
              <a href="#"> Foods & Beverages</a>
              <a href="#"> Furnitures</a>
              <a href="#"> Films & Music</a>
              <a href="#"> Books</a>
              <a href="#"> Art & Crafts</a>
            </div>
          </div>
          <input className="search-input"></input>
          <button className="search-btn">
            <BiSearchAlt2 className="search-icon" />
          </button>
        </div>

        <button className="signin-btn">
          {isRegistered ? (isLoggedIn ? "Sign out" : "Sign in") : "Register"}
        </button>
        <button className="cart-btn">
          <RiShoppingCartFill className="cart-icon" />
        </button>
        <button className="user-btn">
          <FaUserCircle className="user-icon" />
        </button>
      </nav>
    </>
  );
};

export default Header;

Header.defaultProps = {
  isLoggedIn: false,
  isRegistered: false,
};
