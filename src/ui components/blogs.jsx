import Image from "next/image";
import Link from "next/link";

export const Blog1 = () => {
  return (
    <>
      <div className="px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="flex bg-gray-100 p-8 rounded-sm">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Jul</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">18</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <Link
                  className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-deep-purple-800 text-primary-500"
                  href="#"
                >
                  Delevopment
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-slate-100"
                  href="#"
                >
                  Why I love Laravel
                </Link>
              </div>
              <p className="mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link className="mr-3" href="#">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&ampcs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  />
                </Link>
                <div>
                  <Link
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-gray-300"
                    href="#"
                  >
                    Petru Vîrtos
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600 dark:text-gray-300">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-100 p-8 rounded-sm">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">May</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">6</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <Link
                  className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-deep-purple-800 text-primary-500"
                  href="#"
                >
                  Food & Snacks
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-slate-100"
                  href="#"
                >
                  Pizza, should try it
                </Link>
              </div>
              <p className="mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link className="mr-3" href="#">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  />
                </Link>
                <div>
                  <Link
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-gray-300"
                    href="#"
                  >
                    Alex Stratulat
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600 dark:text-gray-300">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-100 p-8 rounded-sm">
            <div className="pt-1 mr-6 text-center">
              <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                <p className="text-sm text-blue-gray-700">Feb</p>
              </div>
              <div className="px-2">
                <p className="text-lg font-bold">27</p>
              </div>
            </div>
            <div>
              <div className="mb-2">
                <Link
                  className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 hover:text-deep-purple-800 text-primary-500"
                  href="#"
                >
                  Out of this world
                </Link>
              </div>
              <div className="mb-2">
                <Link
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-slate-100"
                  href="#"
                >
                  Whatever, just feed
                </Link>
              </div>
              <p className="mb-5">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <Link className="mr-3" href="#">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                    src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  />
                </Link>
                <div>
                  <Link
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 dark:text-gray-300"
                    href="#"
                  >
                    Susie the Cat
                  </Link>
                  <p className="text-sm font-medium leading-4 text-gray-600 dark:text-gray-300">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Blog2 = () => {
  return (
    <>
      <div className="py-10">
        <div className="px-4">
          <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
            <h1 className="text-black text-3xl text-center font-bold dark:text-white sm:text-4xl">
              Blog
            </h1>
            <p className="text-center text-lg mt-2">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="relative">
              <Image
                height="50"
                width="50"
                alt="alt"
                className="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                src="https://images.unsplash.com/photo-1637404230552-5ac6d76cb3a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="absolute right-3 left-3 bottom-3">
                <span className="bg-primary-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                  Trending
                </span>
                <div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                  <div className="flex items-center">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="w-10 h-10 rounded-full mr-3"
                      src="https://picsum.photos/500/300"
                    />
                    <p className="uppercase text-sm">John Doe</p>
                  </div>
                  <h1 className="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                    The best free stock photos, royalty free images
                  </h1>
                  <Link className="flex items-center gap-x-1.5" href="#">
                    Read more
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
                          viewBox="0 0 256 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                height="50"
                width="50"
                alt="alt"
                className="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                src="https://images.unsplash.com/photo-1562774439-23ae4c68ad6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="absolute right-3 left-3 bottom-3">
                <span className="bg-primary-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                  Trending
                </span>
                <div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                  <div className="flex items-center">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="w-10 h-10 rounded-full mr-3"
                      src="https://picsum.photos/500/300"
                    />
                    <p className="uppercase text-sm">John Doe</p>
                  </div>
                  <h1 className="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                    The best free stock photos, royalty free images
                  </h1>
                  <Link className="flex items-center gap-x-1.5" href="#">
                    Read more
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
                          viewBox="0 0 256 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                height="50"
                width="50"
                alt="alt"
                className="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                src="https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="absolute right-3 left-3 bottom-3">
                <span className="bg-primary-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                  Trending
                </span>
                <div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                  <div className="flex items-center">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="w-10 h-10 rounded-full mr-3"
                      src="https://picsum.photos/500/300"
                    />
                    <p className="uppercase text-sm">John Doe</p>
                  </div>
                  <h1 className="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                    The best free stock photos, royalty free images
                  </h1>
                  <Link className="flex items-center gap-x-1.5" href="#">
                    Read more
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
                          viewBox="0 0 256 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <Image
                height="50"
                width="50"
                alt="alt"
                className="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                src="https://images.unsplash.com/photo-1602335422296-6c6346ee71f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="absolute right-3 left-3 bottom-3">
                <span className="bg-primary-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                  Trending
                </span>
                <div className="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                  <div className="flex items-center">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="w-10 h-10 rounded-full mr-3"
                      src="https://picsum.photos/500/300"
                    />
                    <p className="uppercase text-sm">John Doe</p>
                  </div>
                  <h1 className="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                    The best free stock photos, royalty free images
                  </h1>
                  <Link className="flex items-center gap-x-1.5" href="#">
                    Read more
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
                          viewBox="0 0 256 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                        </svg>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Blog3 = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 font-bold text-center mb-4 text-3xl md:mb-6 md:text-4xl lg:text-3xl">
              Blog
            </h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 xl:gap-8">
            <div className="flex flex-col items-center border overflow-hidden rounded-global md:flex-row">
              <Link
                className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
                href="#"
              >
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  src="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80"
                />
              </Link>
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-gray-400 text-sm">July 19, 2021</span>
                <h2 className="text-gray-800 text-xl font-bold">
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    New trends in Tech
                  </Link>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <Link
                    className="hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100 text-primary-500"
                    href="#"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center border overflow-hidden rounded-global md:flex-row">
              <Link
                className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
                href="#"
              >
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                />
              </Link>
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-gray-400 text-sm">April 07, 2021</span>
                <h2 className="text-gray-800 text-xl font-bold">
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    Working with legacy stacks
                  </Link>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <Link
                    className="hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100 text-primary-500"
                    href="#"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center border overflow-hidden rounded-global md:flex-row">
              <Link
                className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
                href="#"
              >
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                />
              </Link>
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-gray-400 text-sm">March 15, 2021</span>
                <h2 className="text-gray-800 text-xl font-bold">
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    10 best smartphones for devs
                  </Link>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <Link
                    className="hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100 text-primary-500"
                    href="#"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center border overflow-hidden rounded-global md:flex-row">
              <Link
                className="group w-full md:w-32 lg:w-48 h-48 md:h-full block self-start shrink-0 bg-gray-100 overflow-hidden relative"
                href="#"
              >
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                  src="https://images.unsplash.com/photo-1625014053925-88bef4805a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </Link>
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-gray-400 text-sm">January 27, 2021</span>
                <h2 className="text-gray-800 text-xl font-bold">
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                    href="#"
                  >
                    8 High performance Notebooks
                  </Link>
                </h2>
                <p className="text-gray-500">
                  This is a section of some simple filler text, also known as
                  placeholder text.
                </p>
                <div>
                  <Link
                    className="hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100 text-primary-500"
                    href="#"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Blog4 = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto ">
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <Link
                  className="transition-colors duration-200 text-primary-500 hover:text-deep-purple-800"
                  href="/"
                >
                  Secrets
                </Link>
                <p>5 Jan 2020</p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="mb-3">
                <Link
                  className="inline-block transition-colors duration-200 text-3xl font-extrabold leading-none text-slate-900 hover:text-primary dark:text-slate-100"
                  href="/"
                >
                  Numquam nihil repellendus deleniti molestias quia
                </Link>
              </div>
              <p className="lg:mr-10">
                Well, the way they make shows is, they make one show. That
                show&apos;s called a pilot. Then they show that show to the
                people who make shows. Autem dolores odit sunt sint. Occaecati
                molestiae veritatis fugiat.
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <Link
                  className="transition-colors duration-200 text-primary-500 hover:text-deep-purple-800"
                  href="/"
                >
                  Repellendus
                </Link>
                <p>15 Sep 2020</p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="mb-3">
                <Link
                  className="inline-block transition-colors duration-200 text-3xl font-extrabold leading-none text-slate-900 hover:text-primary dark:text-slate-100"
                  href="/"
                >
                  Temporibus consequatur placeat aut laborum numquam
                </Link>
              </div>
              <p className="lg:mr-10">
                Chase ball of string eat plants, meow, and throw up because I
                ate plants going to catch the red dot today going. Facilis
                doloribus molestias accusamus voluptatum velit dicta error
                occaecati
              </p>
            </div>
          </div>
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <Link
                  className="transition-colors duration-200 text-primary-500 hover:text-deep-purple-800"
                  href="/"
                >
                  illum
                </Link>
                <p>28 Dec 2020</p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <div className="mb-3">
                <Link
                  className="inline-block transition-colors duration-200 text-3xl font-extrabold leading-none text-slate-900 hover:text-primary dark:text-slate-100"
                  href="/"
                >
                  Nam aperiam id velit autem consequuntur qui magnam velit
                </Link>
              </div>
              <p className="lg:mr-10">
                Sportacus andrew weatherall goose Refined gentlemen super mario
                des lynam alpha trion zap. Cupiditate earum
                cupiditate.\nExcepturi molestias aliquam doloremque.\nSit
                aliquid reiciendis possimus inventore minus in eveniet et
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Blog5 = () => {
  return (
    <>
      <section className="body-font py-20">
        <div className="px-5 mx-auto ">
          <div className="flex flex-wrap -m-4">
            <Link className="p-4 block md:w-1/3" href="#">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global dark:border-slate-700">
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-100">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap text-primary-500">
                    <span className="w-fit">
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </span>
                      <p>1.2K</p>
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </span>
                      <p>6</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="p-4 block md:w-1/3" href="#">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global dark:border-slate-700">
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                  src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-100">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <span className="w-fit">
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </span>
                      <p>1.2K</p>
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </span>
                      <p>6</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="p-4 block md:w-1/3" href="#">
              <div className="h-full border-2 border-gray-200 border-opacity-60 overflow-hidden rounded-global dark:border-slate-700">
                <Image
                  height="50"
                  width="50"
                  alt="alt"
                  className="w-full object-cover object-center transition-all ease-in duration-200 hover:scale-105 bg-gray-50 md:h-36 lg:h-48"
                  src="https://plus.unsplash.com/premium_photo-1661558928174-a04b38beba2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3 dark:text-gray-100">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <span className="w-fit">
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </span>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </span>
                      <p>1.2K</p>
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <span className="w-fit">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          stroke-width="2"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </span>
                      <p>6</p>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
