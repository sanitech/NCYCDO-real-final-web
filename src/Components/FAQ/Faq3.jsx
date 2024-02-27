import React from "react";
import { FAQData } from "../../Data/Data";

function Faq3() {
  function toggleFAQ(button) {
    const content = button.nextElementSibling;
    button.setAttribute(
      "aria-expanded",
      button.getAttribute("aria-expanded") === "false" ? "true" : "false"
    );
    content.style.maxHeight =
      button.getAttribute("aria-expanded") === "true"
        ? content.scrollHeight + "px"
        : "0";
  }
  return (
    <div>
      <div class="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div class="flex flex-col text-left basis-1/2">
          <p class="inline-block font-semibold text-primary mb-4">
            Insurance FAQ
          </p>
          <p class="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <ul class="basis-1/2">
          {FAQData.map((faq) => {
            return (
              <li>
                <button
                  class="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                  aria-expanded="false"
                  onclick="toggleFAQ(this)"
                >
                  <span class="flex-1 text-base-content">{faq.question}</span>
                  <svg
                    class="flex-shrink-0 w-4 h-4 ml-auto fill-current"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      class="transform origin-center transition duration-200 ease-out false"
                    ></rect>
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      class="transform origin-center rotate-90 transition duration-200 ease-out false"
                    ></rect>
                  </svg>
                </button>
                <div
                  class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
                  //   style="transition: max-height 0.3s ease-in-out 0s;"
                >
                  <div class="pb-5 leading-relaxed">
                    <div class="space-y-2 leading-relaxed">{faq.answer}</div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Faq3;