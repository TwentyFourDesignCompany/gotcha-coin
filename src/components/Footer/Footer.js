import React, { useEffect } from "react";
import "./Footer.css";
import {
  Link as scrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { FaAngleUp } from "react-icons/fa";
import Image from "../../assests/white-logo-1.png";
import IconsCont from "./component/IconsCont/IconsCont";
import { NavLink } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-primary-main footer w-full container relative lg:pt-24 pt-20 pb-20  lg:pl-8 md:pl-12 pl-6 lg:pr-8 md:pr-12 pr-6">
      <button
        className="footer-btn animate-bounce"
        onClick={() => scrollToTop()}
      >
        <FaAngleUp className="btn-icon mx-auto" />
      </button>
      <div className="lg:grid lg:grid-cols-4  sm:grid-cols-2 w-full h-full ">
        <div className="footer-1  col-span-1 lg:mb-0 mb-7 w-full md:mx-auto lg:mx-0">
          <img
            src={Image}
            alt="Gotchacoin Logo"
            className="block footer-logo w-40 h-28  "
          />
          <IconsCont />
        </div>
        <div className="footer-1 lg:col-span-2 col-span-1 md:mx-0 mx-auto flex flex-row justify-center">
          <div className="lg:mr-20 mr-5 sm:mt-5 mt-3">
            <NavLink to="#" className="single-page-link mb-5">
              What is ico
            </NavLink>
            <NavLink to="#" className="single-page-link mb-5">
              Tokens
            </NavLink>
            <NavLink to="#" className="single-page-link mb-5">
              Roadmap
            </NavLink>
          </div>
          <div className="lg:mr-20 mr-5 sm:mt-5 mt-3">
            <NavLink to="#" className="single-page-link mb-5">
              ICO Apps
            </NavLink>
            <NavLink to="#" className="single-page-link mb-5">
              Whitepaper
            </NavLink>
            <NavLink to="#" className="single-page-link mb-5">
              Teams
            </NavLink>
          </div>
          <div className="lg:mr-20 mr-5 sm:mt-5 mt-3">
            <NavLink to="#" className="single-page-link mb-5">
              Join us
            </NavLink>
            <NavLink to="#" className="single-page-link mb-5">
              Contact
            </NavLink>
            <NavLink to="#" className="single-page-link mb-5">
              Faq
            </NavLink>
          </div>
        </div>
        <div className="footer-1 col-span-1">
          <h6 className="text-white-main sm:text-lg text-sm mb-5 mt-5">
            Subscribe to our Newsletter
          </h6>
          <div className="input-cont w-full h-14 ">
            <input
              className="footer-input h-full"
              type="text"
              placeholder="Enter your email address"
            />
            <button className="input-btn h-full">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="flex flex-row justify-between">
        <h6 className="text-white-light lg:text-sm text-xs font-medium">
          &copy; Gotchacoin all Rights Reserved
        </h6>
        <p className="text-white-light lg:text-sm text-xs font-medium">
          Terms & Conditions
        </p>
      </div>
    </footer>
  );
};

export default Footer;
