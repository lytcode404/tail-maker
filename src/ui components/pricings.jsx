import Link from "next/link";
import { useEffect, useState } from "react";

export const Pricing1 = () => {
  return (
    <>
      <div className="bg-white dark::bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="xl:items-center xl:-mx-8 xl:flex">
            <div className="flex flex-col items-center xl:items-start xl:mx-8">
              <h1 className="text-3xl font-medium text-gray-800 capitalize lg:text-4xl dark::text-white">
                Our Pricing Plan
              </h1>
              <div className="mt-4">
                <div className="inline-block w-40 h-1 rounded-full bg-primary-500"></div>
                <div className="inline-block w-3 h-1 mx-1 rounded-full bg-primary-500"></div>
                <div className="inline-block w-1 h-1 rounded-full bg-primary-500"></div>
              </div>
              <p className="mt-4 font-medium text-gray-500 dark::text-gray-300">
                You can get All Access by selecting your plan!
              </p>
              <Link
                className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize dark::text-blue-400 hover:underline hover:text-blue-600 dark::hover:text-blue-500"
                href="#"
              >
                <span className="mx-1">read more</span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 mx-1 rtl:-scale-x-100"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="flex-1 xl:mx-8">
              <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark::border-gray-700">
                  <div className="p-6">
                    <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl dark::text-white">
                      Essential
                    </h1>
                    <p className="mt-4 text-gray-500 dark::text-gray-300">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nostrum quam voluptatibus
                    </p>
                    <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl dark::text-gray-300">
                      <span>$3.00 </span>
                      <span className="text-base font-medium">/Month</span>
                    </h2>
                    <p className="mt-1 text-gray-500 dark::text-gray-300">
                      Yearly payment
                    </p>
                    <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-primary-500 hover:bg-primary-700">
                      Start Now
                    </button>
                  </div>
                  <hr className="border-gray-200 dark::border-gray-700" />
                  <div className="p-6">
                    <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark::text-white">
                      What’s included:
                    </h1>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          All limited links
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Own analytics platform
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Chat support
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Optimize hashtags
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-red-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Mobile app
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-red-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Unlimited users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark::border-gray-700">
                  <div className="p-6">
                    <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-3xl dark::text-white">
                      Premium
                    </h1>
                    <p className="mt-4 text-gray-500 dark::text-gray-300">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nostrum quam voluptatibus
                    </p>
                    <h2 className="mt-4 text-2xl font-medium text-gray-700 sm:text-4xl dark::text-gray-300">
                      <span>$50.00 </span>
                      <span className="text-base font-medium">/life time</span>
                    </h2>
                    <p className="mt-1 text-gray-500 dark::text-gray-300">
                      One time payment
                    </p>
                    <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform rounded-md focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 bg-primary-500 hover:bg-primary-700">
                      Start Now
                    </button>
                  </div>
                  <hr className="border-gray-200 dark::border-gray-700" />
                  <div className="p-6">
                    <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark::text-white">
                      What’s included:
                    </h1>
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          All limited links
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Own analytics platform
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Chat support
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Optimize hashtags
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Mobile app
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-fit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-blue-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="mx-4 text-gray-700 dark::text-gray-300">
                          Unlimited users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Pricing2 = () => {
  return (
    <>
      <div className="py-16 text-gray-700 2xl:py-24 dark::bg-gray-800 dark::text-gray-200">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4 font-bold tracking-tight text-3xl lg:text-4xl">
              Pricing
            </h1>
            <p className="px-5 xl:mx-12">
              The placeholder text, beginning with the line “Lorem ipsum dolor
              sit amet, consectetur adipiscing elit”
            </p>
          </div>
          <div className="grid gap-x-6 gap-y-12 mb-6 mt-10 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-x-8">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col border gap-4 p-4 pt-6 rounded-global">
                <h3 className="text-gray-800 text-2xl font-semibold text-center">
                  Free
                </h3>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl text-gray-800 font-bold">$0</span>
                  <span className="text-gray-500">/ month</span>
                </div>
                <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                  <span> 14-day money backguarantee </span>
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <Link
                  className="block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global md:text-base"
                  href="#"
                >
                  Select Free
                </Link>
              </div>
              <div className="flex-1 bg-gray-100 space-y-3 px-4 py-6 rounded-global">
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">1.000 MB file storage</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">
                    2.000 MB bandwidth per month
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">200 tasks per month</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">Comunity support</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col border relative gap-4 p-4 pt-6 rounded-global border-primary">
                <div className="flex justify-center absolute -top-3 inset-x-0">
                  <span className="h-6 flex justify-center items-center text-white text-xs font-semibold tracking-widest uppercase rounded-full px-3 py-1 bg-primary">
                    most popular
                  </span>
                </div>
                <h3 className="text-gray-800 text-2xl font-semibold text-center">
                  Team
                </h3>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl text-gray-800 font-bold">$19</span>
                  <span className="text-gray-500">/ month</span>
                </div>
                <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                  <span> 14-day money backguarantee </span>
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <Link
                  className="block hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global bg-primary md:text-base"
                  href="#"
                >
                  Select Team
                </Link>
              </div>
              <div className="flex-1 bg-gray-100 space-y-3 px-4 py-6 rounded-global">
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">Unlimited file storage</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">
                    10 GB bandwidth per month
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">10.000 tasks per month</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">Email support</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">100 Webhooks</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col border gap-4 p-4 pt-6 rounded-global">
                <h3 className="text-gray-800 text-2xl font-semibold text-center">
                  Enterprise
                </h3>
                <div className="flex justify-center items-end gap-1">
                  <span className="text-4xl text-gray-800 font-bold">$49</span>
                  <span className="text-gray-500">/ month</span>
                </div>
                <div className="flex justify-center items-center text-gray-500 text-sm gap-1 mb-4">
                  <span> 14-day money backguarantee </span>
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                <Link
                  className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-indigo-300 text-white text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global md:text-base"
                  href="#"
                >
                  Select Enterprise
                </Link>
              </div>
              <div className="flex-1 bg-gray-100 space-y-3 px-4 py-6 rounded-global">
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">Unlimited file storage</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">
                    Unlimited bandwidth per month
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">
                    1.000.000 tasks per month
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">Email and phone support</span>
                </div>
                <div className="flex gap-2">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 shrink-0 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600">Unlimited Webhooks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Pricing3 = () => {
  return (
    <>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 dark::text-slate-100 md:mx-auto lg:text-4xl">
            Our Pricing
          </h2>
          <p className="text-base md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 sm:mx-auto">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 border rounded-global shadow-sm hover:shadow dark::border-slate-600 sm:items-center">
            <div className="text-center">
              <div className="text-lg font-semibold">
                <p>Start</p>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">
                  <p className="text-slate-900 dark::text-slate-100">Free</p>
                </div>
              </div>
              <ul className="list-inside flex flex-col gap-y-3 mt-5">
                <li>Single User</li>
                <li>1 Project</li>
                <li>5 Pages</li>
                <li>Multiple Export</li>
              </ul>
            </div>
            <div>
              <Link
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none lg:rounded-global"
                href="/"
              >
                Start for free
              </Link>
              <p className="max-w-xs mt-6 text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                No Credit card required. Sign up and start using.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 border rounded-global shadow-sm hover:shadow border-primary sm:items-center">
            <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
              <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-primary">
                <p>Most Popular</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold">
                <p>Pro</p>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">
                  <p className="text-slate-900 dark::text-slate-100">$19</p>
                </div>
                <div>
                  <p>/ mo</p>
                </div>
              </div>
              <ul className="list-inside flex flex-col gap-y-3 mt-5">
                <li>Single User</li>
                <li>Unlimited Projects </li>
                <li>Unlimited pages/project</li>
                <li>Multiple Export</li>
              </ul>
            </div>
            <div>
              <Link
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-primary-500 focus:shadow-outline focus:outline-none lg:rounded-global"
                href="/"
              >
                Buy Pro
              </Link>
              <p className="max-w-xs mt-6 text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                You can cancel your subscription anytime.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 border rounded-global shadow-sm hover:shadow dark::border-slate-600 sm:items-center">
            <div className="text-center">
              <div className="text-lg font-semibold">
                <p>Teams</p>
              </div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">
                  <p className="text-slate-900 dark::text-slate-100">$15</p>
                </div>
                <div>
                  <p>/ user</p>
                </div>
              </div>
              <ul className="list-inside flex flex-col gap-y-3 mt-5">
                <li>Dark Mode</li>
                <li>Unlimited Projects</li>
                <li>Team Support</li>
                <li>Prebuilt templates</li>
              </ul>
            </div>
            <div>
              <Link
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none lg:rounded-global"
                href="/"
              >
                Create Team
              </Link>
              <p className="max-w-xs mt-6 text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Need more features? Reach us support@mail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Pricing4 = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 font-bold text-center mb-4 text-2xl md:mb-6 lg:text-3xl">
              Choose a Bundle
            </h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
            <div className="w-full bg-gray-800 p-6 rounded-global sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
              <div className="mb-4">
                <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">
                  Basic Bundle
                </h3>
                <p className="text-gray-300">Ebook</p>
              </div>
              <div className="space-x-2 mb-4">
                <span className="text-gray-100 text-4xl font-bold">$29</span>
                <span className="text-gray-300 text-2xl line-through">$49</span>
              </div>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Ebook</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Multiple examples</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Basic support</span>
                </li>
              </ul>
              <Link
                className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global md:text-base"
                href="#"
              >
                Get the Basic Bundle
              </Link>
            </div>
            <div className="w-full bg-gradient-to-tr shadow-xl p-6 to-primary-500 from-primary-300 rounded-global sm:w-1/2 sm:p-8">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                    Pro Bundle
                  </h3>
                  <p className="text-indigo-100">Ebook + Video course</p>
                </div>
                <span className="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                  Best value
                </span>
              </div>
              <div className="space-x-2 mb-4">
                <span className="text-white text-4xl font-bold">$49</span>
                <span className="text-indigo-100 text-2xl line-through">
                  $89
                </span>
              </div>
              <ul className="text-indigo-100 space-y-2 mb-6">
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Ebook</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Video course</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Multiple examples</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Work sheets</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>Premium support</span>
                </li>
              </ul>
              <Link
                className="block hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global bg-white text-primary md:text-base"
                href="#"
              >
                Get the Pro Bundle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Pricing5 = () => {
  return (
    <>
      <section>
        <div className="px-4 2xl:px-0 xl:max-w-7xl xl:mx-auto">
          <div className="grid grid-cols-3 mx-auto mt-12 leading-6 sm:max-w-xs md:items-center md:mt-16 md:max-w-3xl lg:mt-20 lg:max-w-4xl lg:max-w-screen-lg">
            <div className="col-span-3 gap-4 items-center p-6 mb-6 text-center shadow-xs rounded-global border dark::border-slate-700 md:mb-0 md:col-span-1 md:rounded-none md:rounded-l-global">
              <span className="block mx-auto mb-4 text-primary-500 align-middle w-fit text-2xl">
                <div
                  style={{
                    fontSize: "inherit",
                    color: "inherit",
                    padding: "2px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 528 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z"></path>
                  </svg>
                </div>
              </span>
              <h3 className="m-0 text-xl font-semibold leading-7 lg:text-2xl lg:leading-8">
                Basic
              </h3>
              <span className="block mb-4">Try for one week for FREE</span>
              <span className="text-2xl font-bold leading-8 text-primary-500 lg:text-3xl lg:leading-9">
                $119/m
              </span>
              <div className="px-6 pt-6 -mx-6 mt-10 border-r-0 border-b-0 border-l-0 border-t border-gray-400 border-solid box-border dark::border-slate-700 lg:px-8">
                <ul className="p-0 m-0 text-lg leading-7">
                  <li>20 hours</li>
                  <li>Email support</li>
                  <li>Phone support</li>
                  <li>Work from home</li>
                  <li>12 months</li>
                </ul>
                <Link
                  className="inline-block py-3 px-5 mt-8 text-sm font-semibold leading-5 text-white bg-primary-500 rounded-global cursor-pointer hover:bg-primary-700"
                  href="#"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="relative z-20 col-span-3 gap-4 items-center p-6 mb-6 text-center rounded-global border shadow-lg dark::border-slate-700 md:mb-0 md:-mt-6 md:pb-24 md:col-span-1 lg:px-8 lg:pt-8">
              <span className="block mx-auto mb-4 text-primary-500 align-middle w-fit text-2xl">
                <div
                  style={{
                    fontSize: "inherit",
                    color: "inherit",
                    padding: "2px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"></path>
                  </svg>
                </div>
              </span>
              <h3 className="m-0 text-xl font-semibold leading-7 lg:text-2xl lg:leading-8">
                Pro
              </h3>
              <span className="block mb-4">Already convinced, go with PRO</span>
              <span className="text-2xl font-bold leading-8 text-primary-500 lg:text-3xl lg:leading-9">
                $149/m
              </span>
              <div className="px-6 pt-6 -mx-6 mt-10 border-r-0 border-b-0 border-l-0 border-t border-gray-400 border-solid box-border dark::border-slate-700 lg:-mx-8 lg:px-8">
                <ul className="p-0 m-0 text-lg leading-7">
                  <li>20 hours</li>
                  <li>Email support</li>
                  <li>Phone support</li>
                  <li>Work from home</li>
                  <li>12 months</li>
                </ul>
                <Link
                  className="inline-block py-3 px-5 mt-8 text-sm font-semibold leading-5 text-white bg-primary-500 rounded-global cursor-pointer hover:bg-primary-700"
                  href="#"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="col-span-3 gap-4 items-center p-6 mb-6 text-center shadow-xs rounded-global border dark::border-slate-700 md:mb-0 md:col-span-1 md:rounded-none md:rounded-r-global lg:p-8">
              <span className="block mx-auto mb-4 text-primary-500 align-middle w-fit text-2xl">
                <div
                  style={{
                    fontSize: "inherit",
                    color: "inherit",
                    padding: "2px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
                  </svg>
                </div>
              </span>
              <h3 className="m-0 text-xl font-semibold leading-7 lg:text-2xl lg:leading-8">
                Advanced
              </h3>
              <span className="block mb-4">Ideal for teams</span>
              <span className="text-2xl font-bold leading-8 text-primary-500 lg:text-3xl lg:leading-9">
                $189/m
              </span>
              <div className="px-6 pt-6 -mx-6 mt-10 border-r-0 border-b-0 border-l-0 border-t border-gray-400 border-solid box-border dark::border-slate-700 lg:-mx-8 lg:px-8">
                <ul className="p-0 m-0 text-lg leading-7">
                  <li>20 hours</li>
                  <li>Email support</li>
                  <li>Phone support</li>
                  <li>Work from home</li>
                  <li>12 months</li>
                </ul>
                <Link
                  className="inline-block py-3 px-5 mt-8 text-sm font-semibold leading-5 text-white bg-primary-500 rounded-global cursor-pointer hover:bg-primary-700"
                  href="#"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Pricing6 = () => {
  return (
    <>
      <section className="py-8 leading-7 sm:py-12 md:py-16 lg:py-24">
        <div className="box-border px-4 mx-auto border-solid sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 className="box-border m-0 font-black leading-tight tracking-tight text-black border-solid dark::text-white text-3xl lg:text-4xl">
              Pricing Plans
            </h2>
            <p className="box-border mt-2 text-xl text-gray-900 border-solid tracking-tight dark::text-white">
              Thousands of enterprises and freelancers use our apps to grow
              their businesses. Join us.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4 leading-7 border-0 border-gray-200 dark::border-primary-500 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-3 xl:max-w-5xl xl:mx-auto">
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-global dark::border-gray-700 sm:p-6 md:my-8 md:p-8 lg:-mr-3">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 dark::text-white sm:text-3xl md:text-4xl">
                Starter
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid text-primary-500">
                  $5
                </p>
                <p className="box-border m-0 border-solid dark::text-white">
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left border-0">
                Ideal for Startups and Small Companies
              </p>
              <ul className="flex-1 p-0 mt-4 ml-5 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Automated Reporting</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Faster Processing</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Customizations</p>
                </li>
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center no-underline bg-transparent border rounded-global cursor-pointer focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white border-primary-500 text-primary-500 hover:bg-blue-700 hover:border-blue-700 hover:text-white sm:text-base md:text-lg">
                <p>Select Plan</p>
              </button>
            </div>
            <div className="relative z-20 flex flex-col items-center max-w-md p-4 mx-auto my-0 bg-white border-4 border-solid rounded-global border-primary-500 dark::bg-black dark::text-white sm:p-6 md:px-8 md:py-16">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 dark::text-white sm:text-3xl md:text-4xl">
                Basic
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid text-primary-500">
                  $15
                </p>
                <p className="box-border m-0 border-solid dark::text-white">
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200 dark::text-white">
                Ideal for medium-size businesses to larger businesses
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Everything in Starter</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">100 Builds</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Progress Reports</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Premium Support</p>
                </li>
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline border rounded-global cursor-pointer focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white bg-primary-500 hover:border-primary-500 hover:text-white hover:bg-secondary-500 dark::hover:bg-primary-700 dark::border-primary-500 sm:text-base md:text-lg">
                <p>Select Plan</p>
              </button>
            </div>
            <div className="relative z-10 flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-global dark::border-gray-700 sm:p-6 md:my-8 md:p-8 lg:-ml-3">
              <h3 className="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 dark::text-white sm:text-3xl md:text-4xl">
                Plus
              </h3>
              <div className="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                <p className="box-border m-0 text-6xl font-semibold leading-none border-solid text-primary-500">
                  $25
                </p>
                <p className="box-border m-0 border-solid dark::text-white">
                  / month
                </p>
              </div>
              <p className="mt-6 mb-5 text-base leading-normal text-left border-0">
                Ideal for larger and enterprise companies
              </p>
              <ul className="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Everything in Basic</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Unlimited Builds</p>
                </li>
                <li className="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Advanced Analytics</p>
                </li>
                <li className="inline-flex items-center w-full mb-2 ml-5 font-semibold text-left border-solid">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </span>
                  <p className="dark::text-gray-400">Company Evaluations</p>
                </li>
              </ul>
              <button className="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center no-underline bg-transparent border rounded-global cursor-pointer focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white border-primary-500 text-primary-500 hover:bg-blue-700 hover:border-blue-700 hover:text-white sm:text-base md:text-lg">
                <p>Select Plan</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Pricing7 = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Choose your plan
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-700 dark::text-gray-200">
            Get Started for FREE
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mx-auto mt-8 text-center md:max-w-5xl sm:grid-cols-3 md:gap-8 sm:mt-16">
          <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md dark::border-gray-700">
            <div className="absolute hidden top-3 right-3">
              <span className="w-fit">
                <svg
                  className="w-6 h-6 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="px-4 py-5 lg:p-8">
              <p className="text-lg font-medium text-gray-700 dark::text-gray-200">
                1 Week
              </p>
              <p className="mt-4 text-6xl font-bold">$1</p>
              <ul className="flex flex-col mt-8 space-y-1">
                <li className="text-base font-medium text-gray-900 lg:text-xl">
                  Less than $1 a day
                </li>
                <li className="text-base font-medium text-gray-700 dark::text-gray-200 lg:text-xl">
                  Billed every week
                </li>
                <li className="text-base font-medium text-gray-700 dark::text-gray-200 lg:text-xl">
                  Cancel anytime
                </li>
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden bg-transparent border-2 border-gray-100 rounded-md dark::border-gray-700">
            <div className="absolute hidden top-3 right-3">
              <span className="w-fit">
                <svg
                  className="w-6 h-6 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="px-4 py-5 lg:p-8">
              <p className="text-lg font-medium text-gray-700 dark::text-gray-200">
                1 Month
              </p>
              <p className="mt-4 text-6xl font-bold">$19</p>
              <ul className="flex flex-col mt-8 space-y-1">
                <li className="text-base font-medium text-gray-900 lg:text-xl">
                  Less than $5 a week
                </li>
                <li className="text-base font-medium text-gray-700 dark::text-gray-200 lg:text-xl">
                  Billed every month
                </li>
                <li className="text-base font-medium text-gray-700 dark::text-gray-200 lg:text-xl">
                  Cancel anytime
                </li>
              </ul>
            </div>
          </div>
          <div className="relative overflow-hidden bg-white border-2 border-gray-900 rounded-md shadow dark::border-gray-600 dark::bg-gray-800">
            <div className="absolute top-3 right-3">
              <span className="w-fit">
                <svg
                  className="w-6 h-6 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="px-4 py-5 lg:p-8">
              <p className="text-lg font-medium text-gray-700 dark::text-gray-200">
                1 Year
              </p>
              <p className="mt-4 text-6xl font-bold">$99</p>
              <ul className="flex flex-col mt-8 space-y-1">
                <li className="text-base font-medium text-gray-900 dark::text-gray-100 lg:text-xl">
                  Less than $2 a week
                </li>
                <li className="text-base font-medium text-gray-700 dark::text-gray-200 lg:text-xl">
                  Billed every year
                </li>
                <li className="text-base font-medium text-gray-700 dark::text-gray-200 lg:text-xl">
                  Cancel anytime
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center md:mt-16">
          <Link
            className="inline-flex items-center justify-center px-10 py-4 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r focus:opacity-80 hover:opacity-80 from-primary-500 to-secondary-500"
            href="#"
          >
            Join Now
          </Link>
          <p className="mt-4 text-sm text-gray-700 dark::text-gray-200">
            No Credit Card Required
          </p>
        </div>
      </div>
    </section>
  );
};

export const Pricing8 = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold dark::text-gray-200">
          Solo, agency or team? We’ve got you covered.
        </h2>
      </div>
      <div className="relative xl:w-10/12 xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark::bg-slate-900 dark::border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark::text-gray-200">
                Professional
              </h3>
              <p className="text-sm text-gray-500">
                Everything a small team needs.
              </p>
              <div className="mt-5">
                <span className="text-6xl font-bold text-gray-800 dark::text-gray-200">
                  $18
                </span>
                <span className="text-lg font-bold text-gray-800 dark::text-gray-200">
                  .00
                </span>
                <span className="ml-3 text-gray-500">USD / monthly</span>
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Up to 10 people
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Collect data
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Code extensibility
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></path>
                        <path
                          d="M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Custom reports
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></path>
                        <path
                          d="M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Product support
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-gray-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></path>
                        <path
                          d="M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Activity reporting
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm text-gray-500">Cancel anytime.</p>
                  <p className="text-sm text-gray-500">No card required.</p>
                </div>
                <div className="flex justify-end">
                  <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800">
                    Start free trial
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark::bg-slate-900 dark::border-gray-700 dark::shadow-gray-900/[.2]">
              <h3 className="text-xl font-bold text-gray-800 dark::text-gray-200">
                Teams
              </h3>
              <p className="text-sm text-gray-500">For growing businesses.</p>
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark::bg-gray-900">
                Most popular
              </span>
              <div className="mt-5">
                <span className="text-6xl font-bold text-gray-800 dark::text-gray-200">
                  $36
                </span>
                <span className="text-lg font-bold text-gray-800 dark::text-gray-200">
                  .99
                </span>
                <span className="ml-3 text-gray-500">USD / monthly</span>
              </div>
              <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Up to 10 people
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Collect data
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Code extensibility
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Custom reports
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Product support
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <span className="w-fit">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-blue-500"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="18"
                          height="18"
                          rx="9"
                          fill="currentColor"
                          fill-opacity="0.1"
                        ></rect>
                        <path
                          d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-gray-800 dark::text-gray-200">
                      Activity reporting
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm text-gray-500">Cancel anytime.</p>
                  <p className="text-sm text-gray-500">No card required.</p>
                </div>
                <div className="flex justify-end">
                  <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark::focus:ring-offset-gray-800">
                    Start free trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16">
          <span className="w-fit">
            <svg
              className="w-16 h-auto text-orange-500"
              width="121"
              height="135"
              viewBox="0 0 121 135"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                stroke="currentColor"
                stroke-width="10"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16">
          <span className="w-fit">
            <svg
              className="w-56 h-auto text-cyan-500"
              width="347"
              height="188"
              viewBox="0 0 347 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="mt-7 text-center">
        <p className="text-xs text-gray-400">Prices in USD. Taxes may apply.</p>
      </div>
    </div>
  );
};

export const Pricing9 = () => {
  return (
    <div className="relative">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark::text-white">
            Compare plans
          </h2>
        </div>
        <div className="hidden lg:block sticky top-0 left-0 py-2 bg-white/60 backdrop-blur-md dark::bg-slate-900/60">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2">
              <span className="font-semibold text-lg text-gray-800 dark::text-gray-200">
                Features
              </span>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark::text-gray-200">
                Free
              </span>
              <p className="mt-2 text-sm text-gray-500">Free forever</p>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark::text-gray-200">
                Startup
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $39 per month billed annually
              </p>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark::text-gray-200">
                Team
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $89 per month billed annually
              </p>
            </div>
            <div className="col-span-1">
              <span className="font-semibold text-lg text-gray-800 dark::text-gray-200">
                Enterprise
              </span>
              <p className="mt-2 text-sm text-gray-500">
                $149 per month billed annually
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 lg:space-y-0">
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark::text-gray-200">
                General
              </span>
            </li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Number of seats
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  1
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  Up to 3
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  Up to 10
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  Unlimited
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Storage
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  15 GB
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  1 TB
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  15 TB
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="text-sm text-gray-800 dark::text-gray-200">
                  Unlimited
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Email sharing
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Any time, anywhere access
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-6 space-y-4 lg:space-y-0">
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark::text-gray-200">
                Financial data
              </span>
            </li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Open/High/Low/Close
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Price-volume difference indicator
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-6 space-y-4 lg:space-y-0">
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark::text-gray-200">
                On-chain data
              </span>
            </li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Network growth
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Average token age consumed
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Exchange flow
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Total ERC20 exchange funds flow
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Transaction volume
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Total circulation (beta)
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Velocity of tokens (beta)
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                ETH gas used
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-6 space-y-4 lg:space-y-0">
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 lg:py-3">
              <span className="text-lg font-semibold text-gray-800 dark::text-gray-200">
                Social data
              </span>
            </li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
            <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Dev activity
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Topic search
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-6 lg:gap-6">
            <li className="lg:col-span-2 pb-1.5 lg:py-3">
              <span className="font-semibold lg:font-normal text-sm text-gray-800 dark::text-gray-200">
                Relative social dominance
              </span>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Free
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Startup
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Team
                </span>
                <span className="w-fit">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                    ></path>
                  </svg>
                </span>
              </div>
            </li>
            <li className="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark::border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-6 lg:block">
                <span className="lg:hidden md:col-span-2 text-sm text-gray-800 dark::text-gray-200">
                  Enterprise
                </span>
                <span className="w-fit">
                  <svg
                    className="w-5 h-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                  </svg>
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block mt-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-2"></div>
            <div className="col-span-1">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-3 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition dark::focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>
            <div className="col-span-1">
              <Link
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
                href="#"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
          <p className="text-sm text-gray-500 dark::text-gray-400">
            Need a custom plan?
          </p>
          <button className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export const Pricing10 = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      suppressHydrationWarning={true}
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark::text-white">
          Find the right plan for your team
        </h2>
        <p className="mt-1 text-gray-600 dark::text-gray-400">
          Pay as you go service, cancel anytime.
        </p>
      </div>
      <div className="mt-12 relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark::before:bg-[radial-gradient(closest-side,#334155,transparent)]">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
          <div className="flex flex-col h-full text-center">
            <div className="bg-white pt-8 pb-5 px-8 dark::bg-slate-900">
              <h4 className="font-medium text-lg text-gray-800 dark::text-gray-200">
                Free
              </h4>
            </div>
            <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark::bg-slate-900">
              <span className="mt-7 font-bold text-5xl text-gray-800 dark::text-gray-200">
                Free
              </span>
            </div>
            <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark::bg-slate-900">
              <ul className="space-y-2.5 text-center text-sm">
                <li className="text-gray-800 dark::text-gray-400">1 user</li>
                <li className="text-gray-800 dark::text-gray-400">
                  Plan features
                </li>
                <li className="text-gray-800 dark::text-gray-400">
                  Product support
                </li>
              </ul>
            </div>
            <div className="bg-white py-8 px-8 dark::bg-slate-900">
              <Link
                className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark::text-blue-500 dark::border-blue-500 dark::hover:border-blue-700"
                href="#"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full text-center">
            <div className="bg-white pt-8 pb-5 px-8 dark::bg-slate-900">
              <h4 className="font-medium text-lg text-gray-800 dark::text-gray-200">
                Startup
              </h4>
            </div>
            <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark::bg-slate-900">
              <span className="mt-7 font-bold text-5xl text-gray-800 dark::text-gray-200">
                <span className="font-bold text-2xl">$</span>
                <span>39</span>
              </span>
            </div>
            <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark::bg-slate-900">
              <ul className="space-y-2.5 text-center text-sm">
                <li className="text-gray-800 dark::text-gray-400">2 users</li>
                <li className="text-gray-800 dark::text-gray-400">
                  Plan features
                </li>
                <li className="text-gray-800 dark::text-gray-400">
                  Product support
                </li>
              </ul>
            </div>
            <div className="bg-white py-8 px-8 dark::bg-slate-900">
              <Link
                className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark::text-blue-500 dark::border-blue-500 dark::hover:border-blue-700"
                href="#"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full text-center">
            <div className="bg-white pt-8 pb-5 px-8 dark::bg-slate-900">
              <h4 className="font-medium text-lg text-gray-800 dark::text-gray-200">
                Team
              </h4>
            </div>
            <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark::bg-slate-900">
              <span className="mt-7 font-bold text-5xl text-gray-800 dark::text-gray-200">
                <span className="font-bold text-2xl">$</span>
                <span>89</span>
              </span>
            </div>
            <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark::bg-slate-900">
              <ul className="space-y-2.5 text-center text-sm">
                <li className="text-gray-800 dark::text-gray-400">5 users</li>
                <li className="text-gray-800 dark::text-gray-400">
                  Plan features
                </li>
                <li className="text-gray-800 dark::text-gray-400">
                  Product support
                </li>
              </ul>
            </div>
            <div className="bg-white py-8 px-8 dark::bg-slate-900">
              <Link
                className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark::text-blue-500 dark::border-blue-500 dark::hover:border-blue-700"
                href="#"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="flex flex-col h-full text-center">
            <div className="bg-white pt-8 pb-5 px-8 dark::bg-slate-900">
              <h4 className="font-medium text-lg text-gray-800 dark::text-gray-200">
                Enterprise
              </h4>
            </div>
            <div className="h-full bg-white lg:mt-px lg:py-5 px-8 dark::bg-slate-900">
              <span className="mt-7 font-bold text-5xl text-gray-800 dark::text-gray-200">
                <span className="font-bold text-2xl">$</span>
                <span>149</span>
              </span>
            </div>
            <div className="bg-white flex justify-center lg:mt-px pt-7 px-8 dark::bg-slate-900">
              <ul className="space-y-2.5 text-center text-sm">
                <li className="text-gray-800 dark::text-gray-400">10 users</li>
                <li className="text-gray-800 dark::text-gray-400">
                  Plan features
                </li>
                <li className="text-gray-800 dark::text-gray-400">
                  Product support
                </li>
              </ul>
            </div>
            <div className="bg-white py-8 px-8 dark::bg-slate-900">
              <Link
                className="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark::text-blue-500 dark::border-blue-500 dark::hover:border-blue-700"
                href="#"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isClient && (
        <div className="mt-20">
          <div className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300">
            <div className="space-y-24 lg:hidden">
              <div>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Free
                  </h2>
                </div>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Financial data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Open/High/Low/Close
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Price-volume difference indicator
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    On-chain data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Network growth
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Average token age consumed
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Exchange flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total ERC20 exchange funds flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Transaction volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total circulation (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Velocity of tokens (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        ETH gas used
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Social data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Dev activity
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Topic search
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Relative social dominance
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total social volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Startup
                  </h2>
                </div>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Financial data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Open/High/Low/Close
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Price-volume difference indicator
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    On-chain data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Network growth
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Average token age consumed
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Exchange flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total ERC20 exchange funds flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Transaction volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total circulation (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Velocity of tokens (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        ETH gas used
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Social data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Dev activity
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Topic search
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Relative social dominance
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total social volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Team
                  </h2>
                </div>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Financial data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Open/High/Low/Close
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Price-volume difference indicator
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    On-chain data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Network growth
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Average token age consumed
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Exchange flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total ERC20 exchange funds flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Transaction volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total circulation (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Velocity of tokens (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        ETH gas used
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Social data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Dev activity
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Topic search
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Relative social dominance
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total social volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-gray-400"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">No</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div className="px-4 mb-4">
                  <h2 className="text-lg leading-6 font-medium text-gray-800">
                    Enterprise
                  </h2>
                </div>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Financial data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Open/High/Low/Close
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Price-volume difference indicator
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    On-chain data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Network growth
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Average token age consumed
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Exchange flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total ERC20 exchange funds flow
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Transaction volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total circulation (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Velocity of tokens (beta)
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        ETH gas used
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full">
                  <p className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark::bg-gray-700 dark::border-gray-700 dark::text-white">
                    Social data
                  </p>
                  <thead>
                    <tr>
                      <p className="sr-only">Feature</p>
                      <p className="sr-only">Included</p>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark::divide-gray-700">
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Dev activity
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Topic search
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Relative social dominance
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                    <tr className="border-t border-gray-200 dark::border-gray-700">
                      <p className="py-5 px-4 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                        Total social volume
                      </p>
                      <td className="py-5 pr-4">
                        <span className="w-fit">
                          <svg
                            className="ml-auto h-7 w-7 text-blue-600"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="sr-only">Yes</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="hidden lg:block">
              <table className="w-full h-px">
                <p className="sr-only">Pricing plan comparison</p>
                <thead>
                  <tr>
                    <th className="py-4 pl-6 pr-6 text-sm font-medium text-gray-800 text-left">
                      <span className="sr-only">Feature by</span>
                      <span>Plans</span>
                    </th>
                    <p className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center">
                      Free
                    </p>
                    <p className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center">
                      Startup
                    </p>
                    <p className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center">
                      Team
                    </p>
                    <p className="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center">
                      Enterprise
                    </p>
                  </tr>
                </thead>
                <tbody className="border-t border-gray-200 divide-y divide-gray-200 dark::border-gray-700 dark::divide-gray-700">
                  <tr>
                    <p className="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark::bg-slate-800 dark::text-white">
                      Financial data
                    </p>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Open/High/Low/Close
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Price-volume difference indicator
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark::bg-slate-800 dark::text-white">
                      On-chain data
                    </p>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Network growth
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Average token age consumed
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Exchange flow
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Total ERC20 exchange funds flow
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Transaction volume
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Total circulation (beta)
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Velocity of tokens (beta)
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      ETH gas used
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Not included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark::bg-slate-800 dark::text-white">
                      Social data
                    </p>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Dev activity
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Topic search
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Relative social dominance
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                  <tr>
                    <p className="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark::text-gray-400">
                      Relative social dominance
                    </p>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Free</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Startup</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-gray-400"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Team</span>
                    </td>
                    <td className="py-5 px-6">
                      <span className="w-fit">
                        <svg
                          className="mx-auto h-7 w-7 text-blue-600"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <span className="sr-only">Included in Enterprise</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="hs-collapse-toggle inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-gray-600 hover:text-gray-800 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark::bg-slate-900 dark::border-gray-700 dark::hover:border-gray-600 dark::text-gray-400 dark::hover:text-gray-200 dark::hover:shadow-slate-700/[.7] dark::focus:ring-gray-700 dark::focus:ring-offset-gray-800">
              <span className="hs-collapse-open:hidden block">
                View pricing comparision
              </span>
              <span className="hs-collapse-open:block hidden">
                Hide pricing comparision
              </span>
              <span className="w-fit">
                <svg
                  className="hs-collapse-open:rotate-180 w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
