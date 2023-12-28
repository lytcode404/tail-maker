import React, { useState, useEffect } from "react";

const Header = ({ setSearchText }) => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(prevScrollY < currentScrollY);
      //   console.log(prevScrollY < currentScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white fixed top-0 w-full p-4 z-50 transition-transform duration-500 ${
        !scrollingDown
          ? "transform translate-y-0"
          : "transform -translate-y-full"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Tails Maker</div>
          <div className="relative w-1/3 bg-gray-700 rounded-full ">
            <input
              type="text"
              placeholder="Search"
              className=" text-white px-4 py-2 bg-transparent focus:outline-none focus:ring focus:border-blue-300 w-full rounded-full"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-100">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="flex space-x-4">
            <div>Home</div>
            <div>About</div>
            <div>Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
