import React from "react";
import "./Event.css";
import EventCard from "./EventCard";
import { eventData } from "../../Data/Data";
import CurrentEvent from "./CurrentEvent";
function Event() {
  const currentEvent = eventData[1];

  return (
    <div className="m-auto max-w-screen-xl p-4 dark:bg-gray-900">
      <div className="font-bold my-3 text-3xl dark:text-gray-200">Upcoming</div>
      <div className="text-sm mb-7 dark:text-gray-200">
        Stay updated on the latest events happening in our community.
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 ">
        <div className="event-current-display">
          <CurrentEvent currentEvent={currentEvent} />
        </div>

        <div className="more-events ">
          {eventData.map((event) => {
            return <EventCard event={event} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Event;
