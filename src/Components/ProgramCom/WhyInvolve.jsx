import React from "react";
import { whyInvolveData } from "../../Data/Data";

function WhyInvolve() {
  return (
    <div id="involve">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="aspect-w-16 aspect-h-9"></div>

      

        <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="lg:col-span-1">
            <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
              Why Get Involved?
            </h2>
            <p class="mt-2 md:mt-4 text-gray-500">
            At NCYCDO, we firmly believe that positive change begins with individuals coming together to make a difference. By getting involved with our organization, you become a vital part of a community dedicated to creating a brighter and more compassionate world.


            </p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
            {
              whyInvolveData.map((whyInvolve)=>{
                return(
                  <div class="flex gap-x-5">
                  <svg
                    class="flex-shrink-0 mt-1 size-6 text-amber-950 dark:text-amber-500"
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
                    <rect width="18" height="10" x="3" y="11" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" x2="8" y1="16" y2="16" />
                    <line x1="16" x2="16" y1="16" y2="16" />
                  </svg>
                  <div class="grow">
                    <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                      {whyInvolve.title}
                    </h3>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">
                      {
                        whyInvolve.description
                      }
                    </p>
                  </div>
                </div>
                )
              })
            }
             

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyInvolve;
