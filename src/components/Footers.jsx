import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { GiUsaFlag } from "react-icons/gi";
import { TbCurrencyDollar } from "react-icons/tb";

const Footers = ({ buttons, footerMessage }) => {
  const midFooter = footerMessage.map((item, idx) => (
    <div className="mid-footer-div" key={idx}>
      <ul>
        <li className="mid-footer-head">{item.title}</li>
        {item.subtitle.map((item) => (
          <li className="mid-footer-contents">{item}</li>
        ))}
      </ul>
    </div>
  ));
  const footerBtns = buttons.map((item, idx) => (
    <button className="footer-btn" key={idx}>
      {item.title === "English" && (
        <AiOutlineGlobal className="footer-btn-icon" />
      )}
      {item.title === "USD - U.S. Dollar" && (
        <TbCurrencyDollar className="footer-btn-icon" />
      )}
      {item.title === "United States" && (
        <GiUsaFlag className="footer-btn-icon" />
      )}
      {item.title}
    </button>
  ));

  return (
    <div className="footers-container">
      <div
        className="back-to-top"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <p>Back To Top</p>
      </div>
      <div className="mid-footer">{midFooter}</div>
      <hr />
      <div className="footer-btns-wrapper">
        <div className="main-logo">Milky Shop</div>
        <div className="footer-btns">{footerBtns}</div>
      </div>
      <div className="footer-end">
        <div className="footer-end-title">
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <div className="copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </div>
  );
};

export default Footers;

Footers.defaultProps = {
  footerMessage: [
    {
      title: "Get to Know Us",
      subtitle: [
        "Careers",
        "Blog",
        "About Milky",
        "Investor Relations",
        "Milky Devices",
        "Milky Science",
      ],
    },
    {
      title: "Make Money with Us",
      subtitle: [
        "Sell products on Amazon",
        "Sell on Amazon Business ",
        "Sell apps on Amazon",
        "Become an Affiliate",
        "Advertise Your Products",
        "Self-Publish with Us",
        "Host an Amazon Hub",
        "› See More Make Money with Us ",
      ],
    },
    {
      title: "Milky Payment Products",
      subtitle: [
        "Milky Business Card",
        "Shop with Points ",
        "Reload Your Balance",
        "Amazon Currency Converter",
      ],
    },
    {
      title: " Let Us Help You",
      subtitle: [
        "Amazon and COVID-19",
        "Your Account",
        "Your Orders",
        "Shipping Rates & Policies",
        "Returns & Replacements",
        "Manage Your Content and Devices",
        "Amazon Assistant",
        "Help",
      ],
    },
  ],
  buttons: [
    {
      title: "English",
    },
    {
      title: "USD - U.S. Dollar",
    },
    {
      title: "United States",
    },
  ],
};
