import React from "react";
import "./IconsCont.css";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const IconsCont = () => {
  return (
    <div className="w-full flex flex-row  mt-5 ">
      <button className="single-footer-link">
        <FaFacebookF className="single-link mx-auto" />
      </button>
      <button className="single-footer-link">
        <FaTwitter className="single-link mx-auto" />
      </button>
      <button className="single-footer-link">
        <FaWhatsapp className="single-link mx-auto" />
      </button>
      <button className="single-footer-link">
        <FaLinkedin className="single-link mx-auto" />
      </button>
    </div>
  );
};

export default IconsCont;
