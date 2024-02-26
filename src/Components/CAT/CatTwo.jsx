import React from "react";

function CatTwo() {
  return (
    <div className="m-auto max-w-screen-xl p-2 dark:bg-gray-900">
      <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">Mother hearth host your travel</span>
          </h2>
          <p class="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful
            National parks, Bryce national canion park ranks as three of the
            most magnificient &amp; awe inspiring.
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                class="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdXRoJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D"
            class="w-1/2 rounded-lg"
            alt="Tree"
          />
          <div>
            <img
              src="https://images.unsplash.com/photo-1559308466-b91717ec7d38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91dGglMjBuZXclMjBjaGFwdGVyfGVufDB8fDB8fHww"
              class="mb-8 rounded-lg"
              alt="Tree"
            />
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="rounded-lg"
              alt="Tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatTwo;
