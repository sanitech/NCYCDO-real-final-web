import React from 'react'

function EventCard() {
  return (
    <div>
    <div className="event-card shadow flex gap-2 p-2 hover:shadow-md hover:cursor-pointer mb-4">
    <div className="more-event-detail flex align-middle gap-1 flex-col w-36 justify-center">
      <span className="font-semibold">Sat</span>
      <span className="font-bold text-5xl">09</span>
      <span className="font-semibold text-sm">Feb 2024</span>
    </div>
    <div className="min-w-px h-30 bg-gray-500"></div>

    <div className="event-info">
      <div className="event-title font-bold text-xl flex gap-10">Event title  <div className="min-w-px p-1 text-xs rounded-sm text-gray-700 font-medium    bg-gray-200 ">Program</div> </div>
      <div className="event-location text-sm">location</div>
      <div className="event-detail-info text-base text-black font-medium leading-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Assumenda, nam?
      </div>
      <div className="learn-more flex my-3 items-center hover:text-amber-500">
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
  )
}

export default EventCard
