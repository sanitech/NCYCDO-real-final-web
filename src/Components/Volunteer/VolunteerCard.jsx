import React, { useEffect, useRef, useState } from "react";
import { MemberCategory, eduBackground, programArea } from "../../Data/Data";
import axios from "axios";
import { ethioCity } from "../../Data/city";
import VolunteerType from "./VolunteerType";
import cityFile from "../../assets/file/city.xlsx"
import regionFile from "../../assets/file/regions.xlsx"
import * as XLSX from 'xlsx';
function VolunteerCard() {
  const [formData, setFormData] = useState({});
  const [errorHandler, setErrorHandler] = useState(false);
  const [errorHandlers, setErrorHandlers] = useState("");
  const [successHandler, setSuccessHandler] = useState(false);
  const [successHandlers, setSuccessHandlers] = useState("");
  const [membershipStatus, setMembershipStatus] = useState("individual");
  const [region, setRegions] = useState([])
  const [city, setCity] = useState([])
  const formRef= useRef(null)

  const handleInput = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    formData["full_name"] = formData?.first_name + " " + formData?.middle_name + " " + formData?.last_name;
    formData["mother_name"] =
      formData?.mother_first_name + " " + formData?.mother_middle_name + " " + formData?.last_name;
    formData["address"] =
      formData?.state + "/ " + formData?.city + "/ " + formData?.post_code;

    formData['v_type'] = membershipStatus
    delete formData.first_name;
    delete formData.last_name;
    delete formData.middle_name;
    delete formData.mother_first_name;
    delete formData.mother_middle_name;
    delete formData.mother_last_name;
    delete formData.state;
    delete formData.post_code;
    delete formData.city;
    console.log('data',formData);

    await axios
      .post("/api/v1/volunteer", formData)
      .then((res) => {
        formRef.current.reset()
        console.log(res.data);
        setSuccessHandler(true);
        setErrorHandler(false);
        setSuccessHandlers(res.data.message);

      })
      .catch((err) => {
        console.log(err);
        setErrorHandler(true);
        setSuccessHandler(false);
        setErrorHandlers(err.response.data.message);
      });
  };

  const readRegionExcelFile = () => {
    const regionURL = regionFile;
    const cityURL = cityFile;

    const req = new XMLHttpRequest();
    req.open('GET', regionURL, true);
    req.responseType = 'arraybuffer';

    req.onload = () => {
      const data = new Uint8Array(req.response);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      // this.setState({ data: jsonData });
      setRegions(jsonData)
    };

    req.send();
  }
  const readCityExcelFile = () => {
    const cityURL = cityFile;

    const req = new XMLHttpRequest();
    req.open('GET', cityURL, true);
    req.responseType = 'arraybuffer';

    req.onload = () => {
      const data = new Uint8Array(req.response);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      // this.setState({ data: jsonData });
      setCity(jsonData)
    };

    req.send();
  }


  const filterByRegion = (event) => {
    const value = event.target.value
    setCity([])
    let filteredData=[]
     filteredData = city.filter(entry => entry[2] === value);
    console.log(filteredData);
    setCity(filteredData);
  }
  useEffect(() => {
    readRegionExcelFile()
    readCityExcelFile()
    console.log(region)
    console.log("city", city)
  }, [])
  return (
    <div>
      <div class="max-w-4xl px-4 py-8 sm:px-6 lg:px-5 lg:py-14 mx-auto">
        <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
          <div class="mb-8">
            <h2 class="text-2xl sm:text-lg font-bold text-gray-800 dark:text-gray-200  text-start">
              Volunteer Member Applicant Form
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Manage your name, password and account settings.
            </p>
          </div>

          <VolunteerType membershipStatus={setMembershipStatus} />

          <form
            onSubmit={handleSubmit}
            method="post "
            encType="multipart/form-data"
            ref={formRef}
          >
            <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">

              {
                membershipStatus === 'individual' && (
                  <>
                    <div class="sm:col-span-3">
                      <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                        Your photo
                      </label>
                    </div>

                    <div class="sm:col-span-9">
                      <div class="flex items-center gap-5">
                        <img
                          class="inline-block size-16 rounded-full ring-2 ring-white dark:ring-gray-800"
                          src="https://th.bing.com/th/id/OIP.NgdOdZNXGITnEGVae98GRAHaHa?rs=1&pid=ImgDetMain"
                          alt="Image Description"
                        />
                        <div class="flex gap-x-2">
                          <div>
                            <button
                              type="button"
                              class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="17 8 12 3 7 8" />
                                <line x1="12" x2="12" y1="3" y2="15" />
                              </svg>
                              Upload photo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )
              }


              <div class="sm:col-span-3">
                <label
                  for="af-account-full-name"
                  class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  {membershipStatus === 'individual' ? 'First name' : 'Organization name'}
                </label>
              </div>

              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input
                    id="af-account-full-name"
                    type="text"
                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder={membershipStatus === 'individual' ? "First name" : "Organization name"}
                    name={membershipStatus === 'individual' ? "first_name" : "org_name"}
                    onChange={handleInput}
                    required
                  />
                  {
                    membershipStatus === 'individual' && (
                      <>


                        <input
                          type="text"
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="Middle name"
                          name="middle_name"
                          onChange={handleInput}
                          required

                        />
                        <input
                          type="text"
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="Last name"
                          name="last_name"
                          onChange={handleInput}
                          required
                        />
                      </>
                    )
                  }
                </div>
              </div>
              {
                membershipStatus === 'individual' && (
                  <>
                    <div class="sm:col-span-3">
                      <label
                        for="af-account-full-name"
                        class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                      >
                        Mother name
                      </label>

                    </div>

                    <div class="sm:col-span-9">
                      <div class="sm:flex">
                        <input
                          id="af-account-full-name"
                          type="text"
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="First name"
                          name="mother_first_name"
                          onChange={handleInput}
                        />
                        <input
                          type="text"
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="Middle name"
                          name="mother_middle_name"
                          onChange={handleInput}
                        />
                        <input
                          type="text"
                          class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                          placeholder="Last name"
                          name="mother_last_name"
                          onChange={handleInput}
                        />
                      </div>
                    </div>



                    <div class="sm:col-span-3">
                      <label
                        for="af-account-gender-checkbox"
                        class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                      >
                        Sex
                      </label>
                    </div>

                    <div class="sm:col-span-9">
                      <div class="sm:flex">
                        <div
                          for="af-account-gender-checkbox-other"
                          class="flex w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        >
                          <input
                            type="text"
                            name="gender"
                            maxLength={1}
                            class="shrink-0 py-2 px-3 mt-0.5 border-gray-300 w-full text-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            id="af-account-gender-checkbox-other"
                            onChange={handleInput}
                            placeholder="Fill in"
                          />
                          {/* <label
                      for="af-account-gender-checkbox-other"
                      class="text-sm text-gray-500 ms-3 dark:text-gray-400"
                    >
                      Other
                    </label> */}
                        </div>
                      </div>
                    </div>

                  </>
                )
              }
              {/* <div class="sm:col-span-3">
                <label
                  for="af-account-email"
                  class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Email
                </label>
              </div>

              <div class="sm:col-span-9">
                <input
                  id="af-account-email"
                  type="email"
                  class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="maria@site.com"
                  name="email"
                  onChange={handleInput}
                />
              </div> */}

              <div class="sm:col-span-3">
                <label
                  for="af-account-gender-checkbox"
                  class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Email & postal-code
                </label>
              </div>

              <div class="sm:col-span-9">
                <div class="mt-2">
                  <div class="grid sm:flex gap-3">
                    <input
                      id="af-account-email"
                      type="email"
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="maria@site.com"
                      name="email"
                      onChange={handleInput}
                    />
                    <input
                      type="text"
                      class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Post Code"
                      name={"post_code"}
                      onChange={handleInput}
                    />


                  </div>
                </div>
              </div>

              <div class="sm:col-span-3">
                <div class="inline-block">
                  <label
                    for="af-account-phone"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Phone
                  </label>

                </div>
              </div>

              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input
                    id="af-account-phone"
                    type="text"
                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="+x(xxx)xxx-xx-xx"
                    name="phone"
                    onChange={handleInput}
                  />

                </div>
              </div>
              <div class="sm:col-span-3">
                <div class="inline-block">
                  <label
                    for="af-account-phone"
                    class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                  >
                    Phone
                  </label>
                  <span class="text-sm text-gray-400 dark:text-gray-600">
                    (Work)
                  </span>
                </div>
              </div>

              <div class="sm:col-span-9">
                <div class="sm:flex">
                  <input
                    id="af-account-phone"
                    type="text"
                    class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="+x(xxx)xxx-xx-xx"
                    name="phone_work"
                    onChange={handleInput}
                  />

                </div>
              </div>

              <div class="sm:col-span-3">
                <label
                  for="af-account-gender-checkbox"
                  class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  ADDRESS TOWN/CITY
                </label>
              </div>

              <div class="sm:col-span-9">
                <div class="mt-2">
                  <div class="grid sm:flex gap-3">
                    <select
                      name="state"
                      onChange={(e) => { handleInput(e); filterByRegion(e) }}
                      class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    >

                      {
                        region.map((region, index) => {
                          return (
                            <option value={region.state_code}>{region[1]}</option>
                          )
                        })
                      }

                    </select>
                    {
                      city.length > 0 ? (
                        <select
                          name="city"
                          onChange={handleInput}
                          class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        >
                          <input type="text" name="city" id="" />
                          {
                            city.map((item, index) => {
                              return (
                                <option value={item}>{item[1]}</option>

                              )
                            })
                          }

                        </select>
                      ) :
                        (
                          <input
                            id="af-account-phone"
                            type="text"
                            class="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                            placeholder="City"
                            name="city"
                            onChange={handleInput}
                          />
                        )
                    }






                  </div>
                </div>
              </div>


              {
                membershipStatus == "individual" && (
                  <>

                    <div class="sm:col-span-3">
                      <div class="inline-block">
                        <label
                          for="af-account-phone"
                          class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                        >
                          Educational Background
                        </label>
                      </div>
                    </div>

                    <div class="sm:col-span-9">
                      <select
                        id="af-submit-app-category"
                        class="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        name="edu_background"
                        onChange={handleInput}
                      >
                        <option selected>Select a level</option>
                        {
                          eduBackground.map(edu => {
                            return <option value={edu}>{edu}</option>
                          })
                        }

                      </select>
                    </div>

                    <div class="sm:col-span-3">
                      <div class="inline-block">
                        <label
                          for="af-account-phone"
                          class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                        >
                          Working Experience
                        </label>
                      </div>
                    </div>

                    <div class="sm:col-span-9">
                      <input
                        type="text"
                        name="work_experience"
                        class="shrink-0 py-2 px-3 mt-0.5 border-gray-300 w-full text-gray-900 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        id="af-account-gender-checkbox-other"
                        onChange={handleInput}
                        placeholder="1 year"
                      />
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="af-account-bio"
                        class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                      >
                        BIO
                      </label>
                      <span class="text-sm text-gray-400 dark:text-gray-600">
                        (Optional)
                      </span>
                    </div>

                    <div class="sm:col-span-9">
                      <textarea
                        id="af-account-bio"
                        class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        rows="6"
                        placeholder="Type your message..."
                        name="bio"
                        onChange={handleInput}
                      ></textarea>
                    </div>

                    <div class="sm:col-span-3">
                      <label
                        for="af-account-bio"
                        class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                      >
                        Select program Areas
                      </label>
                    </div>

                    <div class="sm:col-span-9">
                      <div class="flex flex-col">
                        {programArea.map((program) => {
                          return (
                            <label class="inline-flex items-center mt-3">
                              <input
                                type="checkbox"
                                class="form-checkbox h-5 w-5 text-amber-500"
                                value={program.title}
                                name="programArea"
                                onChange={handleInput}
                              />
                              <span class="ml-2 text-gray-700 dark:text-gray-400">
                                {program.title}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                  </>
                )
              }

              {/* <div class="sm:col-span-3">
                <label
                  for="af-account-bio"
                  class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                >
                  Membership & Category
                </label>
              </div>

              <div class="sm:col-span-9">
                <div class="max-w-lg mx-auto">
                  <fieldset class="mb-5">
                    <legend class="sr-only">Countries</legend>

                    {MemberCategory.map((category) => {
                      return (
                        <div class="flex items-center mb-4">
                          <input
                            id={category.title.replace(/ /g, "")}
                            type="radio"
                            name="membership"
                            onChange={handleInput}
                            value={category.title}
                            class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-amber-300 "
                            aria-labelledby="country-option-1"
                            aria-describedby="country-option-1"
                            checked=""
                          />
                          <label
                            for={category.title.replace(/ /g, "")}
                            class="text-sm font-normal text-gray-900 ml-2 block dark:text-gray-400"
                          >
                            {category.title}
                          </label>
                        </div>
                      );
                    })}
                  </fieldset>
                </div>
              </div> */}
            </div>
            {errorHandler ? (
              <div
                class="p-4 mb-4 mt-4 text-sm text-red-800 rounded-lg bg-red-100 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                {errorHandlers}
              </div>
            ) : null}
            {successHandler ? (
              <div
                class="p-4 mb-4  mt-4 text-sm text-green-800 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                {successHandlers}
              </div>
            ) : null}
            <div class="mt-5 flex justify-end gap-x-2">
              <button
                type="reset"
                onClick={() => setFormData(null)}
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-black hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Apply now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VolunteerCard;
