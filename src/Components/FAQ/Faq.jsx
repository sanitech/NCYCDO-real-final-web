import React from "react";
import { FAQData } from "../../Data/Data";

function Faq() {
  return (
    <div id="faq">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-gray-900">
        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-2">
            <div class="max-w-xs">
              <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                Frequently asked questions
              </h2>
              <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">
                Answers to the most frequently asked questions.
              </p>
            </div>
          </div>

          <div class="md:col-span-3">
            <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
              {FAQData.map((faq, key) => {
                return (
                  <div
                    class="hs-accordion pb-3 active"
                    id={faq.question.replace(/ /g, "")}
                  >
                    <button
                      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                    >
                      {faq.question}
                      <svg
                        class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                      <svg
                        class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
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
                        <path d="m18 15-6-6-6 6" />
                      </svg>
                    </button>
                    <div
                      id={faq.question.replace(/ /g, "")}
                      class={`hs-accordion-content w-full ${key==0 ? '' : 'hidden'} overflow-hidden transition-[height] duration-300`}
                      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                    >
                      <p class="text-gray-600 dark:text-gray-400">
                        {faq.answer}
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

export default Faq;
