import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Particles from "react-particles-js";
import Image from "../../assests/about.jpg";
import Timer from "./component/Timer/Timer";
import Aos from "aos";
import "aos/dist/aos.css";
import SingleFeatures from "./component/SingleFeatures/SingleFeatures";
import { features } from "../../data";
import Timeline from "./component/Timeline/Timeline";
import FaqHeader from "./component/FAQS/FaqHeader/FaqHeader";
import GeneralView from "./component/FAQS/FaqViews/GeneralView/GeneralView";

const header = [
  { title: "GENERAL", id: "1" },
  { title: "PRE-ICO & ICO", id: "2" },
  { title: "TOKENS", id: "3" },
  { title: "CLIENTS", id: "4" },
];

const HomePage = () => {
  const [viewState, setViewState] = useState("GENERAL");
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const featuresView = features.map((item) => (
    <SingleFeatures {...item} key={item.id} />
  ));

  const faqHeaderView = header.map((item) => (
    <FaqHeader
      {...item}
      key={item.id}
      view={viewState}
      onClick={() => setViewState(item.title)}
    />
  ));

  return (
    <div className="container w-full h-full main-container overflow-x-hidden">
      <main className="container relative pt-20  pb-20 lg:pl-8 main-wrapper md:pl-12 pl-6 lg:pr-8 md:pr-12 pr-6">
        <Particles
          params={{
            particles: { number: { value: 80 }, size: { value: 1 } },
            interactivity: {
              events: {
                onHover: { enable: true, " mode": "impulse" },
              },
            },
          }}
          height="100vh"
          width="100vw"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            // zIndex: 1,
          }}
        />
        <div className="main-col lg:grid lg:grid-cols-2 lg:pt-28 md:pt-24 pt-24 ">
          <div
            className="w-full main-home-col-1 lg:pt-28 h-full"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="font-extrabold  main-text text-white-light lg:text-left text-center uppercase">
              invest in
              <span className="main-text text-secodary-main">
                &nbsp;gotchacoin
              </span>
            </h1>
            <h2 className="font-extrabold lg:text-left text-center  main-text text-white-light uppercase">
              WAY TO TRADE
            </h2>
            <p className="small-text lg:text-left text-center text-white-light md:text-sm text-xs font-normal mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div
            className="w-full main-home-col-2  h-full "
            data-aos="fade-down"
            data-aos-duration="2500"
          >
            <div className=" w-full h-full sub-col xl:w-4/5 py-8 px-5 lg:mt-0 mt-10 rounded-3xl">
              <h6 className="text-center text-white-light sm:text-lg text-sm font-normal">
                Coins starts in
              </h6>
              <h6 className="text-center discount text-secodary-main sm:text-2xl  text-xs font-bold capitalize mt-2">
                Discounts 475 from final price
              </h6>
              <Timer />
              {/* COIN PROGRESS BAR */}
              <div className="coin-co flex flex-row justify-between align-middle">
                <p className="coin-text text-white-main font-medium text-sm">
                  0 coins
                </p>
                <p className="coin-text text-white-main font-medium text-sm">
                  5000 coins
                </p>
              </div>
              {/* PROGRESS BAR */}
              <div className="progress-bar mt-5 w-full h-4 rounded-2xl">
                <div
                  className="progress bg-secodary-main w-2/6
                 h-4 rounded-2xl"
                ></div>
              </div>
              {/* <div className="w-full home-btn-cont justify-center align-middle"> */}
              <button className="home-btn mx-auto sm:mb-5 animate-bounce uppercase font-bold">
                join & buy token now
              </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </main>
      <section className="container col-2 min-w-full lg:pt-24 pt-20 pb-20  lg:pl-8 md:pl-12 pl-6 lg:pr-8 md:pr-12 pr-6">
        <div className="h-full lg:grid lg:grid-cols-2">
          <div className="image-count" data-aos="slide-right">
            <img
              data-aos="slide-right"
              src={Image}
              alt="Crypto"
              className="crypto w-full h-full block"
            />
          </div>
          <div
            className="sub-main-col1 lg:ml-12 lg:pt-32 pt-10"
            data-aos="slide-left"
          >
            <h4 className="text-white-light font-bold about-title  capitalize">
              About <span className="text-secodary-main">gotchacoin</span>
            </h4>
            <h5 className="text-white-main font-bold about-text capitalize lg:py-3 py-1">
              Why choose to trade with gotchacoin
            </h5>
            <p className="text-white-light md:text-sm about-small-text text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </section>
      <section className="container features bg-primary-main min-w-full lg:pt-24 pt-20 pb-20  lg:pl-8 md:pl-12 pl-6 lg:pr-8 md:pr-12 pr-6">
        <div className="w-full h-full ">
          <div
            className="w-full h-full lg:grid lg:grid-cols-3 gap-2"
            data-aos="fade"
            data-aos-duration="2000"
          >
            <h6 className="col-span-1 text-secodary-main capitalize font-bold sm:text-5xl text-4xl sm:mb-0 mb-5">
              Best <span className=" text-white-main"> features</span>
            </h6>
            <p className="col-span-2 text-white-main sm:text-sm text-xs lg:leading-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer Lorem Ipsum is
              simply dummy
            </p>
          </div>
          {/* grid */}
          <div
            className="md:grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            {featuresView}
          </div>
        </div>
      </section>
      <section className="container col-2 min-w-full lg:pt-24 pt-20 pb-20  lg:pl-8 md:pl-12 pl-6 lg:pr-8 md:pr-12 pr-6">
        <div className="w-full h-full">
          <h6 className="text-center text-secodary-main font-bold text-4xl capitalize">
            our <span className="text-white-main">roadmap</span>
          </h6>
          <p className="text-center sm:text-sm text-xs text-white-main mt-5 sm:w-4/5 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer Lorem Ipsum is simply
            dummy
          </p>
          {/* TIMELINE */}
          <div className="timeline sm:mt-24 mt-8">
            <Timeline />
          </div>
        </div>
      </section>
      <section className="container bg-primary-main  min-w-full lg:pt-24 pt-20 pb-20  lg:pl-8 md:pl-12 pl-6 lg:pr-8 md:pr-12 pr-6">
        <div className="w-full h-full">
          <h6 className="text-center text-secodary-main font-bold text-4xl capitalize">
            Requently <span className="text-white-main">asked questions</span>
          </h6>
          <p className="text-center sm:text-sm text-xs text-white-main mt-5 sm:w-4/5 mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer Lorem Ipsum is simply
            dummy
          </p>
          <div className="faq sm:mt-16 mt-8">
            <div className="flex flex-row flex-wrap justify-center w-full">
              {faqHeaderView}
            </div>
            <div className="w-full lg:grid grid-cols-2 gap-5 mt-16">
              <GeneralView index={0} />
              <GeneralView index={1} />
              <GeneralView index={2} />
              <GeneralView index={3} />
              <GeneralView index={4} />
              <GeneralView index={5} />
              <GeneralView index={6} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
{
  /* <div className="container w-full h-full bg-secodary-main col-3 lg:grid lg:grid-cols-2">
  <div className="image-count" data-aos="slide-right">
  <img
    data-aos="slide-right"
    src={Image}
    alt="Crypto"
    className="crypto h-full w-full block"
  />
  </div>
  <div className="sub-main-col1 lg:ml-12 lg:pt-32 pt-24" data-aos="slide-left">
    <h4 className="text-white-light font-bold text-5xl capitalize">
      About <span className="text-secodary-main">&nbsp;gotchacoin</span>
    </h4>
    <h5 className="text-white-main font-bold text-2xl capitalize py-3">
      Why choose to trade with gotchacoin
    </h5>
    <p className="text-white-light md:text-sm text-xs">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
</div>; */
}
