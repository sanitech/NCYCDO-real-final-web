import React from "react";
import heroImage from "../../assets/images/hero.jpg";
import { Link } from "react-router-dom";
import "./hero.css";
function HeroWid() {
  return (
    <div className="hero-section" onLoad={() => window.scrollTo(0, 0)}>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 md:py-16 flex lg:items-center justify-center bg-transparent">
        <div className="grid md:grid-cols-2 gap-4 py-14  md:gap-8 xl:gap-20 ">
          <div>
            <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Empowering Youth, Building{" "}
              <span className="text-amber-500">Strong Communities</span>
            </h1>
            <p className="mt-3 text-lg text-white dark:text-gray-400">
              Welcome to New Chapter Youth and Community Development
              Organization a dedicated force for positive change in Ethiopia.
            </p>

            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <Link
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-black hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                to="/whoweare"
              >
                Learn More
                <svg
                  className="flex-shrink-0 size-4"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWid;
