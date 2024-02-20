import React from "react";

function DonateForm() {
  return (
    <div>
      <div class="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Preline: A vision for 2024
              </p>

              <div class="mt-4 md:mb-12 max-w-2xl">
                <h1 class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                  Fully customizable rules to match your unique needs
                </h1>
                <p class="text-gray-600 dark:text-gray-400">
                  We provide you with a test account that can be set up in
                  seconds. Our main focus is getting responses to you as soon as
                  we can.
                </p>
              </div>

              <blockquote class="hidden md:block relative max-w-sm">
                <svg
                  class="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200 dark:text-gray-800"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>

                <div class="relative z-10">
                  <p class="text-xl italic text-gray-800 dark:text-white">
                    Amazing people to work with. Very fast and professional
                    partner.
                  </p>
                </div>

                <footer class="mt-3">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <img
                        class="size-8 rounded-full"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </div>
                    <div class="grow ms-4">
                      <div class="font-semibold text-gray-800 dark:text-gray-200">
                        Josh Grazioso
                      </div>
                      <div class="text-xs text-gray-500">
                        Director Payments & Risk | Airbnb
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div>
              <form>
                <div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  <div class="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                    <div class="text-center">
                      <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                        Start your free trial
                      </h1>
                      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?
                        <a
                          class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Sign in here
                        </a>
                      </p>
                    </div>

                    <div class="mt-5">
                      <button
                        type="button"
                        class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          class="w-4 h-auto"
                          width="46"
                          height="47"
                          viewBox="0 0 46 47"
                          fill="none"
                        >
                          <path
                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                            fill="#4285F4"
                          ></path>
                          <path
                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                            fill="#34A853"
                          ></path>
                          <path
                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                            fill="#FBBC05"
                          ></path>
                          <path
                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                            fill="#EB4335"
                          ></path>
                        </svg>
                        Sign up with Google
                      </button>

                      <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">
                        Or
                      </div>

                      <div class="grid grid-cols-2 gap-4">
                        <div>
                          <div class="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-first-name"
                              class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2"
                              placeholder="John"
                            />
                            <label
                              for="hs-hero-signup-form-floating-input-first-name"
                              class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500
                            peer-[:not(:placeholder-shown)]:text-xs
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              First name
                            </label>
                          </div>
                        </div>

                        <div>
                          <div class="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-last-name"
                              class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2"
                              placeholder="Doe"
                            />
                            <label
                              for="hs-hero-signup-form-floating-input-last-name"
                              class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500
                            peer-[:not(:placeholder-shown)]:text-xs
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Last name
                            </label>
                          </div>
                        </div>

                        <div>
                          <div class="relative">
                            <input
                              type="email"
                              id="hs-hero-signup-form-floating-input-email"
                              class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2"
                              placeholder="you@email.com"
                            />
                            <label
                              for="hs-hero-signup-form-floating-input-email"
                              class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500
                            peer-[:not(:placeholder-shown)]:text-xs
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Email
                            </label>
                          </div>
                        </div>

                        <div>
                          <div class="relative">
                            <input
                              type="text"
                              id="hs-hero-signup-form-floating-input-company-name"
                              class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2"
                              placeholder="Preline"
                            />
                            <label
                              for="hs-hero-signup-form-floating-input-company-name"
                              class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500
                            peer-[:not(:placeholder-shown)]:text-xs
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Company name
                            </label>
                          </div>
                        </div>

                        <div class="relative col-span-full">
                          <div class="relative">
                            <input
                              type="password"
                              id="hs-hero-signup-form-floating-input-new-password"
                              class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2"
                              placeholder="********"
                            />
                            <label
                              for="hs-hero-signup-form-floating-input-new-password"
                              class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500
                            peer-[:not(:placeholder-shown)]:text-xs
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              New password
                            </label>
                          </div>

                          <div
                            id="hs-strong-password-popover"
                            class="hidden absolute z-10 w-full bg-blue-50 rounded-lg p-4 dark:bg-blue-950"
                          >
                            <div
                              id="hs-strong-password-in-popover"
                              data-hs-strong-password='{
                              "target": "#hs-hero-signup-form-floating-input-new-password",
                              "hints": "#hs-strong-password-popover",
                              "stripClasses": "hs-strong-password:opacity-100 hs-strong-password-accepted:bg-teal-500 h-2 flex-auto rounded-full bg-blue-500 opacity-50 mx-1",
                              "mode": "popover"
                            }'
                              class="flex mt-2 -mx-1"
                            ></div>

                            <h4 class="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
                              Your password must contain:
                            </h4>

                            <ul class="space-y-1 text-sm text-gray-500">
                              <li
                                data-hs-strong-password-hints-rule-text="min-length"
                                class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span class="hidden" data-check>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Minimum number of characters is 6.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="lowercase"
                                class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span class="hidden" data-check>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain lowercase.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="uppercase"
                                class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span class="hidden" data-check>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain uppercase.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="numbers"
                                class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span class="hidden" data-check>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain numbers.
                              </li>
                              <li
                                data-hs-strong-password-hints-rule-text="special-characters"
                                class="hs-strong-password-active:text-teal-500 flex items-center gap-x-2"
                              >
                                <span class="hidden" data-check>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                </span>
                                <span data-uncheck>
                                  <svg
                                    class="flex-shrink-0 size-4"
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
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                  </svg>
                                </span>
                                Should contain special characters.
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="col-span-full">
                          <div class="relative">
                            <input
                              type="password"
                              id="hs-hero-signup-form-floating-input-current-password"
                              class="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
                          focus:pt-6
                          focus:pb-2
                          [&:not(:placeholder-shown)]:pt-6
                          [&:not(:placeholder-shown)]:pb-2
                          autofill:pt-6
                          autofill:pb-2"
                              placeholder="********"
                            />
                            <label
                              for="hs-hero-signup-form-floating-input-current-password"
                              class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent dark:text-white peer-disabled:opacity-50 peer-disabled:pointer-events-none
                            peer-focus:text-xs
                            peer-focus:-translate-y-1.5
                            peer-focus:text-gray-500
                            peer-[:not(:placeholder-shown)]:text-xs
                            peer-[:not(:placeholder-shown)]:-translate-y-1.5
                            peer-[:not(:placeholder-shown)]:text-gray-500"
                            >
                              Current password
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="mt-5 flex items-center">
                        <div class="flex">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          />
                        </div>
                        <div class="ms-3">
                          <label
                            for="remember-me"
                            class="text-sm dark:text-white"
                          >
                            I accept the{" "}
                            <a
                              class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>

                      <div class="mt-5">
                        <button
                          type="submit"
                          class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          Get started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default DonateForm;
