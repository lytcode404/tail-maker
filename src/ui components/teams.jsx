import Image from "next/image";
import Link from "next/link";

export const Team1 = () => {
  return (
    <>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
            Meet the crew
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Creative people
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  David Forren
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  Founder / CEO
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Amil Evara
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  UI/UX Designer
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Ebele Egbuna
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  Support Consultant
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Maria Powers
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  Director of sales
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Delia Pawelke
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  Front-end Developer
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Tom Lowry
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  UI/UX Designer
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Louise Donadieu
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  Support Consultant
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            />
            <div className="sm:flex sm:flex-col sm:h-full">
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200">
                  Jeff Fisher
                </h3>
                <p className="mt-1 text-xs uppercase text-gray-500">
                  Project Manager
                </p>
              </div>
              <div className="mt-2 sm:mt-auto space-x-2.5">
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </span>
                </Link>
                <Link
                  className="inline-flex justify-center items-center text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  <span className="w-fit">
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid sm:flex sm:items-center gap-y-3 gap-x-4">
            <Image height="50" width="50" alt="alt" 
              className="rounded-lg w-20 h-20"
              src="https://preline.co/assets/img/160x160/img1.jpg"
            />
            <div>
              <h3 className="font-medium text-gray-800 dark:text-gray-200">
                We are hiring!
              </h3>
              <Link
                className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500"
                href="#"
              >
                Check out / Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Team2 = () => {
  return (
    <>
      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-14">
        <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-slate-900 text-3xl text-center font-bold dark:text-white sm:text-4xl">
            Our Team
          </h1>
          <p className="text-center text-lg mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
        </div>
        <div className="grid gap-10 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="relative pb-56 mb-4 rounded-global shadow lg:pb-64">
              <Image height="50" width="50" alt="alt" 
                className="absolute object-cover w-full h-full rounded-global bg-blue-100 object-center"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Lowell Witting
              </p>
              <p className="mb-5 text-sm">Product Manager</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
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
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
                >
                  <span className="w-fit">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded-global shadow lg:pb-64">
              <Image height="50" width="50" alt="alt" 
                className="absolute object-cover w-full h-full rounded-global bg-blue-100 object-center"
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Dana Haley
              </p>
              <p className="mb-5 text-sm">Design Team Lead</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
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
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
                >
                  <span className="w-fit">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded-global shadow lg:pb-64">
              <Image height="50" width="50" alt="alt" 
                className="absolute object-cover w-full h-full rounded-global bg-blue-100 object-center"
                src="https://images.unsplash.com/photo-1573600073955-f15b3b6caab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Eunice Ebert
              </p>
              <p className="mb-5 text-sm">Human Resources</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
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
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
                >
                  <span className="w-fit">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded-global shadow lg:pb-64">
              <Image height="50" width="50" alt="alt" 
                className="absolute object-cover w-full h-full rounded-global bg-blue-100 object-center"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                John Doe
              </p>
              <p className="mb-5 text-sm">Software Engineer</p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <Link
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
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
                  className="transition-colors duration-300 hover:text-deep-purple-accent-400"
                  href="/"
                >
                  <span className="w-fit">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Team3 = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl sm:py-14 md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl md:mx-auto">
            Awesome Team
          </h2>
          <p className="md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Oliver Aguilerra
              </p>
              <p>Product Manager</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Marta Clermont
              </p>
              <p>Design Team Lead</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Anthony Geek
              </p>
              <p>CTO, Lorem Inc.</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Alice Melbourne
              </p>
              <p>Human Resources</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Martin Garix
              </p>
              <p>Bad boy</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1521146764736-56c929d59c83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Andrew Larkin
              </p>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Sophie Denmo
              </p>
              <p>Designer UI/UX</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Benedict Caro
              </p>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="flex">
            <Image height="50" width="50" alt="alt" 
              className="object-cover w-20 h-20 mr-4 rounded-full shadow bg-blue-100"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Adam Molly
              </p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Team4 = () => {
  return (
    <>
      <div>
        <div className="text-center px-3 py-16 max-w-7xl mx-auto">
          <h1 className="font-black tracking-tight text-slate-900 text-3xl dark:text-slate-100 sm:text-4xl">
            We work as a Team!
          </h1>
          <p className="mt-3 text-lg max-w-lg mx-auto">
            Start growing in half the time with an all-in-one website builder -
            no more long hours spent on the boring stuff!
          </p>
          <div className="grid gap-2 mt-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="text-center">
              <Image height="50" width="50" alt="alt" 
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                src="https://images.pexels.com/photos/9968247/pexels-photo-9968247.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <h1 className="text-2xl font-bold dark:text-slate-200 text-slate-800">
                John Doe
              </h1>
              <p>CEO & CTO</p>
            </div>
            <div className="text-center">
              <Image height="50" width="50" alt="alt" 
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <h1 className="text-2xl font-bold dark:text-slate-200 text-slate-800">
                Doe John
              </h1>
              <p>Marketing Director</p>
            </div>
            <div className="text-center">
              <Image height="50" width="50" alt="alt" 
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <h1 className="text-2xl font-bold dark:text-slate-200 text-slate-800">
                Lita Hayden
              </h1>
              <p>Graphic Designer</p>
            </div>
            <div className="text-center">
              <Image height="50" width="50" alt="alt" 
                className="rounded-full w-60 mx-auto mb-4 bg-blue-100"
                src="https://images.pexels.com/photos/966067/pexels-photo-966067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <h1 className="text-2xl font-bold dark:text-slate-200 text-slate-800">
                William Sendrick
              </h1>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
