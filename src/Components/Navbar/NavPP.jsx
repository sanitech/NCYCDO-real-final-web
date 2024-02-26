import React from "react";
import Logo from "../../assets/images/logo.png";
import partner from "../../assets/images/partner.png";
import { Link } from "react-router-dom";
import fb from "../../assets/images/Social/fb.png";
import insta from "../../assets/images/Social/insta.png";
import linkedin from "../../assets/images/Social/linkedin.png";
import women from "../../assets/images/navAssets/women.png"
import gcHat from "../../assets/images/navAssets/gc.png"
import wash from "../../assets/images/navAssets/wash.png"
import gender from "../../assets/images/navAssets/gender.png"
import digital from "../../assets/images/navAssets/digtal.png"
import empower from "../../assets/images/navAssets/empower.png"
import climate from "../../assets/images/navAssets/climate.png"
import news from "../../assets/images/navAssets/news.png"
import research from "../../assets/images/navAssets/research.png"
import camera from "../../assets/images/navAssets/camera.png"
import donate from "../../assets/images/navAssets/donate.png"
import work from "../../assets/images/navAssets/work.png"
import SocialIcon from "./SocialIcon";
import { socialMedia } from "../../Data/Data";
function NavPP() {
  return (
    <div>
      <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-3 md:py-0 dark:bg-gray-800">
        <nav
          class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global"
        >
          <div class="relative md:flex md:items-center md:justify-between">
            <div class="flex items-center justify-between">
              <Link
                class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/"
                aria-label="Brand"
              >
                <img src={Logo} className="h-20" alt="NCYCDO Logo" />
              </Link>
              <div class="md:hidden">
                <button
                  type="button"
                  class="hs-collapse-toggle flex justify-center items-center size-9 text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                </button>
              </div>
            </div>

            <div
              id="navbar-collapse-with-animation"
              class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
                <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
                  <Link
                    class="font-semibold text-base text-amber-500 py-3 md:py-6 dark:text-amber-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    to="/"
                    aria-current="page"
                  >
                    Home
                  </Link>

                  {/* who we are */}
                  <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button
                      type="button"
                      class="flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Who we are
                      <svg
                        class="flex-shrink-0 ms-2 size-4"
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
                    </button>

                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-20 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/whoweare"
                          >
                            <svg
                              class="flex-shrink-0 size-5 mt-1"
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
                              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                            </svg>
                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                About us
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Explore advice and explanations for all of
                                Preline's features.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/whoweare#advisorycounsellor"
                          >
                            <svg
                              class="flex-shrink-0 size-5 mt-1"
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Advisory counsel
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Discover the huge range of tools that Preline
                                integrates with.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/whoweare#partner"
                          >
                            <img className="h-7 w-7" src={partner} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Our partners
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>
                        </div>

                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/whoweare#"
                          >
                            <svg
                              class="flex-shrink-0 size-5 mt-1"
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
                              <circle cx="12" cy="12" r="10" />
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                              <path d="M12 17h.01" />
                            </svg>
                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                National advocacy
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Learn how to install, set up, and use Preline.
                              </p>
                            </div>
                          </Link>
                        </div>

                        <div class="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                          <span class="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">
                            Customer stories
                          </span>

                          <Link
                            class="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-slate-500/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600"
                            to="whoweare"
                          >
                            <img
                              class="size-32 rounded-lg"
                              src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                              alt="Image Description"
                            />
                            <div class="grow">
                              <p class="text-sm text-gray-800 dark:text-slate-400">
                                Preline Projects has proved to be most efficient
                                cloud based project tracking and bug tracking
                                tool.
                              </p>
                              <p class="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-semibold text-base dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
                                Learn more
                                <svg
                                  class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
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
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Program Area */}
                  <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button
                      type="button"
                      class="flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Program Area
                      <svg
                        class="flex-shrink-0 ms-2 size-4"
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
                    </button>

                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-fit hidden z-20 top-full start-44 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div class="md:grid md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/programAreas/program"
                          >
                            <img className="h-8 w-8" src={women} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Young Girls and Women Empowerment
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Explore advice and explanations for all of
                                Preline's features.
                              </p>
                            </div>
                          </Link>
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                          >
                            <svg
                              class="flex-shrink-0 size-5 mt-1"
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Humanitarian Resource and Emerging issue{" "}
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Discover the huge range of tools that Preline
                                integrates with.
                              </p>
                            </div>
                          </Link>
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                          >
                            <img className="h-7 w-7" src={partner} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Peace Building and Advocacy
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                          >
                            <img className="h-7 w-7" src={gcHat} alt="" />


                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Education
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="#"
                          >
                            <img className="h-7 w-7" src={wash} alt="" />


                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Wash
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="#"
                          >
                            <img className="h-7 w-7" src={climate} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Environmental protection and climate change{" "}
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Learn how to install, set up, and use Preline.
                              </p>
                            </div>
                          </Link>
                        </div>

                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="#"
                          >
                            <img className="h-7 w-7" src={gender} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Gender Equality and Disability Inclusion{" "}
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Learn how to install, set up, and use Preline.
                              </p>
                            </div>
                          </Link>
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="#"
                          >
                            <img className="h-7 w-7" src={digital} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Digital Literacy
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Learn how to install, set up, and use Preline.
                              </p>
                            </div>
                          </Link>
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            href="#"
                          >
                            <img className="h-7 w-7" src={empower} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Youth Empowerment
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Learn how to install, set up, and use Preline.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* resource */}
                  <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button
                      type="button"
                      class="flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Resource
                      <svg
                        class="flex-shrink-0 ms-2 size-4"
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
                    </button>

                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-fit hidden z-10 top-full end-56 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div class="md:grid md:grid-cols-1 lg:grid-cols-1 gap-4">
                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/blog"
                          >
                            <img className="h-7 w-7" src={news} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                News
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Explore advice and explanations for all of
                                Preline's features.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/research"
                          >
                            <img className="h-7 w-7" src={research} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Researches
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Discover the huge range of tools that Preline
                                integrates with.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/gallery#"
                          >
                            <img className="h-7 w-7" src={camera} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Photo Gallery
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* get involve */}
                  <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button
                      type="button"
                      class="flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Get Involve
                      <svg
                        class="flex-shrink-0 ms-2 size-4"
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
                    </button>

                    <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-fit hidden z-20 top-full end-52 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                      <div class="md:grid md:grid-cols-1 lg:grid-cols-1 gap-4">
                        <div class="flex flex-col mx-1 md:mx-0">
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/getinvolve"
                          >
                          <img className="h-7 w-7" src={work} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Work With us
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Explore advice and explanations for all of
                                Preline's features.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/getinvolve#"
                          >
                            <svg
                              class="flex-shrink-0 size-5 mt-1"
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
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Partner with us
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Discover the huge range of tools that Preline
                                integrates with.
                              </p>
                            </div>
                          </Link>

                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/donate"
                          >
                            <img className="h-7 w-7" src={donate} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Donate
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>
                          <Link
                            class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            to="/volunteer"
                          >
                            <img className="h-7 w-7" src={partner} alt="" />

                            <div class="grow">
                              <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                                Volunteer
                              </p>
                              <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                                Build custom integrations with our first-class
                                API.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="donate-container">
                    <div className="social-media">
                      {
                        socialMedia.map((socialMedia) => {
                          return (
                            <SocialIcon
                              link={socialMedia.link}
                              icon={socialMedia.icon}
                              alt={`NCYCDO ${socialMedia.name} account`}
                            />
                          )
                        })
                      }

                    
                    </div>
                  </div>

                  <div class="pt-3 md:pt-0">
                    <Link
                      class="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-amber-500 bg-transparent text-amber-500 hover:bg-amber-500 hover:text-white disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      to="/volunteer"
                    >
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      Volunteer
                    </Link>
                  </div>
                  <div class="pt-3 md:pt-0">
                    <Link
                      class="py-2.5 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-transparent hover:text-amber-500 hover:border-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      to="/donate"
                    >
                      <svg
                        fill="#000000"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zM15.403 12a3 3 0 0 0 3-3c0-2.708-3-6-3-6s-3 3.271-3 6a3 3 0 0 0 3 3z"></path>
                        </g>
                      </svg>
                      Donate
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavPP;
