import React from "react";
import { PartnersWithUs } from "../../Data/Data";

function Partner() {
  return (
    <div id="ourPartner">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
          <h2 class="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">
          Our Partners
          </h2>
        </div>

        <div class="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          {PartnersWithUs.map((partner) => {
            return (
              <a
                class="flex-shrink-0 transition hover:-translate-y-1"
                href={partner.link}
                target="_blank"
              >
                <img src={partner.logo} alt={partner.name} className="h-12"/>
              </a>
            );
          })}

         
        </div>

        {/* <div class="grid grid-cols-12 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
          <div class="col-span-6 text-center">
            <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              250+
            </h4>
            <h4 class="text-sm text-gray-600 dark:text-gray-400">Components</h4>
          </div>

          <div class="col-span-6 text-center">
            <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              160+
            </h4>
            <h4 class="text-sm text-gray-600 dark:text-gray-400">
              Starter Pages & Examples
            </h4>
          </div>

          <div class="col-start-4 col-span-6 text-center">
            <h4 class="text-xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              10+
            </h4>
            <h4 class="text-sm text-gray-600 dark:text-gray-400">
              Tailwind CSS Plugins
            </h4>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Partner;
