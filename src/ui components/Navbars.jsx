"use client";
import { Menu } from "@headlessui/react";
import { StarIcon } from "@primer/octicons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navigation1 = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="px-4 py-5 ">
        <div className="relative grid items-center grid-cols-2 lg:grid-cols-3">
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                href="#"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                href="#"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                href="#"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <Link className="inline-flex items-center lg:mx-auto" href="#">
            <span className="ml-2 text-xl font-bold tracking-wide uppercase dark:text-gray-100 text-gray-900">
              chai.
            </span>
          </Link>
          <ul className="items-center hidden ml-auto space-x-8 lg:flex">
            <li>
              <Link
                className="font-medium tracking-wide transition-colors duration-200 hover:text-teal-accent-400 dark:text-gray-100 text-gray-900"
                href="#"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary rounded-global"
                href="#"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <Menu as="div" className="relative flex justify-end lg:hidden">
            <Menu.Button className="inline-flex justify-center rounded-md px-4 py-2 text-sm font-medium dark:text-white hover:bg-opacity-30">
              <span className="w-fit">
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  ></path>
                </svg>
              </span>
            </Menu.Button>
            <Menu.Items
              as="ul"
              className="absolute right-0 text-gray-900 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg mt-10"
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
    </div>
  );
};

export const Navigation2 = () => {
  return (
    <div className="bg-blue-400">
      <div className="px-4 py-5 ">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link className="inline-flex items-center mr-8" href="#">
              <span className="text-2xl text-white">
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
                    <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
                  </svg>
                </div>
              </span>
              <span className="ml-2 text-xl font-bold text-white capitalize text-whites">
                SYRBookkeeping
              </span>
            </Link>
            <ul className="items-center hidden space-x-8 lg:flex text-white">
              <li>
                <Link
                  className="font-medium tracking-wide transition-colors  hover:text-teal-accent-400"
                  href="#"
                >
                  How it works?
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium tracking-wide text-nav-link transition-colors  hover:text-teal-accent-400"
                  href="#"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium tracking-wide text-nav-link transition-colors  hover:text-teal-accent-400"
                  href="#"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="font-medium tracking-wide text-nav-link transition-colors  hover:text-teal-accent-400"
                  href="#"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                className="font-medium tracking-wide text-white transition-colors"
                href="#"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text- transition duration-200 shadow-md focus:shadow-outline focus:outline-none bg-success rounded-global"
                href="#"
              >
                Sign up
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
              <span className="w-fit">
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Navigation3 = () => {
  return (
    <section className="w-full shadow dark:shadow-slate-800">
      <div className="container flex items-center justify-between mx-auto overflow-hidden font-medium max-w-7xl h-16 px-4 md:overflow-visible md:flex-row md:justify-around lg:justify-center">
        <div className="items-start justify-center w-full space-x-6 text-center text-sm hidden md:w-2/3 md:mt-0 md:flex-row md:items-center md:flex md:justify-start lg:space-x-8">
          <Link
            className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 md:text-center md:text-primary-500 lg:mx-3"
            href="/"
          >
            Home
          </Link>
          <Link
            className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
            href="/templates"
          >
            Templates
          </Link>
          <Link
            className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
            href="/components"
          >
            Components
          </Link>
        </div>
        <div className="flex items-center justify-start h-full pr-4 md:w-1/4 md:justify-center md:pr-0">
          <Link className="py-4 flex md:py-0" href="/">
            <h1 className="text-2xl font-bold tracking-tighter text-primary-500">
              Chai.
            </h1>
          </Link>
        </div>
        <div className="items-start justify-center w-full space-x-6 text-center text-sm hidden md:w-2/3 md:mt-0 md:flex-row md:items-center md:flex md:justify-end lg:space-x-8">
          <Link
            className="inline-block w-full py-2 mx-0 ml-6 font-medium text-left md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center"
            href="/"
          >
            Contact
          </Link>
          <Link
            className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
            href="/templates"
          >
            Login
          </Link>
          <Link
            className="inline-block w-full py-2 mx-0 font-medium text-left md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center"
            href="/components"
          >
            Sign Up
          </Link>
        </div>
        <Menu as="div" className="md:hidden">
          <Menu.Button>
            <span className="w-fit">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </span>
          </Menu.Button>
          <Menu.Items
            as="ul"
            className="absolute text-gray-900 mt-2 origin-top-right divide-y divide-gray-100 shadow-lg left-px right-px pl-2 pt-5 pb-4 bg-white dark:bg-black dark:text-slate-100 dark:divide-gray-700 dark:shadow-gray-800"
          >
            <Menu.Item
              as="li"
              className="group flex items-center w-full px-2 py-2 text-sm"
            >
              Intro
            </Menu.Item>
            <Menu.Item
              as="li"
              className="group flex items-center w-full px-2 py-2 text-sm"
            >
              Features
            </Menu.Item>
            <Menu.Item
              as="li"
              className="group flex items-center w-full px-2 py-2 text-sm"
            >
              Login
            </Menu.Item>
            <Menu.Item
              as="li"
              className="group flex items-center w-full px-2 py-2 text-sm"
            >
              Sign Up
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </section>
  );
};

export const Navigation4 = () => {
  const MenuItems = [
    {
      Demos: [
        "Modern",
        "Standard",
        "Minimal",
        "Vintage",
        "classNameic",
        "Trendy",
        "Elegant",
        "Refined",
        "Contemporary",
      ],
    },
    {
      "Men Wear": {
        item1: {
          "Top Wear": [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          Others: ["Belt, Scarves & More", "Watches & Wearables"],
        },
        item2: {
          "Top Wear": [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          Others: ["Belt, Scarves & More", "Watches & Wearables"],
        },
        item3: {
          Footwear: [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          "Sports & Active Wear": [
            "Belt, Scarves & More",
            "Watches & Wearables",
          ],
        },
        item4: {
          "Top Wear": [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          "Belt, Scarves & More": [
            "Belt, Scarves & More",
            "Watches & Wearables",
          ],
        },
        item5: {
          Gadgets: ["T-Shirt", "Casual Shirts"],
          Jewellers: ["Belt, Scarves & More"],
          Others: ["Belt, Scarves & More", "Watches & Wearables"],
        },
      },
    },
    {
      "Women Wear": {
        item1: {
          "Top Wear": [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          Others: ["Belt, Scarves & More", "Watches & Wearables"],
        },
        item2: {
          "Top Wear": [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          Others: ["Belt, Scarves & More", "Watches & Wearables"],
        },
        item3: {
          Footwear: [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          "Sports & Active Wear": [
            "Belt, Scarves & More",
            "Watches & Wearables",
          ],
        },
        item4: {
          "Top Wear": [
            "T-Shirt",
            "Casual Shirts",
            "Formal Shirts",
            "Blazers & Coats",
            "Suits",
            "Jackets",
          ],
          "Belt, Scarves & More": [
            "Belt, Scarves & More",
            "Watches & Wearables",
          ],
        },
        item5: {
          Gadgets: ["T-Shirt", "Casual Shirts"],
          Jewellers: ["Belt, Scarves & More"],
          Others: ["Belt, Scarves & More", "Watches & Wearables"],
        },
      },
    },
    {
      Pages: [
        "Users",
        "FAQ",
        "Privacy Policy",
        "Terms & Condition",
        "Contact Us",
        "Checkout",
        "Collection",
        "Category",
        "Order",
        "404",
      ],
    },
  ];
  const MenuItem = ({ title, content }) => {
    const [isHovered, setIsHovered] = useState(false);

    // useEffect(() => {
    //   if (title == "Men Wear") {
    //     setIsHovered(true);
    //   }
    // }, []);

    // if(title == "Men Wear"){
    //   setIsHovered(true)
    // }else{
    //   setIsHovered(false)
    // }

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // const displayContent = () => {
    //   if (title == "Demos") {
    //     return (
    //       <>
    //         {
    //           <div className="absolute top-10 left-0 w-fit p-2  rounded shadow-lg flex">
    //             {Array.isArray(content) ? (
    //             <ul>
    //               {content.map((item, index) => (
    //                 <li
    //                   key={index}
    //                   className="px-2 py-1 transition-colors duration-200 hover:bg-gray-100 flex"
    //                 >
    //                   <Link href="#" className="text-gray-900">
    //                     {item}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //             ): }
    //           </div>
    //         }
    //       </>
    //     );
    //   }

    //   return null;
    // };

    let hoverclassName = "";
    let hoverRelativeclassName = "";
    if (title === "Demos") {
      hoverclassName = "top-10 left-0";
    } else if (title === "Pages") {
      hoverclassName = "top-10 right-0";
      hoverRelativeclassName = "relative";
    } else {
      hoverclassName = "top-10 left-0";
      hoverRelativeclassName = "";
    }

    return (
      <li
        className={`flex flex-col cursor-pointer h-full ${hoverRelativeclassName}`}
      >
        <div
          className="flex items-center font-medium tracking-wide text-nav-link transition-colors hover:text-black  h-full py-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {title}
          <arrowIcon isHovered={isHovered} />
          <div>
            {isHovered && (
              <div
                className={`flex flex-col gap-4 text-lg absolute ${hoverclassName} w-fit p-2  rounded shadow-lg flex z-20 min-w-[200px]`}
              >
                {Array.isArray(content) ? (
                  <ul>
                    {content.map((item, index) => (
                      <li
                        key={index}
                        className="px-2 py-1 transition-colors duration-200  hover:bg-gray-100 flex"
                      >
                        <Link href="#" className="text-gray-900">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul className="flex  gap-5 text-md py-10 px-8 bg-gray-50">
                    {Object.entries(content).map(
                      ([subTitle, subItems], index) => (
                        <li key={index} className="flex flex-col  capitalize">
                          {/* <h3 className=" font-medium text-black bg-white">
                          {subTitle}
                        </h3> */}
                          <ul className="flex flex-col gap-1 text-sm py-5">
                            {Object.entries(subItems).map(
                              ([subTitleItem, subItemsItem], subIndex) => (
                                <>
                                  <h3 className="mb-2 font-bold  text-black  text-sm">
                                    {subTitleItem}
                                  </h3>
                                  <ul className="flex flex-col gap-1">
                                    {Object.values(subItemsItem).map(
                                      (item, subsubIndex) => (
                                        <li
                                          key={subsubIndex}
                                          className="font-medium text-gray-600 capitalize  transition-colors duration-200  hover:bg-gray-300 py-1 px-2"
                                        >
                                          <Link href={`#`}>{item}</Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </>
                              )
                            )}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </li>
    );
  };
  return (
    <div className="bg-white border-y-2 w-full">
      <div className="px-2 py-5 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-3">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center w-full">
            <Link className="inline-flex items-center mr-8 text-black" href="#">
              <span className="text-2xl">
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
                    <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
                  </svg>
                </div>
              </span>
              <span className="ml-2 text-xl font-bold  capitalize text-whites">
                SYRBookkeeping
              </span>
            </Link>
            <ul className="relative items-center hidden space-x-8 lg:flex text-[#98a196] h-full w-full">
              {MenuItems.map((menuItem, index) => (
                <MenuItem
                  key={index}
                  title={Object.keys(menuItem)[0]}
                  content={Object.values(menuItem)[0]}
                />
              ))}
            </ul>
          </div>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                className="font-medium tracking-wide transition-colors"
                href="#"
              >
                <div className="text-gray-400 hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </Link>
            </li>
            <li>
              <Link
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text- transition duration-200 shadow-md focus:shadow-outline focus:outline-none bg-success rounded-md"
                href="#"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="relative w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-full h-full"
                  >
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.25 12h12.527l2.253-9H6" />
                  </svg>
                  <div className="absolute top-0 right-1 w-5 h-5 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                    15
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <button className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
              <span className="w-fit">
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Navigation5 = () => {
  return (
    <>
      <header className="w-full">
        <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <Link href="#" className="flex items-center">
              <Image
                src="/images/logo.svg"
                width={24}
                height={36}
                className="h-6 mr-3 sm:h-9"
                alt="ECOMER Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                ECOMER
              </span>
            </Link>
            <div className="flex items-center lg:order-2">
              <div className="hidden mt-2 mr-4 sm:inline-block">
                <Link
                  legacyBehavior
                  className="github-button"
                  href="https://github.com/dilshad/ECOMER"
                >
                  <div className="font-bold">
                    <StarIcon size={25} className="mr-1" />
                    Star
                  </div>
                </Link>
              </div>
              {/* <Link
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </Link> */}
              <Link
                href="https://dilshad.com/product/tailwind-css/landing-page"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
              >
                Download
              </Link>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
