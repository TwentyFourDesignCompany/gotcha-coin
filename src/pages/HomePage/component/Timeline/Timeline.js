import React from "react";
import "./Timeline.css";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import { FaBtc } from "react-icons/fa";

const Timelines = () => {
  return (
    <div className="w-full mx-auto">
      <Timeline minEvents={4} placeholder height='small'>
        <TimelineEvent
          color="#ff8e00"
          icon={FaBtc}
          title="March 2021"
          subtitle="Lorem Ipsum is simply dummy text of the printing"
        />
        <TimelineEvent
          color="#ff8e00"
          icon={FaBtc}
          title="May 2021"
          subtitle="Lorem Ipsum is simply dummy text of the printing"
        />
        <TimelineEvent
          color="#ff8e00"
          icon={FaBtc}
          title="June 2021"
          subtitle="Lorem Ipsum is simply dummy text of the printing"
        />
        <TimelineEvent
          color="#ff8e00"
          icon={FaBtc}
          title="July 2021"
          subtitle="Lorem Ipsum is simply dummy text of the printing"
        />
      </Timeline>
    </div>
  );
};

export default Timelines;
