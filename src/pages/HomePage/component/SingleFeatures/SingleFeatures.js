import React from "react";
import "./SingleFeatures.css";
import Image from "../../../../assests/Secure.svg";

const SingleFeatures = (props) => {
  return (
    <div className="single-features sm:mb-0 mb-10 w-full sm:flex sm:flex-row grid grid-col-1 align-middle transition-all duration-500 ease-in-out ">
      <img src={props.image} alt="Logo" className="block mr-5 w-16 h-12" />
      <div>
        <h1 className="text-white-main  single-features-main font-bold capitalize">
          {props.title}
        </h1>
        <p className="text-white-main text-xs mt-2 secure-small-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default SingleFeatures;
