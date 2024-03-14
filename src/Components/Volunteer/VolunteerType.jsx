  import React from "react";
import { Link } from "react-router-dom";

function VolunteerType({ membershipStatus }) {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12 mx-auto">
        <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-6">
          <Link
            onClick={() => membershipStatus("individual")}
            class="group flex flex-col border shadow-sm rounded-xl hover:shadow-md transition focus:bg-amber-500 active:bg-amber-500  focus:ring focus:ring-amber-200 dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div class="p-4 md:p-5">
              <div class="flex justify-center items-center">
                <div className="flex items-center flex-col ">
                  <svg
                  class="bi bi-person flex-shrink-0 size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  <h3 class="group-hover:text-gray-900 font-semibold  text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Individual
                  </h3>
                </div>
               
              </div>
            </div>
          </Link>

          <Link
            onClick={() => membershipStatus("group")}
            class="group flex flex-col border shadow-sm rounded-xl hover:shadow-md transition focus:bg-amber-500  focus:ring focus:ring-amber-200 active:bg-amber-500 dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <div class="p-4 md:p-5">
              <div class="flex justify-center items-center">
                <div>
                  <svg
                    class="bi bi-people flex-shrink-0 size-9"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                  </svg>
                  <h3 class="group-hover:text-gray-900 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    Group
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VolunteerType;
