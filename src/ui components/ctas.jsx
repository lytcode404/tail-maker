import Link from "next/link";
import Image from "next/image";

export const Cta1 = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center px-4 py-12 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark::text-white sm:text-4xl">
            Try something really different right now.
          </h2>
          <p className="block max-w-2xl mt-4 text-lg text-gray-500 dark::text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
            recusandae tenetur iste quaerat voluptatibus quibusdam nam
            repudiandae
          </p>
          <div className="mt-6">
            <div className="inline-flex w-full overflow-hidden rounded-global shadow sm:w-auto sm:mx-3">
              <div className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 dark::to-gray-700 sm:w-auto">
                <span className="w-fit">
                  <svg
                    className="w-6 h-6 mx-2 fill-current"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <g>
                        <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105 C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302 c41.355,0,75,33.645,75,75V407z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166 l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664 L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498 C306.487,136.719,307.375,129.981,305.646,123.531z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65 c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341 H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344 c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z" />
                      </g>
                    </g>
                  </svg>
                </span>
                <p>Get it on the App Store</p>
              </div>
            </div>
            <div className="inline-flex w-full mt-4 overflow-hidden rounded-global shadow sm:w-auto sm:mx-3 sm:mt-0">
              <Link
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform bg-gradient-to-r from-indigo-500 to-indigo-800 hover:from-indigo-600 hover:to-indigo-800 sm:w-auto"
                href="#"
              >
                <span className="w-fit">
                  <svg
                    className="w-6 h-6 mx-2 fill-current"
                    viewBox="-28 0 512 512.00075"
                  >
                    <path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path>
                  </svg>
                </span>
                <p>Get it on Google Play</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const Cta2 = () => {
  return (
    <>
      <section className="text-gray-600 body-font -900 bg-primary-500 md:block">
        <div className="text-center py-10 px-4 bg-primary-500 md:w-10/12 md:mx-auto lg:w-2/3">
          <h1 className="flex-grow text-2xl font-medium title-font text-center ">
            Slow-carb next level shoindxgoitch ethical authentic, scenester
            sriracha forage.
          </h1>
          <div className="mt-5 xl:text-center xl:mt-6">
            <Link
              className="bg-green-500 inline-block px-6 py-3 rounded-global xl:p-3 xl:text-lg xl:font-medium text-white"
              href={`#`}
            >
              Try SYRBookkeeping
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export const Cta3 = () => {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="flex bg-gray-100 overflow-hidden rounded-global">
            <div className="sm:w-1/3 lg:w-1/2 hidden sm:block bg-gray-200 relative">
              <Image
                height="500"
                width="500"
                alt="alt"
                className="w-full h-full object-cover object-center absolute inset-0"
                src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750"
              />
            </div>
            <div className="w-full flex items-center p-4 dark::bg-slate-900 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
              <div className="w-full flex sm:block flex-col items-center">
                <div className="mb-4 sm:mb-8">
                  <h2 className="text-xl font-bold text-center text-primary sm:text-2xl sm:text-left lg:text-3xl">
                    Get the latest updates
                  </h2>
                  <p className="text-center sm:text-left">
                    Sign up for our newsletter
                  </p>
                </div>
                <form className="w-full max-w-md flex gap-2 mb-3 sm:mb-5">
                  <input className="w-full flex-1 bg-gray-white placeholder-gray-400 border border-gray-300 focus:ring ring-indigo-300 outline-none transition duration-100 px-3 py-2 rounded-global dark::text-black" />
                  <button className="inline-block hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-2 text-white bg-indigo-500 rounded-global md:text-base">
                    Send
                  </button>
                </form>
                <p className="text-xs text-center sm:text-left">
                  <span>By signing up to our newsletter you agree to our </span>
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                    href="#"
                  >
                    Term of Service
                  </Link>
                  <span> and </span>
                  <Link
                    className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                  <span>.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Cta4 = () => {
  return (
    <>
      <div className="py-11">
        <div className="text-center flex flex-col px-2 gap-y-4 sm:mx-auto sm:max-w-xl">
          <p>Get Started</p>
          <h1 className="font-bold text-3xl tracking-tighter text-slate-900 dark::text-slate-100 sm:text-4xl sm:max-w-md sm:mx-auto">
            Let&apos;s show the world what we can do!
          </h1>
          <p className="text-base">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms.
          </p>
          <button className="text-white px-8 py-2 max-w-fit mx-auto bg-green-500 rounded-global hover:scale-105">
            Buy Now for $49
          </button>
        </div>
      </div>
    </>
  );
};
export const Cta5 = () => {
  return (
    <>
      <Link
        className="p-12 sm:p-16 sm:py-10 lg:p-24 lg:py-16 xl:py-20"
        href={`#`}
      >
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-medium">
            Create your amazing website today!
          </p>
          <p className="mt-2 text-3xl font-bold dark::text-slate-100 sm:text-4xl xl:text-slate-900">
            Lorem ipsum dolor sit amet. Lorem, ipsum dolor.
          </p>
          <form className="mt-8 sm:flex">
            <div className="sm:flex-1">
              <label className="sr-only">
                <p>Email</p>
              </label>
              <input className="w-full p-3 border-2 border-gray-300 rounded-global" />
            </div>
            <button className="text-white px-8 py-2 flex items-center justify-between px-5 py-3 mt-4 font-medium bg-green-500 rounded-global mx-auto hover:bg-green-700 sm:w-auto sm:mt-0 sm:ml-4">
              <p>Sign up</p>
              <span className="w-fit">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="flex-shrink-0 w-4 h-4 ml-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </Link>
    </>
  );
};
export const Cta6 = () => {
  return (
    <>
      <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:pr-8">
            <h1 className="text-3xl font-bold text-slate-900 dark::text-slate-100 sm:text-4xl">
              Let&apos;s get started.
            </h1>
            <p className="text-lg mt-2 xl:mt-3 xl:text-xl">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum enim ipsam voluptatem
              quia voluptas.
            </p>
          </div>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-global shadow">
              <Link
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-global text-white bg-indigo-500 hover:bg-indigo-700"
                href="#"
              >
                Contact Us
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-global shadow">
              <Link
                className="inline-flex items-center justify-center px-5 py-3 border border-primary-500 text-base font-medium rounded-global bg-white text-primary hover:bg-indigo-50"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
