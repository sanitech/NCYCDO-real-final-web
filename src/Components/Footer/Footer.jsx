import React from "react";
import FollowUs from "./FollowUs";
import Logo from "../../assets/images/iconLogo.png";
import {
  DeveloperSocial,
  FooterLinksData,
  FooterSupportData,
  socialMedia,
} from "../../Data/Data";
import LinksFooter from "./LinksFooter";

function Footer() {
  return (
    <footer class="p-9 mt-16 grid md:grid-cols-1 gap-12 xl:col-span-4 xl:mt-0 dark:bg-gray-900 ">
      <div class="md:grid md:grid-cols-7 md:gap-8">
        <div class="sm:col-span-2">
          <a href="#" class="inline-flex items-center">
            <img
              src={Logo}
              alt="logo"
              class="h-20"
            />
             <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-400">
              New Chapter Youth and Community Development
            </span>
          </a>
          <div class="mt-2 lg:max-w-xl">
            <p class="text-sm text-gray-800 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              felis mi, faucibus dignissim lorem id, imperdiet interdum mauris.
              Vestibulum ultrices sed libero non porta. Vivamus malesuada urna
              eu nibh malesuada,  
          
            </p>
          </div>
        </div>
        <div class="mt-10 md:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Links</h3>
          <ul role="list" class="mt-6 space-y-4">
            {FooterLinksData.map((linksData, key) => {
              return (
                <LinksFooter
                  title={linksData.name}
                  link={linksData.link}
                  key={key}
                />
              );
            })}
          </ul>
        </div>
        <div class="mt-10 md:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">Support</h3>
          <ul role="list" class="mt-6 space-y-4">
            {FooterSupportData.map((linksData, key) => {
              return (
                <LinksFooter
                  title={linksData.name}
                  link={linksData.link}
                  key={key}
                />
              );
            })}
           
          </ul>
        </div>
        <div class="mt-10 md:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
            Follow Us
          </h3>
          <ul role="list" class="mt-6 space-y-4">
            {socialMedia.map((socialMedias) => (
              <FollowUs
                key={socialMedias.name}
                icon={socialMedias.icon}
                name={socialMedias.name}
                link={socialMedias.link}
              />
            ))}
          </ul>
        </div>
        <div class="mt-10 md:mt-0 sm:col-span-2">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
            Subscribe to our Newsletter
          </h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            We will inform you about promotions and exclusive offers as well as
            new teaching materials.
          </p>
          <form class="mt-6 sm:flex sm:max-w-md">
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email-address"
              autocomplete="email"
              required=""
              class="w-full min-w-0 border appearance-none rounded-md border-gray-300 bg-white px-2  text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
              placeholder="E-Mail Address"
            />
            <div class="mt-4 rounded-md sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <div class="flex justify-end">
                <button
                  class="inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 dark:disabled:bg-slate-700 appearance-none text-black bg-amber-500 hover:bg-amber-600 focus:ring-amber-600 focus:ring-offset-white w-full"
                  type="submit"
                >
                  <div class="relative">
                    <div class="">Subscribe</div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-gray-600 dark:text-gray-400">
          © 2024 Develope by{" "}
          <a href="" target="_blank" className="font-semibold">
            {" "}
            IX IT & Marketing Solution
          </a>
          . All rights reserved.
        </p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          {DeveloperSocial.map((socialMedias) => (
            <li>
              <a
                href="#"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400 "
              >
                <img
                  className="py-px shadow w-5 h-5"
                  src={socialMedias.icon}
                  alt={socialMedias.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
