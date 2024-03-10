"use client";

import React from "react";
import { Dropdown } from "flowbite-react";

function Test() {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="container mx-auto px-4 py-2 flex justify-between items-center">
          <a href="#" class="text-white text-xl font-bold">
            My Brand
          </a>
          <ul class="hidden md:flex space-x-4">
            <li>
              <a href="#" class="text-white px-3 py-2 hover:text-gray-400">
                Home
              </a>
            </li>
            <li class="relative">
              <a href="#" class="text-white px-3 py-2 hover:text-gray-400">
                Dropdown <i class="fas fa-caret-down ml-1"></i>
              </a>
              <ul class="absolute hidden top-full left-0 bg-gray-800 w-40 py-1 rounded shadow-md">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-white hover:text-gray-400"
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-white hover:text-gray-400"
                  >
                    Option 2
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" class="text-white px-3 py-2 hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" class="text-white px-3 py-2 hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
          <button class="md:hidden focus:outline-none text-white hover:text-gray-400">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H20M4 12H20M4 18H11z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Test;
