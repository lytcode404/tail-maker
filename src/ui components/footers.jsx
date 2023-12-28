import Link from "next/link";

export const Footer1 = () => {
  return (
    <>
      <footer className="py-5 pb-0">
        <div className="max-w-7xl mx-auto flex flex-col gap-y-8 py-5 px-5 sm:flex-row sm:justify-around sm:px-0 lg:gap-x-10">
          <div className="sm:basis-1/5">
            <h1 className="font-black text-3xl text-slate-900 dark::text-slate-100">
              Chai
            </h1>
            <p className="text-base tracking-normal text-slate-700 mt-3 dark::text-gray-300 2xl:tracking-wide">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark::text-slate-100">
              Services
            </h4>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Chai
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Generator
            </Link>
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark::text-slate-100">
              Blog
            </h4>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Tailwind CSS v3
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              SyrBookeepping
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              How to code?
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Master Remix.run
            </Link>
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark::text-slate-100">
              Links
            </h4>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Privacy Policy
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Terms and conditions
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Return Policy
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              All eCourses
            </Link>
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-900 dark::text-slate-100">
              Social
            </h4>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Twitter
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Facebook
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              LinkedIn
            </Link>
            <Link className="block mt-3 text-sm dark::text-gray-300" href="#">
              Google+
            </Link>
          </div>
        </div>
        <div>
          <p className="pb-5 pt-5 text-xs text-gray-400 border-t max-w-7xl mx-auto px-5 sm:px-8">
            Copyright @ 2022, chaibuilder.com
          </p>
        </div>
      </footer>
    </>
  );
};

export const Footer2 = () => {
  return (
    <>
      <footer className="py-12 leading-6 px-4 lg:px-8">
        <div className="flex justify-between mx-auto mb-6 max-w-screen-xl lg:mb-8">
          <Link
            className="px-2 space-x-2 flex items-center gap-x-1 text-2xl font-bold text-primary"
            href="#"
          >
            SyrBookeepping
            <span className="order-first">
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
          </Link>
          <Link
            className="flex items-center cursor-pointer hover:text-gray-200"
            href="#"
          >
            <span>Return to top</span>
            <span className="block w-4 h-4 align-middle ml-2">
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
                  <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                </svg>
              </div>
            </span>
          </Link>
        </div>
        <div className="pt-8 mx-auto max-w-screen-xl border-t-2 border-solid box-border space-y-8 dark::border-slate-700">
          <div className="md:grid md:grid-cols-5">
            <div className="py-1 dark::border-slate-700 md:border-r-2 md:pr-4 md:col-span-1">
              <h5 className="m-0 text-lg font-semibold leading-none text-slate-900 dark::text-slate-100">
                Policies
              </h5>
            </div>
            <nav className="col-span-4 col-start-2 mt-2 md:pl-12 md:mt-0 lg:pl-24">
              <ul className="flex flex-col p-0 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Terms and conditions
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Refund policy
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Return Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:grid md:grid-cols-5">
            <div className="py-1 dark::border-slate-700 md:border-r-2 md:pr-4 md:col-span-1">
              <h5 className="m-0 text-lg font-semibold leading-none text-slate-900 dark::text-slate-100">
                Links
              </h5>
            </div>
            <nav className="col-span-4 col-start-2 mt-2 md:pl-12 md:mt-0 lg:pl-24">
              <ul className="flex flex-col p-0 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Care
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    About Us
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="text-base font-normal cursor-pointer text-secondary hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    support@chaibuilder.com
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:grid md:grid-cols-5">
            <div className="py-1 dark::border-slate-700 md:border-r-2 md:pr-4 md:col-span-1">
              <h5 className="m-0 text-lg font-semibold leading-none text-slate-900 dark::text-slate-100">
                Social Media
              </h5>
            </div>
            <nav className="col-span-4 col-start-2 mt-2 md:pl-12 md:mt-0 lg:pl-24">
              <ul className="flex flex-col p-0 space-y-2 sm:flex-row sm:space-x-10 sm:space-y-0">
                <li className="text-left">
                  <Link
                    className="flex text-base font-normal cursor-pointer items-center gap-x-2 hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Twitter
                    <span>
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
                          <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="flex text-base font-normal cursor-pointer items-center gap-x-2 hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Google
                    <span>
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
                          <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </li>
                <li className="text-left">
                  <Link
                    className="flex text-base font-normal cursor-pointer items-center gap-x-2 hover:text-gray-800 dark::hover:text-gray-100"
                    href="#"
                  >
                    Instagram
                    <span>
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
                          <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="pt-8 mx-auto mt-8 max-w-screen-xl border-t-2 border-solid box-border dark::border-slate-700 lg:mt-12">
          <p className="m-0 text-sm leading-5 text-center md:text-left">
            ©2022 chaibuilder.com. All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export const Footer3 = () => {
  return (
    <>
      <div className="bg-gray-900">
        <footer className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
            <div className="col-span-full lg:col-span-2">
              <div className="lg:-mt-2 mb-4">
                <Link
                  className="inline-flex items-center text-gray-100 text-xl md:text-2xl font-bold gap-2"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      width="95"
                      height="94"
                      viewBox="0 0 95 94"
                      className="w-5 h-auto text-indigo-500"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                    </svg>
                  </span>
                  <span> SyrBookeepping</span>
                </Link>
              </div>
              <p className="text-gray-400 sm:pr-8 mb-6">
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
              <div className="flex gap-4">
                <Link
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
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z"></path>
                      </svg>
                    </div>
                  </span>
                </Link>
                <Link
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
                </Link>
                <Link
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
                </Link>
                <Link
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
                </Link>
              </div>
            </div>
            <div>
              <p className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Products
              </p>
              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Overview
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Solutions
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Pricing
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Customers
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <p className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Company
              </p>
              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Investor Relations
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Jobs
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Press
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <p className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Support
              </p>
              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Contact
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Documentation
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Chat
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    FAQ
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <p className="text-gray-100 font-bold tracking-widest uppercase mb-4">
                Legal
              </p>
              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Terms of Service
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-gray-400 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Cookie settings
                  </Link>
                </div>
              </nav>
            </div>
          </div>
          <p className="text-gray-400 text-sm text-center border-t border-gray-800 py-8">
            © 2021 - Present SyrBookeepping. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export const Footer4 = () => {
  return (
    <>
      <div>
        <div className="py-16 text-center max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold">SyrBookeepping</h1>
          <p className="w-4/5 mx-auto my-5 md:w-3/5 lg:w-2/5">
            Start working with Landrick that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
          <div className="flex justify-center gap-x-3">
            <Link href="#">
              <span className="w-full text-xl border border-gray-600">
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
                    <path d="M103.3 344.3c-6.5-14.2-6.9-18.3 7.4-23.1 25.6-8 8 9.2 43.2 49.2h.3v-93.9c1.2-50.2 44-92.2 97.7-92.2 53.9 0 97.7 43.5 97.7 96.8 0 63.4-60.8 113.2-128.5 93.3-10.5-4.2-2.1-31.7 8.5-28.6 53 0 89.4-10.1 89.4-64.4 0-61-77.1-89.6-116.9-44.6-23.5 26.4-17.6 42.1-17.6 157.6 50.7 31 118.3 22 160.4-20.1 24.8-24.8 38.5-58 38.5-93 0-35.2-13.8-68.2-38.8-93.3-24.8-24.8-57.8-38.5-93.3-38.5s-68.8 13.8-93.5 38.5c-.3.3-16 16.5-21.2 23.9l-.5.6c-3.3 4.7-6.3 9.1-20.1 6.1-6.9-1.7-14.3-5.8-14.3-11.8V20c0-5 3.9-10.5 10.5-10.5h241.3c8.3 0 8.3 11.6 8.3 15.1 0 3.9 0 15.1-8.3 15.1H130.3v132.9h.3c104.2-109.8 282.8-36 282.8 108.9 0 178.1-244.8 220.3-310.1 62.8zm63.3-260.8c-.5 4.2 4.6 24.5 14.6 20.6C306 56.6 384 144.5 390.6 144.5c4.8 0 22.8-15.3 14.3-22.8-93.2-89-234.5-57-238.3-38.2zM393 414.7C283 524.6 94 475.5 61 310.5c0-12.2-30.4-7.4-28.9 3.3 24 173.4 246 256.9 381.6 121.3 6.9-7.8-12.6-28.4-20.7-20.4zM213.6 306.6c0 4 4.3 7.3 5.5 8.5 3 3 6.1 4.4 8.5 4.4 3.8 0 2.6.2 22.3-19.5 19.6 19.3 19.1 19.5 22.3 19.5 5.4 0 18.5-10.4 10.7-18.2L265.6 284l18.2-18.2c6.3-6.8-10.1-21.8-16.2-15.7L249.7 268c-18.6-18.8-18.4-19.5-21.5-19.5-5 0-18 11.7-12.4 17.3L234 284c-18.1 17.9-20.4 19.2-20.4 22.6z"></path>
                  </svg>
                </div>
              </span>
            </Link>
            <Link href="#">
              <span className="w-full text-xl border border-gray-600">
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
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path>
                  </svg>
                </div>
              </span>
            </Link>
            <Link href="#">
              <span className="w-full text-xl border border-gray-600">
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
                    <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"></path>
                  </svg>
                </div>
              </span>
            </Link>
            <Link href="#">
              <span className="w-full text-xl border border-gray-600">
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
                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-141.651-35.33c4.937-32.999-20.191-50.739-54.55-62.573l11.146-44.702-27.213-6.781-10.851 43.524c-7.154-1.783-14.502-3.464-21.803-5.13l10.929-43.81-27.198-6.781-11.153 44.686c-5.922-1.349-11.735-2.682-17.377-4.084l.031-.14-37.53-9.37-7.239 29.062s20.191 4.627 19.765 4.913c11.022 2.751 13.014 10.044 12.68 15.825l-12.696 50.925c.76.194 1.744.473 2.829.907-.907-.225-1.876-.473-2.876-.713l-17.796 71.338c-1.349 3.348-4.767 8.37-12.471 6.464.271.395-19.78-4.937-19.78-4.937l-13.51 31.147 35.414 8.827c6.588 1.651 13.045 3.379 19.4 5.006l-11.262 45.213 27.182 6.781 11.153-44.733a1038.209 1038.209 0 0 0 21.687 5.627l-11.115 44.523 27.213 6.781 11.262-45.128c46.404 8.781 81.299 5.239 95.986-36.727 11.836-33.79-.589-53.281-25.004-65.991 17.78-4.098 31.174-15.792 34.747-39.949zm-62.177 87.179c-8.41 33.79-65.308 15.523-83.755 10.943l14.944-59.899c18.446 4.603 77.6 13.717 68.811 48.956zm8.417-87.667c-7.673 30.736-55.031 15.12-70.393 11.292l13.548-54.327c15.363 3.828 64.836 10.973 56.845 43.035z"></path>
                  </svg>
                </div>
              </span>
            </Link>
            <Link href="#">
              <span className="w-full text-xl border border-gray-600">
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
                    <path d="M292.6 171.1L249.7 214l-.3-86 43.2 43.1m-43.2 219.8l43.1-43.1-42.9-42.9-.2 86zM416 259.4C416 465 344.1 512 230.9 512S32 465 32 259.4 115.4 0 228.6 0 416 53.9 416 259.4zm-158.5 0l79.4-88.6L211.8 36.5v176.9L138 139.6l-27 26.9 92.7 93-92.7 93 26.9 26.9 73.8-73.8 2.3 170 127.4-127.5-83.9-88.7z"></path>
                  </svg>
                </div>
              </span>
            </Link>
          </div>
        </div>
        <div className="text-center py-1 max-w-7xl mx-auto border-t border-gray-200 dark::border-gray-600">
          <p className="w-4/5 mx-auto my-5 text-sm leading-5">
            @ 2022, Chai Page Builder. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export const Footer5 = () => {
  return (
    <>
      <div className="pb-4">
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-7xl md:px-12 lg:max-w-screen-xl lg:px-8">
          <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <Link className="inline-flex items-center" href="/">
                <p className="text-xl font-bold tracking-wide uppercase text-slate-900 dark::text-slate-100">
                  SyrBookeepping
                </p>
              </Link>
              <div className="mt-2 lg:max-w-sm">
                <p>
                  In particular, the garbled words of lorem ipsum bear an
                  unmistakable resemblance to sections 1.10.32–33 of
                  Cicero&apos;s work, with the most notable passage excerpted
                  below
                </p>
                <p className="mt-4">
                  However, the “how and when” still remain something of a
                  mystery, with competing theories and timelines.
                </p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-base font-bold tracking-wide text-slate-900 dark::text-slate-100">
                Links
              </p>
              <div className="flex">
                <Link
                  className="transition-colors duration-300 text-primary hover:text-primary-800"
                  href="/refund-policy"
                >
                  Refund Policy
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="transition-colors duration-300 text-primary hover:text-primary-800"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </div>
              <div className="flex">
                <Link
                  className="transition-colors duration-300 text-primary hover:text-primary-800"
                  href="/terms-and-conditions"
                >
                  Terms and conditions
                </Link>
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark::text-slate-100">
                Follow Us on Twitter
              </p>
              <div className="flex items-center mt-1 space-x-3">
                <Link
                  className="text-gray-500 transition-colors duration-300 hover:text-primary"
                  href="https://twitter.com/"
                >
                  <span className="w-fit">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="text-gray-500 transition-colors duration-300 hover:text-primary"
                  href="/"
                ></Link>
                <Link
                  className="text-gray-500 transition-colors duration-300 hover:text-primary"
                  href="/"
                ></Link>
              </div>
              <p className="mt-3 font-bold text-slate-900 dark::text-slate-100">
                Feedback
              </p>
              <p className="mt-0 2xl:text-gray-200">
                We are listening. Please reach use at support@devmonks.in with
                your valuable feedback.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between pt-5 border-t lg:flex-row">
            <p className="text-sm">
              © Copyright 2022. SyrBookeepping. All rights reserved.
            </p>
            <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
              <p>Made in India</p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer6 = () => {
  return (
    <>
      <footer>
        <div className="py-6 bg-primary">
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="text-center md:text-left mb-3 md:mb-0">
                <span className="text-gray-100 font-bold uppercase tracking-widest">
                  Newsletter
                </span>
                <p className="text-indigo-200">Subscribe to our newsletter</p>
              </div>
              <form className="w-full md:max-w-md flex gap-2">
                <input className="w-full flex-1 text-white border border-white focus:ring rounded outline-none transition duration-100 px-3 py-2 bg-primary-400 ring-primary-300" />
                <button className="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 active:text-indigo-600 text-sm font-semibold text-center rounded outline-none transition duration-100 px-8 py-2 text-primary md:text-base">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-12 lg:pt-16">
          <div className="px-4 mx-auto max-w-7xl md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
              <div className="col-span-full lg:col-span-2">
                <div className="lg:-mt-2 mb-4">
                  <Link
                    className="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2"
                    href="#"
                  >
                    <span className="w-5 h-auto text-indigo-500">
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
                          <path d="M179.2 230.4l102.4 102.4-102.4 102.4L0 256 179.2 76.8l44.8 44.8-25.6 25.6-19.2-19.2-128 128 128 128 51.5-51.5-77.1-76.5 25.6-25.6zM332.8 76.8L230.4 179.2l102.4 102.4 25.6-25.6-77.1-76.5 51.5-51.5 128 128-128 128-19.2-19.2-25.6 25.6 44.8 44.8L512 256 332.8 76.8z"></path>
                        </svg>
                      </div>
                    </span>
                    <span> SyrBookeepping</span>
                  </Link>
                </div>
                <p className="text-gray-500 sm:pr-8 mb-6">
                  Filler text is dummy text which has no meaning however looks
                  very similar to real text
                </p>
                <div className="flex gap-4">
                  <Link
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
                  </Link>
                  <Link
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
                  </Link>
                  <Link
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
                  </Link>
                  <Link
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
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-gray-800 font-bold tracking-widest uppercase mb-4">
                  Products
                </p>
                <nav className="flex flex-col gap-4">
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Overview
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Solutions
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Pricing
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Customers
                    </Link>
                  </div>
                </nav>
              </div>
              <div>
                <p className="text-gray-800 font-bold tracking-widest uppercase mb-4">
                  Company
                </p>
                <nav className="flex flex-col gap-4">
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      About
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Investor Relations
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Jobs
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Press
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Blog
                    </Link>
                  </div>
                </nav>
              </div>
              <div>
                <p className="text-gray-800 font-bold tracking-widest uppercase mb-4">
                  Support
                </p>
                <nav className="flex flex-col gap-4">
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Documentation
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Chat
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      FAQ
                    </Link>
                  </div>
                </nav>
              </div>
              <div>
                <p className="text-gray-800 font-bold tracking-widest uppercase mb-4">
                  Legal
                </p>
                <nav className="flex flex-col gap-4">
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Terms of Service
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Privacy Policy
                    </Link>
                  </div>
                  <div>
                    <Link
                      className="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                      href="#"
                    >
                      Cookie settings
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center border-t py-8">
              © 2021 - Present SyrBookeepping. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
