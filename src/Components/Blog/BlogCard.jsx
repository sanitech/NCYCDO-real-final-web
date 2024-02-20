import React from "react";
import { Link } from "react-router-dom";

function BlogCard({newsID, category, title}) {
  return (
    <div>
      <Link
        class="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 shadow"
        to={`/blog/latestNews`}
      >
        <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
          <img
            class="size-full absolute top-0 start-0 object-cover"
            src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            alt="Image Description"
          />
        </div>

        <div class="grow">
          <div class="p-4 flex flex-col h-full sm:p-6">
            <div class="mb-3">
              <p class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
                Business
              </p>
            </div>
            <h3 class="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-amber-500 dark:text-gray-300 dark:group-hover:text-white">
              Preline becomes an official Instagram Marketing Partner
            </h3>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Great news we're eager to share.
            </p>

            <div class="mt-5 sm:mt-auto">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    class="size-[46px] rounded-full"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div>
                <div class="ms-2.5 sm:ms-4">
                  <h4 class="font-semibold text-gray-800 dark:text-gray-200">
                    Aaron Larsson
                  </h4>
                  <p class="text-xs text-gray-500">Feb 15, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
