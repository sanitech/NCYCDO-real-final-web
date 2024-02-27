import React from "react";

function State() {
  return (
    <div>
      <div class="py-16 bg-white dark:bg-gray-900">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl dark:text-gray-200">
              Empowering Youth and Building Strong Communities through our Charity's Work              </h2>
              <p class="mt-6 text-gray-600 dark:text-gray-400">
              Our charity is dedicated to youth and community development, creating opportunities and fostering positive change for a brighter future.
              </p>
              <p class="mt-4 text-gray-600 dark:text-gray-400">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default State;