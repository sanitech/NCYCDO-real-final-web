import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function ContactApp() {
  const [formInput, setFormInput] = useState({});
  const [response, setResponse] = useState([]);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("/api/v1/contact", formInput)
      .then((res) => {
        setResponse(res.data, { status: "success" });
        console.log(response);
        setFormInput({});
      })
      .catch((err) => {
        console.log(err);
        setResponse(err.response.data, { status: "error" });
      });
  };
  return (
    <div>
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto" id="partner">
        <div class="max-w-xl mx-auto">
          <div class="text-center">
            <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Contact us
            </h1>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              We'd love to talk about how we could work together.
            </p>
          </div>
        </div>

        <div class="mt-12 max-w-lg mx-auto">
          <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
            <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Fill in the form
            </h2>

            <form
              onSubmit={onSubmitHandler}
              method="post"
              encType="multipart/form-data"
            >
              <div class="grid gap-4 lg:gap-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      for="hs-firstname-contacts-1"
                      class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      onChange={inputHandler}
                      id="hs-firstname-contacts-1"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label
                      for="hs-lastname-contacts-1"
                      class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      onChange={inputHandler}
                      name="lastName"
                      id="hs-lastname-contacts-1"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      for="hs-email-contacts-1"
                      class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={inputHandler}
                      name="email"
                      id="hs-email-contacts-1"
                      autocomplete="email"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>

                  <div>
                    <label
                      for="hs-phone-number-1"
                      class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      onChange={inputHandler}
                      name="phone"
                      id="hs-phone-number-1"
                      class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="hs-about-contacts-1"
                    class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    onChange={inputHandler}
                    name="message"
                    rows="4"
                    class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  ></textarea>
                </div>
              </div>

              {response.message &&
                (!response.status ? (
                  <div
                    class="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
                    role="alert"
                  >
                    {response.message}
                  </div>
                ) : (
                  <div
                    class="p-4 mb-4  mt-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
                    role="alert"
                  >
                    {response.message}
                  </div>
                ))}

              <div class="mt-6 grid">
                <button
                  type="submit"
                  class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-black hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Send inquiry
                </button>
              </div>

              <div class="mt-3 text-center">
                <p class="text-sm text-gray-500">
                  We'll get back to you as soon as possible.
                </p>
              </div>
            </form>
          </div>
        </div>

        <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
          <Link
            class="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            to="/getinvolve"
          >
            <svg
              class="size-9 text-gray-800 mx-auto dark:text-gray-200"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15"
                  stroke="#000000"
                  stroke-width="1.512"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Work With us
              </h3>
              <p class="mt-1 text-gray-500">
                We're here to collaborate and support, whether you have
                inquiries or ideas.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-amber-500 dark:text-amber-500">
                Discover Opportunities
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

          <a
            class="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#faq"
          >
            <svg
              class="size-9 text-gray-800 mx-auto dark:text-gray-200"
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
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                FAQ
              </h3>
              <p class="mt-1 text-gray-500">
                Search our FAQ for answers to anything you might ask.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-amber-500 dark:text-amber-500">
                Visit FAQ
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
          </a>

          <a
            class="group flex flex-col h-full text-center rounded-lg hover:bg-gray-100 p-4 sm:p-6 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <svg
              class="size-9 text-gray-800 mx-auto dark:text-gray-200"
              fill="#000000"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              stroke-width="0.0005"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="Solid">
                  {" "}
                  <path d="M46.79248,24.23a4.05389,4.05389,0,0,0-5.689-.14l-7.69872,6.84a5.25608,5.25608,0,0,1,.58993,2.43,5.39055,5.39055,0,0,1-3.4794,5.02l-6.46895,2.43a1.00694,1.00694,0,0,1-1.27975-.59.98322.98322,0,0,1,.57986-1.28l6.46895-2.43A3.38021,3.38021,0,0,0,31.995,33.36,3.45753,3.45753,0,0,0,28.63555,30H9.99866A1.99982,1.99982,0,0,0,7.999,28H3.99966A1.99982,1.99982,0,0,0,2,30V46a1.99986,1.99986,0,0,0,1.99966,2H7.999a1.99986,1.99986,0,0,0,1.99967-2H14.048l1.24979.51A19.61328,19.61328,0,0,0,37.924,40.87l9.10846-11.01A4.20182,4.20182,0,0,0,46.79248,24.23ZM12.99816,44H9.99866V32h2.9995ZM30.41809,2a8.59142,8.59142,0,0,0-5.42194,1.9082A8.59147,8.59147,0,0,0,19.5742,2a8.68822,8.68822,0,0,0-8.66651,8.68945c0,9.14258,13.03,16.85059,13.58463,17.17481a1.00289,1.00289,0,0,0,1.00765,0C26.05456,27.54,39.08461,19.832,39.08461,10.68945A8.68822,8.68822,0,0,0,30.41809,2Zm-1.772,18.6571a.98319.98319,0,0,1-.65022.2229.99554.99554,0,0,1-.65047-1.7423c3.70153-3.1709,5.74025-6.17188,5.74025-8.44825A2.68158,2.68158,0,0,0,30.41809,8a1,1,0,0,1,0-2,4.68337,4.68337,0,0,1,4.66719,4.68945C35.08528,14.3681,31.584,18.13953,28.64605,20.6571Z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <div class="mt-5">
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Volunteer
              </h3>
              <p class="mt-1 text-gray-500">
                Ready to make a difference? We're here to guide and inspire your
                volunteer journey.
              </p>
              <p class="mt-5 inline-flex items-center gap-x-1 font-medium text-amber-500 dark:text-amber-600">
                Start Volunteering
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactApp;
