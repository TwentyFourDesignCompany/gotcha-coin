import React from "react";
import "./FaqHeader.css";

const FaqHeader = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className={
        props.title === props.view
          ? "faq-btn  uppercase font-bold active-faq mr-5 sm:mb-0 mb-5"
          : "faq-btn  uppercase font-bold mr-5 sm:mb-0 mb-5"
      }
    >
      {props.title}
    </button>
  );
};

export default FaqHeader;
