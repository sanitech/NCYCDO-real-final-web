import React, { useRef, useState } from "react";
import FollowUs from "./FollowUs";
import Logo from "../../assets/images/iconLogo.png";
import {
  DeveloperSocial,
  FooterLinksData,
  FooterSupportData,
  socialMedia,
} from "../../Data/Data";
import LinksFooter from "./LinksFooter";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthProvider";
function Footer() {
  const [form, setForm] = useState({ email: "" })
  const [error, setError] = useState({})
  const emailRef = useRef(null)
  const [resMessage, setResMessage] = useState()

 const {SubscribeHandler}=useAuth()

  function showToast(id) {
    const toast = document.getElementById('successToast');
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 5000); // 5 seconds
  }
  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <footer class="p-9 mt-16 grid md:grid-cols-1 gap-12 xl:col-span-4 shadow-md xl:mt-0 dark:bg-gray-900 ">
      <div class="md:grid md:grid-cols-9 md:gap-8">
        <div class="sm:col-span-3">
          <Link to="/whoweare" class="inline-flex  justify-center items-center">
            <img src={Logo} alt="logo" class="h-20" />
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 dark:text-gray-400">
              New Chapter Youth and Community Development
            </span>
          </Link>
          <div class="mt-2 lg:max-w-xl">
            <p class="text-sm text-gray-800 dark:text-gray-400">
              New Chapter Youth and Community Development Organization is
              currently operating in Adama, Ethiopia, and in the future, Oromia,
              Tigray, Afar, Amara, Somalia; It has designed projects with
              Dredawa, Beneshangul/Gumz, Addis Ababa, Gambella regions and is
              planning to work in collaboration with local and international
              humanitarian organizations and the Ethiopian government.
            </p>
          </div>
        </div>
        <div class="mt-10 md:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
            Links
          </h3>
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
        {/* <div class="mt-10 md:mt-0">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
            Support
          </h3>
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
        </div> */}
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

        <div className="flex flex-col col-span-2">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
            Contact us
          </h3>
          <div className="mt-6 space-y-4">


            <div className="flex mt-1 gap-1 items-center font-sm text-sm">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="h-4 w-4 bi bi-geo-alt"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path> <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path> </g></svg>
              <span> Adama / Ethiopia </span>
            </div>
            <a href="mailto:chapternew85gmail.com" target="_blank" className="flex mt-1 gap-1 items-center font-sm text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 bi bi-envelope-at" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
              </svg>
              <span> Chapternew85@gmail.com</span>
            </a>
            <a href="tel:+251986603360" target="_blank" className="flex mt-1 gap-1 items-center font-sm text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 bi bi-telephone" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              <span> +251986603360 / +251907608054</span>
            </a>
          </div>
        </div>

        <div class="mt-10 md:mt-0 sm:col-span-2">
          <h3 class="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-400">
            Subscribe to our Newsletter
          </h3>
          <p class="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            Stay connected with our latest updates, stories, and initiatives by
            subscribing to our newsletter.
          </p>
          <form class="mt-6 sm:flex sm:max-w-md" onSubmit={SubscribeHandler}>
            <label for="email-address" class="sr-only">
              Email address
            </label>
            <div className="flex flex-row flex-wrap gap-1">

              <input
                type="email"
                name="email"
                id="email-address"
                autocomplete="email"
                required=""
                ref={emailRef}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                class="w-full min-w-0 border appearance-none rounded-md border-gray-300 bg-white px-2  text-base leading-7 text-gray-900 placeholder-gray-400 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="E-Mail Address"
              />

            </div>
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
        {
          resMessage && (
            <div id="toast-top-right successToast" class="fixed  items-center w-full max-w-xs p-4 space-x-4 bg-amber-500 text-gray-800 hidden divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
              <div class="inline-flex gap-1 items-center justify-center flex-shrink-0 w-8 h-8 text-amber-500 bg-gray-900 rounded-lg ">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                <span class="sr-only">Check icon</span>
              </div>
              <div class="ms-3 mr-2 text-sm font-normal">{resMessage.message}.</div>
             
            </div>
          )
        }

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
      {
        error.email && (


          <div id="toast-top-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 bg-red-50 text-red-800 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
                </svg>
                <span class="sr-only">Warning icon</span>
              </div>
              <span class="sr-only">Check icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">{error.email}.</div>

          </div>
        )
      }



    </footer>
  );
}

export default Footer;
