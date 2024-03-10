import React from "react";

function DonateForm() {
  return (
    <div>
      <div class="relative bg-gradient-to-bl from-blue-100 via-transparent dark:from-blue-950 dark:via-transparent">
        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              {/* <p class="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-amber-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Preline: A vision for 2024
              </p> */}

              <div class="mt-4 md:mb-12 max-w-2xl">
                <h1 class="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
                  Transform Lives: Your Donation, Their Hope
                </h1>
                <p class="text-gray-600  dark:text-gray-400">
                  Thank you for considering a donation to support NCYCDO's
                  mission. Your contribution will make a meaningful impact on
                  the lives of those we serve and help us continue our vital
                  work.
                </p>
              </div>
            </div>

            <div>
              <form>
                <div class="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  <div class="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                    <div class="text-start">
                      <h1 class="block text-2xl font-bold text-gray-800 dark:text-white">
                        Our payment details
                      </h1>
                      <p class="mt-2 text-2x-l text-gray-600 dark:text-gray-400">
                        We're excited to bring you more ways to support our
                        mission. Stay tuned as we unveil additional donation
                        methods. In the meantime, feel free to reach out to us
                        through the contact information below. Your support is
                        greatly appreciated!
                      </p>
                    </div>

                    {/* <div class="mt-5">
                      <img
                        className="h-56 w-56 mx-auto"
                        src="https://www.qr-code-generator.com/wp-content/themes/qr/images/banners/frames/websiteQRCode_noFrame.png"
                        alt=""
                      />

                      <div class="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-700 dark:after:border-gray-700">
                        Or
                      </div>

                      <div class="grid grid-cols-2 gap-4"></div>
                    </div> */}
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
