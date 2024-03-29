import React, { useState } from "react";
import { Link } from "react-router-dom";
function Cat({ status, about, catData }) {
 
  return (
    <div>
      <section class="sm:mt-6 lg:mt-8 mt-12 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 bg-amber-400">
        <div class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block xl:inline">Empowering Youth for {about.header}</span>
              <span class="block text-amber-50 xl:inline">Bright Futures</span>
            </h1>
            <p class="mt-3 text-base text-gray-800 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {/* {status? `Join us in making a positive impact on the lives of young people.`: `Take the first step towards empowerment. Join us in our mission to uplift and inspire. Support the Young Girls and Women Empowerment Program today.`} */}
              {about.empower}
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {
                status && (
                  <div class="rounded-md shadow">
                    <a
                      href="#"
                      class={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 md:py-4 md:text-lg md:px-10`}
                    >
                      Get Involve
                    </a>
                  </div>
                )
              }

              <div class="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/donate"
                  class={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 ${status ? 'bg-indigo-100 hover:bg-indigo-200' : 'bg-gray-900 hover:bg-gray-800 text-white'}  md:py-4 md:text-lg md:px-10`}
                >
                  Donate
                </Link>
              </div>

              <div class="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/volunteer"
                  class={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 ${status ? 'bg-indigo-100 hover:bg-indigo-200' : 'bg-gray-900 hover:bg-gray-800 text-white'}  md:py-4 md:text-lg md:px-10`}
                >
                  Volunteer
                </Link>
              </div>
            </div>
          </div>

          <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img
              class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cat;
