import React from "react";

function EventCard({ event }) {
  const eventDate = event.venue.date.split(" ");
  return (
    <div>
      <div className="event-card shadow grid grid-cols-4 gap-2 p-2 hover:shadow-md  dark:border-b-current dark:border-amber-50 hover:cursor-pointer mb-4">
        <div className="more-event-detail flex align-middle gap-1 flex-col justify-center dark:text-gray-200">
          <span className="font-semibold">{eventDate[0]}</span>
          <span className="font-bold sm:text-5xl text-3xl">{eventDate[1]}</span>
          <span className="font-semibold text-sm">
            {eventDate[2] + " " + eventDate[3]}
          </span>
          <div className="min-w-px h-30 bg-gray-500"></div>
        </div>

        <div className="event-info col-span-3">
          <div className="event-title font-bold text-xl flex gap-2 items-start dark:text-gray-200">
           <span className="line-clamp-1"> {event.title}{" "}</span>
            {/* <div className="min-w-px p-0.5  text-xs rounded-sm text-gray-700 font-medium    bg-gray-200 ">
              Program
            </div>{" "} */}
          </div>
          <div className="event-location text-base font-medium dark:text-gray-300">
            {event.venue.location}
          </div>
          <div className="event-detail-info text-base text-black font-normal leading-5 line-clamp-2 dark:text-gray-200">
            {event.desc}
          </div>
          <div className="learn-more flex my-3 items-center hover:text-amber-500 bg-amber-10 rounded dark:text-gray-200">
            <span className="font-medium text-sm">Loren more</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 hover:text-amber-500"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
