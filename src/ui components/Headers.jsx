import { Menu } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

export const Header1 = () => {
  return (
    <header className="h-screen bg-gradient-to-t from-primary-50 relative py-4 px-6 leading-6 bg-cover lg:py-5 lg:px-12 mb-40">
      <div className="flex relative justify-between items-center mx-auto max-w-screen-xl text-gray-700">
        <div className="cursor-pointer" href="#">
          <Image height="50" width="50" alt="alt" 
            className="block max-w-full h-8 align-middle"
            src="https://ik.imagekit.io/n0uvizrukm2/websites/578-5785080_laravel-6-logo-png-transparent-png_fdqlov_jrYXtJwvX1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661846112469"
          />
        </div>
        <nav className="hidden flex-row justify-center items-center w-auto font-semibold gap-x-12 md:flex">
          <div className="cursor-pointer" href="#">
            Home
          </div>
          <div className="cursor-pointer" href="#">
            Services
          </div>
          <div className="cursor-pointer" href="#">
            Pricing
          </div>
          <div className="cursor-pointer" href="#">
            Blog
          </div>
          <div className="cursor-pointer" href="#">
            Login
          </div>
          <div
            className="inline-block py-3 px-5 text-sm leading-5 text-green-500 rounded-lg cursor-pointer  md:rounded-global"
            href="#"
          >
            Get started
          </div>
        </nav>
        <div className="hidden absolute inset-x-0 z-50 py-2 w-full transform">
          <nav className="p-3 bg-slate-400 rounded-lg transform shadow-xs">
            <div
              className="block py-3 px-6 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100  border-solid cursor-pointer box-border"
              href="#"
            >
              Home
            </div>
            <div
              className="block py-3 px-6 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100  border-solid cursor-pointer box-border"
              href="#"
            >
              Services
            </div>
            <div
              className="block py-3 px-6 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100 border-indigo-100 border-solid cursor-pointer box-border"
              href="#"
            >
              Pricing
            </div>
            <div
              className="block py-3 px-6 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100 border-indigo-100 border-solid cursor-pointer box-border"
              href="#"
            >
              Blog
            </div>
            <div
              className="block py-3 px-6 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100 border-indigo-100 border-solid cursor-pointer box-border"
              href="#"
            >
              Contact
            </div>
            <div
              className="block py-3 px-6 font-semibold border-t-0 border-r-0 border-l-0 border-b border-blue-100 border-indigo-100 border-solid cursor-pointer box-border"
              href="#"
            >
              Login
            </div>
            <div
              className="block py-3 text-sm font-semibold leading-5 text-center text-white bg-green-900 rounded-lg cursor-pointer"
              href="#"
            >
              Get started
            </div>
          </nav>
        </div>
        <Menu as="div" className="block relative md:hidden">
          <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium hover:bg-opacity-30">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="block align-middle w-8 text-center text-gray-300 normal-case bg-none rounded-md cursor-pointer bg-primary-500 p-[3px] md:hidden"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Menu.Button>
          <Menu.Items
            as="ul"
            className="absolute right-0 text-gray-900 w-56 mt-2 origin-top-right bg-white divide-gray-100 rounded-md shadow-green-800 shadow"
          >
            <Menu.Item
              as="li"
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
            >
              Menu Item 1
            </Menu.Item>
            <Menu.Item
              as="li"
              className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
            >
              Menu Item 2
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div className="pb-[26px] grid gap-12 mx-auto mb-24 max-w-screen-xl text-left items-center pt-8 sm:mb-10 md:grid-cols-2 md:pt-[59px] lg:my-20 lg:gap-20 xl:mb-24 xl:grid-cols-5">
        <div className="order-2 col-span-1 text-gray-700 xl:col-span-2 md:order-1">
          <div className="flex mb-6 items-center">
            <span className="p-2 text-xs font-bold leading-4 uppercase rounded-lg bg-primary-50 text-primary-800 md:rounded-global md:text-white">
              NEW
            </span>
            <span className="font-semibold text-primary-800">
              &nbspMajor Update
            </span>
          </div>
          <h2 className="m-0 text-gray-900 font-bold leading-[43px] -tracking-[1px] text-[39px] sm:text-3xl sm:leading-9 md:text-4xl md:leading-10 lg:text-[47px] lg:leading-[54px] xl:text-[52px]">
            Change the way you build UI
          </h2>
          <p className="mx-0 mt-6 mb-0 max-w-xl text-lg leading-relaxed xl:leading-7">
            World among the stalks, and grow familiar with the countless
            indescribable forms flies
          </p>
          <div
            className="inline-block py-3 px-5 mt-8 text-sm font-semibold leading-5 text-green-800 rounded-lg cursor-pointer bg-primary-500 md:rounded-global"
            href="#"
          >
            Get started
          </div>
        </div>
        <div className="order-1 col-span-1 text-gray-700 xl:pt-0 xl:col-span-3 md:order-2">
          <Image height="50" width="50" alt="alt" 
            className="rounded-global m-auto h-[340px] w-full object-cover object-center xl:h-[527px]"
            src="https://images.unsplash.com/photo-1661937303423-f251f4b80c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          />
        </div>
      </div>
    </header>
  );
};

export const Header2 = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b z-10 from-red-100 p-5 xl:from-primary-50"></div>
      <div className="relative z-10">
        <div className="px-4 py-5 mx-auto lg:max-w-screen-xl lg:px-8">
          <div className="flex items-center justify-between relative">
            <div className="inline-flex items-center" href="#">
              <span className="ml-2 text-xl tracking-wide font-semibold">
                Chai.
              </span>
            </div>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <div
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700 lg:font-light"
                  href="#"
                >
                  Product
                </div>
              </li>
              <li>
                <div
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700 lg:font-light"
                  href="#"
                >
                  Features
                </div>
              </li>
              <li>
                <div
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700 lg:font-light"
                  href="#"
                >
                  Pricing
                </div>
              </li>
              <li>
                <div
                  className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700 lg:font-light"
                  href="#"
                >
                  About us
                </div>
              </li>
            </ul>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <div
                  className="inline-flex items-center justify-center h-12 px-6 tracking-wide text-gray-900 font-bold transition duration-200 shadow-md focus:shadow-outline focus:outline-none bg-primary rounded-global"
                  href="#"
                >
                  Sign up
                </div>
              </li>
            </ul>
            <Menu as="div" className="hidden relative">
              <Menu.Button className="inline-flex w-full justify-center rounded-md font-medium hover:bg-opacity-30 text-[23px]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  className="ml-2"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                </svg>
              </Menu.Button>
              <Menu.Items
                as="ul"
                className="absolute right-0 text-gray-900 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg"
              >
                <Menu.Item
                  as="li"
                  className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
                >
                  Menu Item 1
                </Menu.Item>
                <Menu.Item
                  as="li"
                  className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
                >
                  Menu Item 2
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="max-w-5xl mx-auto py-[27px]">
          <div className="max-w-[400px] m-auto text-center py-[30px] space-y-5 xl:max-w-[561px]">
            <h1 className="text-4xl leading-10 font-semibold lg:text-[47px] lg:leading-[53px] xl:text-[64px] xl:leading-[67px]">
              Welcome To The Developer Cloud
            </h1>
            <p className="max-w-[286px] mx-auto text-base leading-[21px] lg:text-xl lg:max-w-[335px] lg:leading-7 xl:text-[23px] xl:leading-8 xl:max-w-[379px]">
              Create screens directly in Method or add your images from Sketch.
            </p>
            <span className="text-primary-500 text-[46px] inline-block mt-3.5 xl:text-[69px]">
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
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"></path>
                </svg>
              </div>
            </span>
          </div>
          <div className="px-3">
            <Image height="50" width="50" alt="alt" 
              className="shadow- rounded-global p-[13px] m-auto max-w-[900px] w-full xl:max-w-[1000px]"
              src="https://shreethemes.in/techwind/layouts/assets/images/saas/classic01.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header3 = () => {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <header className="flex justify-between items-center py-4 md:mb-12 md:py-3 xl:mb-16">
          <div
            className="inline-flex items-center text-black-800 font-bold gap-2.5 text-xl md:text-2xl"
            href="#"
          >
            <span className="w-6 h-auto text-primary">
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
                  viewBox="0 0 640 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M640 199.9v54l-320 200L0 254v-54l320 200 320-200.1zm-194.5 72l47.1-29.4c-37.2-55.8-100.7-92.6-172.7-92.6-72 0-135.5 36.7-172.6 92.4h.3c2.5-2.3 5.1-4.5 7.7-6.7 89.7-74.4 219.4-58.1 290.2 36.3zm-220.1 18.8c16.9-11.9 36.5-18.7 57.4-18.7 34.4 0 65.2 18.4 86.4 47.6l45.4-28.4c-20.9-29.9-55.6-49.5-94.8-49.5-38.9 0-73.4 19.4-94.4 49zM103.6 161.1c131.8-104.3 318.2-76.4 417.5 62.1l.7 1 48.8-30.4C517.1 112.1 424.8 58.1 319.9 58.1c-103.5 0-196.6 53.5-250.5 135.6 9.9-10.5 22.7-23.5 34.2-32.6zm467 32.7z"></path>
                </svg>
              </div>
            </span>
            <span> SyrBookeepping</span>
          </div>
          <nav className="hidden lg:flex gap-12">
            <div
              className="text-lg font-semibold text-primary lg:font-medium lg:text-base"
              href="#"
            >
              Home
            </div>
            <div
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-base lg:font-normal"
              href="#"
            >
              Features
            </div>
            <div
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-base lg:font-normal"
              href="#"
            >
              Pricing
            </div>
            <div
              className="hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100 lg:text-base lg:font-normal"
              href="#"
            >
              About
            </div>
          </nav>
          <div
            className="hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3 md:text-base lg:inline-block lg:px-4 lg:py-2 lg:font-normal"
            href="#"
          >
            Contact Sales
          </div>
          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium  hover:bg-opacity-30">
              <span className="w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </Menu.Button>
            <Menu.Items
              as="ul"
              className="absolute right-0 text-gray-900 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg"
            >
              <Menu.Item
                as="li"
                className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
              >
                Menu Item 1
              </Menu.Item>
              <Menu.Item
                as="li"
                className="group flex rounded-md items-center w-full px-2 py-2 text-sm"
              >
                Menu Item 2
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </header>
        <div className="relative px-4 mx-auto pt-16 sm:max-w-xl md:px-8 md:max-w-full lg:py-32 lg:pt-[25px] xl:px-20">
          <div className="max-w-xl mx-auto lg:max-w-screen-xl">
            <div className="mb-16 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                    Brand new
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Create Websites With SyrBookeepping Studio
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <div className="flex items-center">
                <div
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary-500 rounded-global"
                  href="#"
                >
                  Get started
                </div>
                <div
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  href="#"
                >
                  Learn more
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
            <Image height="50" width="50" alt="alt" 
              className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
              src="https://kitwind.io/assets/kometa/full-browser.png"
            />
          </div>
        </div>
        <section className="flex flex-col lg:flex-row justify-between items-center border-t gap-10 lg:gap-8 pt-8">
          <div className="grid grid-cols-2 md:flex md:divide-x gap-4 -mx-6 md:-mx-8">
            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
                200
              </span>
              <span className="block text-sm md:text-base font-semibold text-center md:text-left">
                People
              </span>
            </div>
            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
                500+
              </span>
              <span className="block text-sm md:text-base font-semibold text-center md:text-left">
                Projects
              </span>
            </div>
            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
                250+
              </span>
              <span className="block text-sm md:text-base font-semibold text-center md:text-left">
                Customers
              </span>
            </div>
            <div className="px-6 md:px-8">
              <span className="block text-lg font-bold text-center text-primary md:text-xl md:text-left">
                A couple
              </span>
              <span className="block text-sm md:text-base font-semibold text-center md:text-left">
                Coffee breaks
              </span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <span className="text-gray-400 text-sm sm:text-base font-semibold tracking-widest uppercase">
              Social
            </span>
            <div className="w-12 h-px bg-gray-200"></div>
            <div className="flex gap-4">
              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-5 h-5">
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
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path>
                    </svg>
                  </div>
                </span>
              </div>
              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-fit">
                  <svg
                    className="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </span>
              </div>
              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-fit">
                  <svg
                    className="w-5 h-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
              </div>
              <div
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                href="#"
              >
                <span className="w-5 h-5">
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
                      <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                    </svg>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Header4 = () => {
  return (
    <div className="bg-white">
      <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <div className="flex">
                <p className="capitalize font-bold text-xl">SYRBookkeeping</p>
              </div>
            </div>
            <button className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <span className="w-fit">
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  ></path>
                </svg>
              </span>
              <span className="w-fit">
                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </span>
            </button>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                href="#"
              >
                Features
              </Link>
              <Link
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                href="#"
              >
                Solutions
              </Link>
              <Link
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                href="#"
              >
                Resources
              </Link>
              <Link
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                href="#"
              >
                Pricing
              </Link>
            </div>
            <Link
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              href="#"
            >
              Join Now
            </Link>
          </div>
        </div>
      </header>
      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                A social media for learners
              </p>
              <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
                Connect & learn from the experts
              </h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                Grow your career fast with right mentor.
              </p>
              <Link
                className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                href="#"
              >
                <span>Join for free </span>
                <span className="w-fit">
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </span>
              </Link>
              <p className="mt-5 text-gray-600">
                <span>Already joined us? </span>
                <Link
                  className="text-black transition-all duration-200 hover:underline"
                  href="#"
                >
                  Log in
                </Link>
              </p>
            </div>
            <div>
              <Image height="50" width="50" alt="alt" 
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Header5 = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-500 to-pink-500 relative bg-deep-purple-accent-400">
      <div className="absolute inset-x-0 bottom-0">
        <span className="w-fit">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </span>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            <span>Technology like art is a soaring </span>
            <br className="hidden md:block" />
            <span>exercise of the </span>
            <span className="relative inline-block px-2">
              <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400"></div>
              <span className="relative text-secondary-500">
                human imagination.
              </span>
            </span>
          </h2>
          <p className="mb-6 text-base text-indigo-100 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo. Sed ut perspiciatis unde omnis.
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              name=""
              placeholder="Email"
            />
            <Link
              className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md hover:text-deep-purple-900 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none bg-black text-white md:w-auto"
              href="#"
            >
              Subscribe
            </Link>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
          <Link
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            href="#"
          >
            <span className="w-fit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
