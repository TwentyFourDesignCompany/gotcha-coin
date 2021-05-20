import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("July 31, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <section className="w-full timer mt-7 flex flex-row mb-14 ">
      {/* SINGLE */}
      <div className="single-time-cont w-20 h-20">
        <div className="single-time w-full h-full">
          <p className="single-time-text font-semibold text-white-main md:text-5xl text-2xl uppercase">
            {timerDays}
          </p>
        </div>
        <p className="single-time-type uppercase text-white-light font-normal text-center md:text-sm text-xs mt-2">
          Days
        </p>
      </div>
      <span className="colon text-white-main sm:text-4xl text-xl font-bold ">
        :
      </span>
      {/* SINGLE */}
      <div className="single-time-cont w-20 h-20">
        <div className="single-time w-full h-full">
          <p className="single-time-text font-semibold text-white-main md:text-5xl text-2xl uppercase">
            {timerHours}
          </p>
        </div>
        <p className="single-time-type uppercase text-white-light font-normal text-center md:text-sm text-xs mt-2">
          hours
        </p>
      </div>
      <span className="colon text-white-main sm:text-4xl text-xl font-bold ">
        :
      </span>
      {/* SINGLE */}
      <div className="single-time-cont w-20 h-20">
        <div className="single-time w-full h-full">
          <p className="single-time-text font-semibold text-white-main md:text-5xl text-2xl uppercase">
            {timerMinutes}
          </p>
        </div>
        <p className="single-time-type uppercase text-white-light font-normal text-center md:text-sm text-xs mt-2">
          minutes
        </p>
      </div>
      <span className="colon text-white-main sm:text-4xl text-xl font-bold ">
        :
      </span>
      {/* SINGLE */}
      <div className="single-time-cont w-20 h-20">
        <div className="single-time w-full h-full">
          <p className="single-time-text font-semibold text-white-main md:text-5xl text-2xl uppercase">
            {timerSeconds}
          </p>
        </div>
        <p className="single-time-type uppercase text-white-light font-normal text-center md:text-sm text-xs mt-2">
          seconds
        </p>
      </div>
      {/* <span className="colon text-white-main text-4xl font-bold mx-5">:</span> */}
    </section>
  );
};

export default Timer;
