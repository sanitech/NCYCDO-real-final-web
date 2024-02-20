import React from "react";
import "./Event.css";
import EventCard from "./EventCard";
function Event() {
  return (
    <div className="m-auto max-w-screen-xl p-4">
    <div className="font-bold my-3 text-3xl">Upcoming</div>
    <div className="text-sm mb-7">Stay updated on the latest events happening in our community.</div>
      <div className="grid grid-cols-2 gap-6  ">
        <div className="event-current-display">
          <div className="event-poster w-full">
            <img
              className="w-full"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="event-details">
            <div className="event-details-place gap-5 flex mt-5">
              <div className="event-place flex gap-2 align-middle">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
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
                      d="M3 9H21M7 3V5M17 3V5M6 13H8M6 17H8M11 13H13M11 17H13M16 13H18M16 17H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <span className="text-gray-700 font-medium ">
                  sat 14 Feb 2024
                </span>
              </div>
              <div className="event-place flex flex-1 gap-2">
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  class="bi bi-geo-alt-fill"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>{" "}
                  </g>
                </svg>
                <span>Location</span>
              </div>
            </div>

            <div className="event-info">
              <div className="event-title font-bold text-xl py-3">
                event title
              </div>
              <div className="event-detail-info font-normal text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                molestias non totam fugiat, accusantium harum soluta ad velit
                maiores accusamus!
              </div>
            </div>

            <div className="learn-more-event flex align-middle my-5 items-center">
              <span className="hover:text-amber-500 text-base">
                View Event{" "}
              </span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
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

        <div className="more-events ">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}

export default Event;
