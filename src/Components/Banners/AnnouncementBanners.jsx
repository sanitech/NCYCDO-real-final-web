import React from "react";
import banner from '../../assets/images/banner.png'
import { Link } from "react-router-dom";

function AnnouncementBanners() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div style={{backgroundImage: `url(${banner})`}} class="bg-blue-50 bg-no-repeat bg-cover bg-center p-4 rounded-lg text-center">
          <p class="me-2 inline-block">Preline UI Figma is live.</p>
          <Link
            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border-2 border-white hover:border-gray/70 hover:text-gray/70 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            to="/donate"
          >
            Donate Now
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBanners;
