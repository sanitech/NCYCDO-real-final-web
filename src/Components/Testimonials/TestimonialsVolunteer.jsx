import React from "react";
import { boardMember } from "../../Data/Data";

function TestimonialsVolunteer() {
  return (
    <div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Our leadership</h2>
      </div>
    
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
      {
        boardMember.map((board)=>{
          return(
            <div class="text-center">
            <img class="rounded-xl sm:size-48 lg:size-60 mx-auto object-cover" src={board.image} alt="Image Description"/>
            <div class="mt-2 sm:mt-4">
              <h3 class="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
                {board.name}
              </h3>
              <p class="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
                {
                  board.position
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
  );
}

export default TestimonialsVolunteer;
