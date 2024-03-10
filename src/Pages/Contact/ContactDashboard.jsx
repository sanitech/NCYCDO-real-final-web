import React, { useEffect, useState } from "react";
import AdminPannel from "../../Components/Dashbord/DAshboard";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { format } from "timeago.js";
function ContactDashboard() {
  const [contact, setContact] = useState([]);

  const navigate = useNavigate();
  const fetchContacts = async () => {
    await axios
      .get("/api/v1/contact")
      .then((res) => {
        console.log("contact", res.data.status);
        setContact(res.data);
      })
      .catch((err) => {
        console.log(err.response.status);
        // if(err.response.status===401){
        //   navigate("/super/admin/");
        // };
      });
  };

  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <div>
      <AdminPannel />
      <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {contact.map((contact) => {
              return (
                <a
                  className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  <div className="p-4 md:p-5">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="group-hover:text-amber-500 font-semibold capitalize text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                          {contact.fullName}{""} <span className="font-light text-sm">{format(contact.sent_at, 'en_US')}</span>
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center justify-start gap-2"><svg className="size-3" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.5850000000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0.5 4.5L7.5 8.5L14.5 4.5M1.5 1.5H13.5C14.0523 1.5 14.5 1.94772 14.5 2.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H1.5C0.947716 13.5 0.5 13.0523 0.5 12.5V2.5C0.5 1.94772 0.947715 1.5 1.5 1.5Z" stroke="#000000"></path> </g></svg>{contact.email}</p>
                        <p className="text-sm text-gray-500 flex items-center justify-start gap-2"><svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z" stroke="#000000" stroke-width="1.056" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>{contact.phone}</p>
                        <p className="text-sm font-medium text-gray-500  flex justify-start gap-2 line-clamp-3"><svg className="size-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7" stroke="#1C274C" stroke-width="1.08" stroke-linecap="round"></path> <path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#1C274C" stroke-width="1.08" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>{contact.message}</p>
                      </div>
                      <div className="ps-3">
                        <svg
                          className="flex-shrink-0 size-5"
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
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDashboard;
