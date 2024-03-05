import React, { useEffect, useState } from "react";

function ProgramsAreasCom({ selectedProgramArea }) {
  const currentProgramArea = selectedProgramArea[0];

  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="aspect-w-16 aspect-h-9"></div>

        <div className="aspect-auto">
          <img
            class="h-96 w-full object-cover"
            src={currentProgramArea?.image}
            alt="Image Description"
          />
        </div>

        <div class="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="lg:col-span-1">
            <h2 class="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
             {currentProgramArea?.subMoto}
            </h2>
            <p class="mt-2 md:mt-4 text-gray-500">
              {currentProgramArea?.mission}
            </p>
          </div>

          <div class="lg:col-span-2">
            <div class="grid sm:grid-cols-2 gap-8 md:gap-12">
              {currentProgramArea?.keyArea.map((area) => {
                return (
                  <div class="flex gap-x-5">
                   <img className="h-9" src={currentProgramArea.icon} alt={currentProgramArea.title} />
                    <div class="grow">
                      <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
                        {area.title}
                      </h3>
                      <p class="mt-1 text-gray-600 dark:text-gray-400">
                        {area.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramsAreasCom;
