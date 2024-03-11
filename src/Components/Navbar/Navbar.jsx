import React from "react";
import "./Navbar.css";
import "./Drop.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import fb from "../../assets/images/Social/fb.png";
import insta from "../../assets/images/Social/insta.png";
import linkedin from "../../assets/images/Social/linkedin.png";
import partner from "../../assets/images/partner.png";
import SocialIcon from "./SocialIcon";
import { socialMedia } from "../../Data/Data";
import women from "../../assets/images/navAssets/women.png";
import gcHat from "../../assets/images/navAssets/gc.png";
import wash from "../../assets/images/navAssets/wash.png";
import gender from "../../assets/images/navAssets/gender.png";
import digital from "../../assets/images/navAssets/digtal.png";
import empower from "../../assets/images/navAssets/empower.png";
import climate from "../../assets/images/navAssets/climate.png";
import news from "../../assets/images/navAssets/news.png";
import research from "../../assets/images/navAssets/research.png";
import camera from "../../assets/images/navAssets/camera.png";
import donate from "../../assets/images/navAssets/donate.png";
import work from "../../assets/images/navAssets/work.png";

function Navbar() {
  const toggleMenu = () => {

    document.getElementById('menu').classList.toggle('open-menu')
  }
  return (
    <div>
      <header class="flex flex-wrap md:justify-start md:flex-nowrap sticky top-0 left-0 right-0 z-50 w-full bg-white dark:bg-gray-900 text-sm py-3 md:py-0 ">

        <nav className="navbar max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8"
          aria-label="Global">
          {/* <div class="relative md:flex md:items-center md:justify-between"> */}

          <div className="left-nav">
            <div className="logo">
              <img src={Logo} className="h-20" alt="logo" />
            </div>
            <div className="nav-links dark:bg-gray-900 bg-white">
              <hr className="nav-divider"></hr>
              <ul className="nav-list" id="menu">
                <Link to="" className="flex items-center w-full text-amber-500 hover:text-amber-600 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  Home
                </Link>
                <div class="dropdown">
                  <button class="dropdown-btn flex items-center w-full text-gray-500 hover:text-amber-500 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
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

                  {/* <div class="dropdown-content"> */}
                  {/* <Link className="dropdown-item">About us</Link>
                <Link className="dropdown-item">Advisory counsel</Link>
                <Link className="dropdown-item">Our Partner</Link>
                <Link className="dropdown-item">National advocacy</Link> */}
                  <div class="dropdown-content transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-20 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                    <div class="md:grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                      <div class="flex flex-col  mx-1 md:mx-0">
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
                              Our Mission and Values
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
                              Explore the collective wisdom and guidance of our
                              esteemed Advisory Council members.
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
                              Explore the collaborative efforts and meaningful
                              partnerships that contribute to our mission.
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
                              Explore our impactful advocacy initiatives aimed at
                              driving positive change on a national scale.
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div class="flex flex-col col-span-1 sm:col-span-2 pt-4 md:pt-0 mx-1 md:mx-0">
                        <span class="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">
                          Our stories
                        </span>

                        <Link
                          class="group mt-2 p-3 flex gap-x-5 items-center rounded-xl hover:bg-gray-100 dark:hover:bg-slate-500/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600"
                          to="whoweare"
                        >
                          <img
                            class="size-32 rounded-lg"
                            src={Logo}
                            alt="Image Description"
                          />
                          <div class="grow">
                            <p class="text-sm text-gray-800 dark:text-slate-400">
                              We are a dedicated team of individuals, advocates,
                              and change makers committed to creating positive
                              change in the Ethiopia.
                            </p>
                            <p class="mt-3 inline-flex items-center gap-x-1 text-sm text-black decoration-2 hover:underline font-semibold text-base dark:text-blue-400 dark:hover:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-slate-600">
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
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropdown-btn flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Program Area
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
                  <div class="dropdown-content program-area transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-fit hidden z-20 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                    <div class="md:grid lg:grid-cols-3 md:grid-cols-2  gap-4">
                      <div class="flex flex-col mx-1 md:mx-0">
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Young Girls and Women Empowerment"
                        >
                          <img className="h-8 w-8" src={women} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Young Girls and Women Empowerment
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Together, we're creating a world where every girl and woman has the opportunity to reach their full potential.
                            </p>
                          </div>
                        </Link>
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Humanitarian Resource and Emerging issue"
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
                              Together, let's be a source of support and resilience in the face of evolving challenges.
                            </p>
                          </div>
                        </Link>
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Peace Building and Advocacy"
                        >
                          <img className="h-7 w-7" src={partner} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Peace Building and Advocacy
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Discover our efforts in promoting peace and driving advocacy initiatives.
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div class="flex flex-col mx-1 md:mx-0">
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Education"
                        >
                          <img className="h-7 w-7" src={gcHat} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Education
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Delve into initiatives that aim to provide access, promote learning, and shape a brighter future.
                            </p>
                          </div>
                        </Link>
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Wash"
                        >
                          <img className="h-7 w-7" src={wash} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Wash
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Join us in creating a healthier and more sustainable future through WASH interventions
                            </p>
                          </div>
                        </Link>

                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Environmental protection and climate change"
                        >
                          <img className="h-7 w-7" src={climate} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Environmental protection and climate change{" "}
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Discover our commitment to environmental stewardship and addressing climate change challenges.
                            </p>
                          </div>
                        </Link>
                      </div>

                      <div class="flex flex-col mx-1 md:mx-0">
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Gender Equality and Disability Inclusion"
                        >
                          <img className="h-7 w-7" src={gender} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Gender Equality and Disability Inclusion{" "}
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Join us in creating a world where diversity is celebrated, and everyone has equal opportunities.
                            </p>
                          </div>
                        </Link>
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Digital Literacy"
                        >
                          <img className="h-7 w-7" src={digital} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Digital Literacy
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Empower individuals through our Digital Literacy programs.
                            </p>
                          </div>
                        </Link>
                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/programAreas/Youth Empowerment"
                        >
                          <img className="h-7 w-7" src={empower} alt="" />

                          <div class="grow">
                            <p class="font-semibold text-base text-gray-800 dark:text-gray-200">
                              Youth Empowerment
                            </p>
                            <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">
                              Discover our commitment to nurturing the potential of young individuals

                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dropdown">
                  <button class="dropdown-btn flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Resource
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
                  <div class="dropdown-content resource-dropdown transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-fit hidden z-10 top-full end-56 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
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
                              Latest Articles
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
                <div class="dropdown">
                  <button class="dropdown-btn flex items-center w-full text-gray-500 hover:text-gray-400 font-semibold text-base dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">              Get Involve

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
                  <div class="dropdown-content resource-dropdown transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-fit hidden z-20 top-full end-52 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
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
                              Learn more about the experience of joining our team.
                            </p>
                          </div>
                        </Link>

                        <Link
                          class="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 dark:hover:bg-gray-900 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          to="/partnerWithUs"
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
                              Embark on a collaborative journey. Discover the benefits and opportunities of partnering with us
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
                              Learn about the impact of your donation and how you can contribute to our cause.
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
                              Explore the power of volunteering and the positive impact you can make in our community.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="donate-container from-left">
                  <div className="social-media">
                    {socialMedia.map((socialMedia) => {
                      return (
                        <SocialIcon
                          link={socialMedia.link}
                          icon={socialMedia.icon}
                          alt={`NCYCDO ${socialMedia.name} account`}
                        />
                      );
                    })}
                  </div>
                  <div className="flex gap-3">


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
              </ul>
            </div>
          </div>
          <div className="donate-container from-right">
            <div className="social-media">
              {socialMedia.map((socialMedia) => {
                return (
                  <SocialIcon
                    link={socialMedia.link}
                    icon={socialMedia.icon}
                    alt={`NCYCDO ${socialMedia.name} account`}
                  />
                );
              })}
            </div>
            <div className="flex gap-3">


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
          <i onClick={toggleMenu} className="toggle-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list size-7" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
          </i>
        </nav >
      </header>
    </div>
  );
}

export default Navbar;
