import React from "react";
import { corValue } from "../../Data/Data";

function BuildEmpower() {
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="text-gray-900 dark:text-gray-200 py-5 font-bold text-3xl">
          Empowering Youth and Building Strong <br /> Community
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
          {corValue.map((value) => {
            return (
              <a
                class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="#"
              >
             <img src={value.icon} alt={value.title} className="h-7 px-4"/>

                <div>
                  <div>
                    <h3 class="block font-bold text-gray-800 dark:text-white">
                      {value.title}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                     {value.value}
                    </p>
                  </div>

                
                </div>
              </a>
            );
          })}

          
        </div>
      </div>
    </div>
  );
}

export default BuildEmpower;
