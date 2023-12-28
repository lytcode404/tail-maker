import Image from "next/image";
import Link from "next/link";

export const Hero1 = () => {
  return (
    <div className="mb-16">
      <div className="bg-gray-50 dark::bg-gray-900">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 sm:text-center md:mx-auto md:mb-12 lg:max-w-2xl xl:max-w-3xl">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 dark::text-slate-100 sm:text-4xl md:mx-auto lg:text-5xl">
              If everything seems under control, you’re not going fast enough.
            </h2>
            <p className="text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className="flex items-center sm:justify-center">
            <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary-500 rounded-global">
              Get started
            </button>
            <Link
              className="inline-flex items-center font-semibold transition-colors duration-200"
              href="#"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 h-1/2 bg-gray-50 dark::bg-gray-900"></div>
        <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow dark::bg-black dark::shadow-gray-700 sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full dark::bg-gray-900 bg-gray-100">
              <span className="text-2xl text-secondary-500">
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
            </div>
            <p className="font-bold tracking-wide">Speed</p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full dark::bg-gray-900 bg-gray-100">
              <span className="text-2xl text-secondary-500">
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
                    <path d="M5.8 309.7C2 292.7 0 275.5 0 258.3 0 135 99.8 35 223.1 35c16.6 0 33.3 2 49.3 5.5C149 87.5 51.9 186 5.8 309.7zm392.9-189.2C385 103 369 87.8 350.9 75.2c-149.6 44.3-266.3 162.1-309.7 312 12.5 18.1 28 35.6 45.2 49 43.1-151.3 161.2-271.7 312.3-315.7zm15.8 252.7c15.2-25.1 25.4-53.7 29.5-82.8-79.4 42.9-145 110.6-187.6 190.3 30-4.4 58.9-15.3 84.6-31.3 35 13.1 70.9 24.3 107 33.6-9.3-36.5-20.4-74.5-33.5-109.8zm29.7-145.5c-2.6-19.5-7.9-38.7-15.8-56.8C290.5 216.7 182 327.5 137.1 466c18.1 7.6 37 12.5 56.6 15.2C240 367.1 330.5 274.4 444.2 227.7z"></path>
                  </svg>
                </div>
              </span>
            </div>
            <p className="font-bold tracking-wide">Execution</p>
          </div>
          <div className="inline-block p-8 text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full dark::bg-gray-900 bg-gray-100">
              <span className="text-2xl text-secondary-500">
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
            </div>
            <p className="font-bold tracking-wide">Results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero2 = () => {
  return (
    <section>
      <div className="container px-6 py-16 mx-auto text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight dark::text-white lg:text-5xl">
            Waiting for perfect is never as smart as making progress.
          </h1>
          <p className="mt-6 text-gray-500 dark::text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
          <Link
            className="px-6 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-primary-500 rounded-global focus:outline-none inline-block md:mx-0 md:w-auto"
            href="#"
          >
            Start 14-Day free trial
          </Link>
          <p className="mt-3 text-sm text-gray-400">No credit card required</p>
        </div>
        <div className="flex justify-center mt-10">
          <Image
            height="500"
            width="500"
            alt="alt"
            src="https://picsum.photos/552"
          />
        </div>
      </div>
    </section>
  );
};

export const Hero3 = () => {
  return (
    <div className="md:py-16">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-5 flex-col py-14 md:flex-row lg:py-2 xl:py-0">
        <div className="flex flex-col gap-7 lg:w-8/12 xl:w-3/5">
          <h1 className="font-bold tracking-tight dark::text-slate-100 text-4xl text-slate-900 lg:text-5xl">
            Life is a game. Money is how we keep score.
          </h1>
          <p className="text-base lg:text-lg 2xl:text-gray-500">
            From its medieval origins to the digital era, learn everything there
            is to know about the ubiquitous&nbsplorem ipsum&nbsp;passage.&nbsp;
          </p>
          <Link
            className="py-2 w-48 text-center text-white px-5 rounded-global bg-primary-500 text-lg"
            href=""
          >
            Get Started
          </Link>
        </div>
        <div className="w-full lg:w-7/12">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="sm:mx-9 sm:-my-16 md:mx-0 md:my-0 lg:w-full"
            src="https://picsum.photos/502"
          />
        </div>
      </div>
    </div>
  );
};

export const Hero4 = () => {
  return (
    <div className="px-3 text-center flex flex-col gap-y-3 py-10">
      <div className="py-10 px-3 text-center flex flex-col gap-y-3">
        <div className="lg:mx-auto lg:max-w-3xl">
          <h1 className="font-black text-slate-900 dark::text-slate-100 lg:text-5xl">
            Forget about your competitors, just focus on your customers.
          </h1>
          <p className="px-3 text-lg my-4 sm:max-w-md sm:mx-auto lg:text-base lg:max-w-2xl">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered. Launch your campaign and benefit from
          </p>
          <div className="flex justify-evenly gap-x-1.5 my-3 flex-col gap-y-2.5 w-72 mx-auto sm:flex-row sm:justify-center sm:w-auto">
            <Link
              className="border px-6 py-2 rounded-global bg-primary-500 text-white border-primary-500 text-base lg:px-9"
              href="#"
            >
              Get Started
            </Link>
            <Link
              className="px-8 py-2 rounded-global border-primary-500 border text-primary-500 text-primary text-base lg:px-9"
              href="#"
            >
              See Features
            </Link>
          </div>
        </div>
        <Image
          height="500"
          width="500"
          alt="alt"
          className="mt-5 rounded-global lg:max-w-3xl lg:mx-auto"
          src="https://images.unsplash.com/photo-1635324944940-0c0a9c8f9bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
    </div>
  );
};

export const Hero5 = () => {
  return (
    <section>
      <div className="px-4 py-32 mx-auto lg:items-center lg:flex lg:max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 dark::text-slate-100 lg:text-5xl">
            <p>Let us find your</p>
            <p className="bg-gradient-to-r from-primary-500 to-green-500 bg-clip-text text-transparent">
              Forever Home.
            </p>
          </h1>
          <p className="mt-4 sm:leading-relaxed sm:text-xl lg:text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              className="block w-full px-12 py-3 text-sm font-medium text-white rounded-global shadow active:bg-red-500 bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring sm:w-auto"
              href="/get-started"
            >
              Get Started
            </Link>
            <Link
              className="block w-full px-12 py-3 text-sm font-medium text-primary-500 rounded-global shadow active:text-red-500 border-primary border hover:text-primary-700 focus:outline-none focus:ring dark::text-white sm:w-auto"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero6 = () => {
  return (
    <section className="py-10 xl:py-14">
      <div className="px-4 2xl:px-0 xl:max-w-7xl xl:mx-auto">
        <div className="mx-auto text-center lg:max-w-3xl">
          <p className="font-medium text-primary">
            Create your amazing website today!
          </p>
          <h1 className="mt-2 font-bold text-slate-900 text-4xl dark::text-slate-100 md:text-5xl">
            I have not failed. I’ve just found 10,000 ways that won’t work
          </h1>
          <p className="mt-5 sm:text-lg">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups
          </p>
          <form className="mt-8 sm:flex">
            <div className="gap-y-3 flex flex-col sm:flex-1 sm:flex-row sm:gap-x-3">
              <input className="w-full p-3 border-2 border-gray-300 rounded-global dark::bg-black dark::text-white dark::border-gray-500" />
              <input className="w-full p-3 border-2 border-gray-300 rounded-global dark::bg-black dark::text-white dark::border-gray-500" />
            </div>
            <button className="text-white px-8 py-2 flex items-center justify-between px-5 py-3 mt-4 font-medium bg-primary-500 rounded-global mx-auto hover:bg-primary-700 sm:w-auto sm:mt-0 sm:ml-4">
              <p>Sign up</p>
              <span className="w-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
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
          <div className="mt-16">
            <p>or, sign up with:</p>
            <div className="flex justify-center gap-x-3">
              <span className="text-xl text-primary-500">
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
                    <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"></path>
                  </svg>
                </div>
              </span>
              <span className="text-xl text-primary-500">
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
              <span className="text-xl text-primary-500">
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
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                  </svg>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero7 = () => {
  return (
    <div className="bg-slate-900">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
          <div className="flex justify-center">
            <Link
              className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
              href="#"
            >
              <p className="mr-2 inline-block text-white text-sm">
                Preline UI Figma is live.
              </p>
              <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <span className="w-fit">
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
              </span>
            </Link>
          </div>
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Now it&apos;s easier than ever to build products
            </h1>
          </div>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400">
              Preline is a large open-source project, crafted with Tailwind CSS
              framework by Hmlstream.
            </p>
          </div>
          <div className="text-center">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark::focus:ring-offset-gray-800"
              href="#"
            >
              <span>Get started </span>
              <span className="w-fit">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero8 = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark::text-white">
            Build Better Products
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark::text-gray-400">
            Introducing a new way for your brand to reach the creative
            community.
          </p>
          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full sm:w-auto">
              <p className="sr-only">Search</p>
              <input
                className="py-3 px-4 block w-full xl:min-w-[18rem] border-gray-200 shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark::bg-slate-900 dark::border-gray-700 dark::text-gray-400"
                name="hero-input"
                placeholder="Enter work email"
              />
            </div>
            <Link
              className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark::focus:ring-offset-gray-800"
              href="#"
            >
              Request demo
            </Link>
          </div>
          <div className="mt-6 lg:mt-12">
            <span className="text-xs font-medium text-gray-800 uppercase dark::text-gray-200">
              Trusted by:
            </span>
            <div className="mt-4 flex gap-x-8">
              <span className="w-fit">
                <svg
                  className="w-20 h-auto"
                  width="106"
                  height="36"
                  viewBox="0 0 106 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      d="M55.4732 9.52669C55.4732 10.6846 54.5258 11.6846 53.3153 11.6846C52.1048 11.6846 51.1574 10.7372 51.1574 9.52669C51.1574 8.31616 52.0521 7.36879 53.3153 7.36879C54.5785 7.47406 55.4732 8.42142 55.4732 9.52669ZM46.6837 13.8425C46.6837 14.053 46.6837 14.3688 46.6837 14.3688C46.6837 14.3688 45.6837 13.053 43.5258 13.053C39.9469 13.053 37.1574 15.7898 37.1574 19.5267C37.1574 23.2635 39.8942 26.0004 43.5258 26.0004C45.7363 26.0004 46.6837 24.6319 46.6837 24.6319V25.2109C46.6837 25.4741 46.8942 25.6846 47.1574 25.6846H49.789V13.3688C49.789 13.3688 47.3679 13.3688 47.1574 13.3688C46.8942 13.3688 46.6837 13.632 46.6837 13.8425ZM46.6837 21.7372C46.21 22.4741 45.21 23.1056 44.0521 23.1056C41.9469 23.1056 40.3679 21.7898 40.3679 19.5793C40.3679 17.3688 41.9995 16.053 44.0521 16.053C45.21 16.053 46.2627 16.6846 46.6837 17.4214V21.7372ZM51.789 13.3688H54.9469V25.6846H51.789V13.3688ZM98.789 13.053C96.6311 13.053 95.6311 14.3688 95.6311 14.3688V7.47406H92.4732V25.7372C92.4732 25.7372 94.8942 25.7372 95.1048 25.7372C95.3679 25.7372 95.5785 25.5267 95.5785 25.2635V24.6846C95.5785 24.6846 96.5785 26.053 98.7364 26.053C102.315 26.053 105.105 23.3162 105.105 19.5793C105.157 15.7898 102.368 13.053 98.789 13.053ZM98.2627 23.053C97.0521 23.053 96.1048 22.4214 95.6311 21.6846V17.2635C96.1048 16.632 97.1574 15.8951 98.2627 15.8951C100.368 15.8951 101.947 17.2109 101.947 19.4214C101.947 21.632 100.368 23.053 98.2627 23.053ZM90.8416 18.4214V25.7898H87.6837V18.7898C87.6837 16.7372 87.0521 15.9477 85.2627 15.9477C84.3153 15.9477 83.3153 16.4214 82.6837 17.1583V25.7372H79.5258V13.3688H81.9995C82.2627 13.3688 82.4732 13.5793 82.4732 13.8425V14.3688C83.3679 13.4214 84.6311 13.053 85.8416 13.053C87.21 13.053 88.3679 13.4214 89.2627 14.2109C90.4206 15.1583 90.8416 16.3162 90.8416 18.4214ZM71.8942 13.053C69.7364 13.053 68.7364 14.3688 68.7364 14.3688V7.47406H65.5785V25.7372C65.5785 25.7372 67.9995 25.7372 68.21 25.7372C68.4732 25.7372 68.6837 25.5267 68.6837 25.2635V24.6846C68.6837 24.6846 69.6837 26.053 71.8416 26.053C75.4206 26.053 78.21 23.3162 78.21 19.5793C78.2627 15.7898 75.4732 13.053 71.8942 13.053ZM71.3679 23.053C70.1574 23.053 69.21 22.4214 68.7364 21.6846V17.2635C69.21 16.632 70.2627 15.8951 71.3679 15.8951C73.4732 15.8951 75.0521 17.2109 75.0521 19.4214C75.0521 21.632 73.4732 23.053 71.3679 23.053ZM62.8416 13.053C63.789 13.053 64.2627 13.2109 64.2627 13.2109V16.1056C64.2627 16.1056 61.6311 15.2109 59.9995 17.1056V25.7372H56.8416V13.3688C56.8416 13.3688 59.2627 13.3688 59.4732 13.3688C59.7364 13.3688 59.9469 13.5793 59.9469 13.8425V14.3688C60.5785 13.6846 61.8942 13.053 62.8416 13.053ZM30.1574 24.6319C29.9995 24.2635 29.8416 23.7898 29.6837 23.4741C29.4206 22.8951 29.1574 22.3162 28.9469 21.7898L28.8942 21.7372C26.6311 16.8425 24.21 11.8425 21.6311 6.89511L21.5258 6.68458C21.2627 6.2109 20.9995 5.68458 20.7363 5.15827C20.4206 4.57932 20.1048 3.94774 19.5785 3.36879C18.5258 2.053 16.9995 1.31616 15.4206 1.31616C13.789 1.31616 12.3153 2.053 11.21 3.26353C10.6837 3.89511 10.3153 4.47406 9.99951 5.10564C9.73635 5.63195 9.47319 6.15827 9.21003 6.63195L9.10477 6.84248C6.57845 11.7372 4.10477 16.7372 1.84161 21.6846L1.78898 21.7372C1.57845 22.2635 1.3153 22.8425 1.05214 23.4214C0.894243 23.7898 0.736348 24.1583 0.578453 24.5793C0.1574 25.7898 -0.000494249 26.9477 0.210032 28.1056C0.578453 30.5793 2.21003 32.632 4.47319 33.5267C5.3153 33.8951 6.21003 34.053 7.10477 34.053C7.36793 34.053 7.68372 34.0004 7.94687 34.0004C9.05214 33.8951 10.1574 33.5267 11.21 32.8951C12.5785 32.1583 13.8416 31.053 15.2627 29.4741C16.6837 31.053 17.9995 32.1056 19.3153 32.8951C20.4206 33.5267 21.5258 33.8951 22.5785 34.0004C22.8416 34.053 23.1574 34.053 23.4206 34.053C24.3153 34.053 25.2627 33.8951 26.0521 33.5267C28.3679 32.632 29.9469 30.5267 30.3153 28.1056C30.6837 26.9477 30.5785 25.8425 30.1574 24.6319ZM15.3679 26.3162C13.5785 24.1056 12.4732 22.0004 12.0521 20.2109C11.8942 19.4741 11.8416 18.7898 11.9469 18.2109C11.9995 17.6846 12.21 17.2109 12.4732 16.8425C13.1048 15.9477 14.1574 15.4214 15.3679 15.4214C16.5785 15.4214 17.6837 15.9477 18.2627 16.8425C18.5258 17.2109 18.7363 17.6846 18.789 18.2109C18.8942 18.7898 18.8416 19.4741 18.6837 20.2109C18.2627 21.9477 17.1048 24.053 15.3679 26.3162ZM28.4206 27.8425C28.21 29.5267 27.0521 31.0004 25.4206 31.6846C24.6311 32.0004 23.789 32.1056 22.9469 32.0004C22.1048 31.8951 21.3153 31.632 20.4732 31.1583C19.3153 30.5267 18.1048 29.4741 16.7363 28.0004C18.8942 25.3688 20.21 22.8951 20.6837 20.7372C20.8942 19.7372 20.9469 18.7898 20.8416 17.9477C20.7363 17.1056 20.4206 16.3688 19.9469 15.7372C18.9469 14.2635 17.21 13.4214 15.3153 13.4214C13.4206 13.4214 11.6837 14.3162 10.6837 15.7372C10.21 16.3688 9.94687 17.1583 9.78898 17.9477C9.68372 18.7898 9.68372 19.7372 9.94687 20.7372C10.4206 22.8951 11.789 25.3688 13.8942 28.0004C12.5258 29.5267 11.3153 30.5267 10.1574 31.1583C9.3153 31.632 8.47319 31.8951 7.68372 32.0004C6.78898 32.1056 5.94687 31.9477 5.21003 31.6846C3.57845 31.053 2.47319 29.5267 2.21003 27.8425C2.10477 27.0004 2.1574 26.2109 2.52582 25.2635C2.63108 24.9477 2.78898 24.632 2.94687 24.2109C3.1574 23.6846 3.42056 23.1056 3.68372 22.5793L3.73635 22.5267C5.99951 17.632 8.42056 12.632 10.9469 7.78985L11.0521 7.57932C11.3153 7.10564 11.5785 6.57932 11.8416 6.053C12.1048 5.52669 12.4206 5.053 12.7363 4.63195C13.4206 3.84248 14.3679 3.42143 15.3679 3.42143C16.3679 3.42143 17.3153 3.84248 17.9995 4.63195C18.3679 5.053 18.6311 5.52669 18.8942 6.053C19.1574 6.52669 19.4206 7.053 19.6837 7.57932L19.789 7.78985C22.2627 12.6846 24.6837 17.6846 26.9469 22.5267V22.5793C27.21 23.1056 27.4206 23.6846 27.6837 24.2109C27.8416 24.5793 27.9995 24.9477 28.1048 25.2635C28.4732 26.1583 28.5785 27.0004 28.4206 27.8425Z"
                      fill="currentColor"
                      className="fill-gray-800 dark::fill-gray-200"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect
                        width="105.474"
                        height="35"
                        fill="currentColor"
                        className="fill-gray-800 dark::fill-gray-200"
                        transform="translate(0 0.26355)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="w-fit">
                <svg
                  className="w-20 h-auto"
                  width="140"
                  height="47"
                  viewBox="0 0 140 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.3991 8.15082C20.3991 9.61789 19.1416 10.8754 17.6745 10.8754C16.2075 10.8754 14.95 9.61789 14.95 8.15082C14.95 6.68375 16.2075 5.42627 17.6745 5.42627C19.1416 5.42627 20.3991 6.68375 20.3991 8.15082ZM17.6745 13.1109C16.0678 13.1109 14.8103 14.3684 14.8103 15.9752C14.8103 17.582 16.0678 18.8394 17.6745 18.8394C19.2813 18.8394 20.5388 17.582 20.5388 15.9752C20.5388 14.2985 19.2813 13.1109 17.6745 13.1109ZM17.6745 20.7257C16.0678 20.7257 14.7404 22.053 14.7404 23.6598C14.7404 25.2666 16.0678 26.5939 17.6745 26.5939C19.2813 26.5939 20.6087 25.2666 20.6087 23.6598C20.6785 22.053 19.2813 20.7257 17.6745 20.7257ZM17.6745 28.4802C16.0678 28.4802 14.8103 29.7376 14.8103 31.3444C14.8103 32.9512 16.0678 34.2087 17.6745 34.2087C19.2813 34.2087 20.5388 32.9512 20.5388 31.3444C20.5388 29.8075 19.2813 28.4802 17.6745 28.4802ZM17.6745 36.3744C16.2075 36.3744 14.95 37.6319 14.95 39.0989C14.95 40.566 16.2075 41.8235 17.6745 41.8235C19.1416 41.8235 20.3991 40.566 20.3991 39.0989C20.3991 37.6319 19.2115 36.3744 17.6745 36.3744ZM25.2195 12.7616C23.4729 12.7616 22.0059 14.2287 22.0059 15.9752C22.0059 17.7217 23.4729 19.1887 25.2195 19.1887C26.966 19.1887 28.433 17.7217 28.433 15.9752C28.433 14.2287 26.966 12.7616 25.2195 12.7616ZM25.2195 20.3764C23.4031 20.3764 21.8662 21.8434 21.8662 23.7297C21.8662 25.546 23.3332 27.083 25.2195 27.083C27.0358 27.083 28.5728 25.6159 28.5728 23.7297C28.5728 21.8434 27.0358 20.3764 25.2195 20.3764ZM25.2195 28.1309C23.4729 28.1309 22.0059 29.5979 22.0059 31.3444C22.0059 33.0909 23.4729 34.558 25.2195 34.558C26.966 34.558 28.433 33.0909 28.433 31.3444C28.433 29.5979 26.966 28.1309 25.2195 28.1309ZM32.9739 19.9572C31.0179 19.9572 29.2714 21.564 29.2714 23.6598C29.2714 25.6159 30.8781 27.3624 32.9739 27.3624C35.0698 27.3624 36.6765 25.7556 36.6765 23.6598C36.5368 21.564 34.93 19.9572 32.9739 19.9572ZM10.0598 13.4602C8.73243 13.4602 7.61466 14.578 7.61466 15.9053C7.61466 17.2327 8.73243 18.3504 10.0598 18.3504C11.3871 18.3504 12.5049 17.2327 12.5049 15.9053C12.5049 14.578 11.457 13.4602 10.0598 13.4602ZM10.0598 21.075C8.59271 21.075 7.47494 22.1927 7.47494 23.6598C7.47494 25.1269 8.59271 26.2446 10.0598 26.2446C11.5268 26.2446 12.6446 25.1269 12.6446 23.6598C12.6446 22.1927 11.5268 21.075 10.0598 21.075ZM10.0598 28.8295C8.73243 28.8295 7.61466 29.9472 7.61466 31.2746C7.61466 32.6019 8.73243 33.7197 10.0598 33.7197C11.3871 33.7197 12.5049 32.6019 12.5049 31.2746C12.5049 29.9472 11.457 28.8295 10.0598 28.8295ZM2.445 21.4941C1.18752 21.4941 0.209473 22.4722 0.209473 23.7297C0.209473 24.9871 1.18752 25.9652 2.445 25.9652C3.70249 25.9652 4.68053 24.9871 4.68053 23.7297C4.68053 22.4722 3.70249 21.4941 2.445 21.4941Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M64.4812 18.9092C64.2018 18.9092 63.9922 19.1886 63.9922 19.3982V38.7495C63.9922 39.0289 64.2716 39.2385 64.4812 39.2385H66.7866C67.066 39.2385 67.2756 38.9591 67.2756 38.7495V19.3982C67.2756 19.1188 66.9962 18.9092 66.7866 18.9092H64.4812Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M65.7389 10.7358C64.4815 10.7358 63.5034 11.7139 63.5034 12.9714C63.5034 14.2289 64.4815 15.2069 65.7389 15.2069C66.9964 15.2069 67.9745 14.2289 67.9745 12.9714C67.9745 11.7139 66.9266 10.7358 65.7389 10.7358Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M114.082 18.9092C113.803 18.9092 113.593 19.1886 113.593 19.3982V38.7495C113.593 39.0289 113.873 39.2385 114.082 39.2385H116.388C116.667 39.2385 116.877 38.9591 116.877 38.7495V19.3982C116.877 19.1188 116.597 18.9092 116.388 18.9092H114.082Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M115.2 10.7358C113.942 10.7358 112.964 11.7139 112.964 12.9714C112.964 14.2289 113.942 15.2069 115.2 15.2069C116.457 15.2069 117.435 14.2289 117.435 12.9714C117.435 11.7139 116.457 10.7358 115.2 10.7358Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M138.603 37.3525C138.743 37.2127 138.743 37.073 138.743 37.0031C138.743 36.8634 138.743 36.8634 138.743 36.8634C138.743 36.8634 138.743 36.7237 138.603 36.7237C138.603 36.7237 138.463 36.584 138.324 36.584C138.184 36.584 138.184 36.584 138.044 36.584H137.416V38.3305H137.695V37.7018H138.044L138.533 38.3305H138.813L138.184 37.562C138.463 37.6319 138.603 37.4922 138.603 37.3525ZM137.765 37.4922V36.8634H138.254C138.394 36.8634 138.533 36.8634 138.603 37.0031C138.743 37.0031 138.743 37.1429 138.743 37.2826C138.743 37.4223 138.743 37.562 138.603 37.562C138.463 37.562 138.324 37.7018 138.254 37.7018H137.765V37.4922Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M138.114 35.8853C137.276 35.8853 136.507 36.6537 136.507 37.492C136.507 38.3304 137.276 39.0988 138.114 39.0988C138.952 39.0988 139.721 38.3304 139.721 37.492C139.721 36.5839 139.022 35.8853 138.114 35.8853ZM138.114 38.9591C137.276 38.9591 136.647 38.3304 136.647 37.492C136.647 36.6537 137.276 36.025 138.114 36.025C138.952 36.025 139.581 36.6537 139.581 37.492C139.581 38.3304 138.883 38.9591 138.114 38.9591Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M83.6928 22.0531C83.9722 22.0531 84.1818 21.7737 84.1818 21.5641V19.2587C84.1818 18.9793 83.9024 18.7697 83.6928 18.7697H78.7327V11.3645C78.7327 11.0851 78.4533 10.8755 78.2437 10.8755H75.9383C75.6588 10.8755 75.4493 11.1549 75.4493 11.3645V18.7697H73.0042C72.7247 18.7697 72.5151 19.0491 72.5151 19.2587V21.5641C72.5151 21.8436 72.7946 22.0531 73.0042 22.0531H75.4493V33.2308C75.4493 36.6539 77.7547 38.8895 81.108 38.8895H83.5531C83.8325 38.8895 84.0421 38.61 84.0421 38.4004V36.0951C84.0421 35.8156 83.7626 35.606 83.5531 35.606H81.4573C79.8505 35.606 78.7327 34.4883 78.7327 32.7418V21.9833L83.6928 22.0531Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M132.735 22.0531C133.014 22.0531 133.224 21.7737 133.224 21.5641V19.2587C133.224 18.9793 132.944 18.7697 132.735 18.7697H127.775V11.3645C127.775 11.0851 127.495 10.8755 127.286 10.8755H124.98C124.701 10.8755 124.491 11.1549 124.491 11.3645V18.7697H122.046C121.767 18.7697 121.557 19.0491 121.557 19.2587V21.5641C121.557 21.8436 121.837 22.0531 122.046 22.0531H124.491V33.2308C124.491 36.6539 126.797 38.8895 130.15 38.8895H132.595C132.874 38.8895 133.084 38.61 133.084 38.4004V36.0951C133.084 35.8156 132.805 35.606 132.595 35.606H130.36C128.753 35.606 127.635 34.4883 127.635 32.7418V21.9833L132.735 22.0531Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M49.8106 22.053V38.5401C49.8106 38.8195 50.09 39.0291 50.2996 39.0291H52.605C52.8844 39.0291 53.094 38.7497 53.094 38.5401V22.053H58.5431C58.8226 22.053 59.0321 21.7736 59.0321 21.564V19.2586C59.0321 18.9792 58.7527 18.7696 58.5431 18.7696H53.094V14.4383C53.094 12.6918 54.3515 11.5041 55.8186 11.5041H58.5431C58.8226 11.5041 59.0321 11.2247 59.0321 11.0151V8.70973C59.0321 8.43028 58.7527 8.2207 58.5431 8.2207H55.9583C52.5351 8.2207 49.8106 11.085 49.8106 14.3684V18.7696H47.3655C47.086 18.7696 46.8765 19.049 46.8765 19.2586V21.564C46.8765 21.8435 47.1559 22.053 47.3655 22.053H49.8106Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M106.258 21.2148C104.442 19.2587 101.857 18.1409 99.1321 18.1409C96.5473 18.1409 93.9625 19.2587 92.3557 20.8655V8.57008C92.3557 8.29064 92.0763 8.08105 91.8667 8.08105H89.5613C89.2818 8.08105 89.0723 8.3605 89.0723 8.57008V28.8994C89.0723 36.4443 94.1022 39.7278 99.0623 39.7278C103.952 39.7278 109.052 36.3745 109.052 28.8994C109.052 25.8954 108.074 23.1709 106.258 21.2148ZM99.0623 36.584C94.1022 36.584 92.2858 32.6719 92.2858 28.9693C92.2858 24.4284 95.0104 21.4244 99.0623 21.4244C103.114 21.4244 105.839 24.4982 105.839 28.9693C105.769 32.6719 104.022 36.584 99.0623 36.584Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                </svg>
              </span>
              <span className="w-fit">
                <svg
                  className="w-20 h-auto"
                  width="200"
                  height="67"
                  viewBox="0 0 200 67"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.6108 11.7537C45.9082 11.7537 47.1058 11.3545 48.0041 10.5561C48.9023 9.75767 49.4013 8.65988 49.4013 7.46227C49.4013 6.16487 48.9023 5.16686 48.0041 4.26866C47.1058 3.47026 46.008 3.07104 44.6108 3.07104C43.3134 3.07104 42.2156 3.47026 41.3174 4.36846C40.4192 5.26666 40.02 6.26467 40.02 7.46227C40.02 8.65988 40.4192 9.65787 41.3174 10.5561C42.2156 11.3545 43.3134 11.7537 44.6108 11.7537Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M73.3534 0.176758V20.6358H73.1538C72.8544 20.1368 72.3554 19.6378 71.8564 19.1388C71.2576 18.6398 70.559 18.1408 69.7606 17.7416C68.9622 17.3424 68.064 16.9432 66.9662 16.6438C65.8684 16.3444 64.6708 16.2446 63.3734 16.2446C61.2776 16.2446 59.3814 16.6438 57.6847 17.4422C55.9881 18.2406 54.4911 19.3384 53.1937 20.7356C51.9961 22.1328 50.9981 23.7297 50.2995 25.6259C49.6009 27.5221 49.3015 29.5181 49.3015 31.6139C49.3015 33.7097 49.6009 35.8055 50.2995 37.6019C50.8983 39.4981 51.8963 41.0949 53.1937 42.4921C54.4911 43.8893 55.9881 44.9871 57.6847 45.7855C59.4812 46.5839 61.4772 46.9831 63.7726 46.9831C65.8684 46.9831 67.7646 46.5839 69.561 45.7855C71.3574 44.9871 72.7546 43.6897 73.8524 41.8933H73.9522V46.0849H80.8384V0.176758H73.3534ZM73.054 34.8075C72.6548 35.9053 72.056 36.8035 71.3574 37.6019C70.559 38.4003 69.6608 39.0989 68.6628 39.4981C67.565 39.9971 66.3674 40.1967 65.07 40.1967C63.7726 40.1967 62.575 39.9971 61.4772 39.4981C60.3794 38.9991 59.4812 38.4003 58.7826 37.6019C57.9841 36.8035 57.4851 35.9053 57.0859 34.8075C56.6867 33.7097 56.4871 32.7117 56.4871 31.5141C56.4871 30.4163 56.6867 29.3185 57.0859 28.2207C57.4851 27.1229 58.0839 26.2247 58.7826 25.4263C59.581 24.6279 60.4792 23.9293 61.4772 23.5301C62.575 23.031 63.7726 22.8314 65.07 22.8314C66.3674 22.8314 67.565 23.031 68.6628 23.5301C69.7606 24.0291 70.6588 24.6279 71.3574 25.4263C72.1558 26.2247 72.6548 27.1229 73.054 28.2207C73.4532 29.3185 73.6528 30.4163 73.6528 31.5141C73.6528 32.6119 73.4532 33.7097 73.054 34.8075Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M130.739 19.9373L123.553 27.1229V40.3963H123.353C122.954 39.8973 122.555 39.3983 121.956 38.8993C121.357 38.4003 120.659 37.9013 119.86 37.5021C119.062 37.1029 118.164 36.7037 117.066 36.4043C116.367 36.2047 115.469 36.1049 114.571 36.0051L99.501 51.2746C99.501 53.3704 99.8004 55.3664 100.499 57.2626C101.098 59.1588 102.096 60.7556 103.393 62.1528C104.691 63.55 106.188 64.6478 107.884 65.3464C109.681 66.1448 111.677 66.544 113.872 66.544C115.968 66.544 117.864 66.1448 119.661 65.3464C121.457 64.548 122.854 63.2506 123.852 61.4542H123.952V65.8454H130.838V19.9373H130.739ZM123.253 54.4682C122.854 55.566 122.255 56.4642 121.557 57.2626C120.858 58.061 119.86 58.7596 118.862 59.1588C117.764 59.6578 116.667 59.8574 115.269 59.8574C113.972 59.8574 112.774 59.6578 111.677 59.1588C110.579 58.6598 109.681 58.061 108.982 57.2626C108.283 56.4642 107.685 55.566 107.285 54.4682C106.886 53.3704 106.687 52.3724 106.687 51.1748C106.687 50.077 106.886 48.9792 107.285 47.8814C107.685 46.7836 108.283 45.8854 108.982 45.087C109.681 44.2886 110.579 43.5899 111.677 43.1907C112.774 42.6917 113.872 42.4921 115.269 42.4921C116.567 42.4921 117.764 42.6917 118.862 43.1907C119.96 43.6897 120.858 44.2886 121.557 45.087C122.255 45.8854 122.854 46.7836 123.253 47.8814C123.653 48.9792 123.852 50.077 123.852 51.1748C123.852 52.3724 123.653 53.4702 123.253 54.4682Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M162.275 44.9872C161.477 43.091 160.279 41.4941 158.882 40.1967C157.485 38.8993 155.788 37.8015 153.892 37.1029C151.996 36.4043 149.9 36.0051 147.704 36.0051C145.509 36.0051 143.513 36.4043 141.517 37.1029C139.621 37.8015 137.924 38.8993 136.527 40.1967C135.13 41.4941 134.032 43.091 133.134 44.9872C132.335 46.8834 131.936 48.9792 131.936 51.2746C131.936 53.57 132.335 55.6658 133.134 57.562C133.932 59.4582 135.13 61.055 136.527 62.3524C137.924 63.6498 139.621 64.7476 141.517 65.4462C143.413 66.1448 145.509 66.544 147.704 66.544C149.9 66.544 151.896 66.1448 153.892 65.4462C155.788 64.7476 157.485 63.6498 158.882 62.3524C160.279 61.055 161.377 59.4582 162.275 57.562C163.074 55.6658 163.473 53.57 163.473 51.2746C163.573 48.9792 163.174 46.8834 162.275 44.9872ZM155.689 54.4682C155.289 55.566 154.691 56.4642 153.992 57.2626C153.293 58.061 152.395 58.7596 151.297 59.1588C150.2 59.6578 149.102 59.8574 147.704 59.8574C146.407 59.8574 145.209 59.6578 144.112 59.1588C143.014 58.6598 142.116 58.061 141.417 57.2626C140.718 56.4642 140.12 55.566 139.72 54.4682C139.321 53.3704 139.122 52.3724 139.122 51.1748C139.122 50.077 139.321 48.9792 139.72 47.8814C140.12 46.7836 140.619 45.8854 141.417 45.087C142.116 44.2886 143.014 43.59 144.112 43.1908C145.209 42.6918 146.307 42.4922 147.704 42.4922C149.002 42.4922 150.2 42.6918 151.297 43.1908C152.395 43.6898 153.293 44.2886 153.992 45.087C154.691 45.8854 155.289 46.7836 155.689 47.8814C156.088 48.9792 156.287 50.077 156.287 51.1748C156.287 52.3724 156.088 53.4702 155.689 54.4682Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M186.128 52.6718C185.329 51.574 184.431 50.6758 183.234 50.077C182.036 49.4782 180.838 48.9792 179.441 48.6798C178.144 48.3804 176.946 48.081 175.649 47.7816C174.451 47.4822 173.553 47.1828 172.755 46.7836C171.956 46.3844 171.557 45.6858 171.557 44.8874C171.557 43.7896 172.056 42.9912 172.954 42.4922C173.852 41.9932 174.85 41.7936 175.848 41.7936C178.244 41.7936 180.14 42.7916 181.537 44.7876L186.427 40.3963C185.23 38.7995 183.733 37.6019 181.836 37.0031C179.94 36.3045 178.044 36.0051 176.048 36.0051C174.551 36.0051 173.154 36.2047 171.757 36.5041C170.359 36.9033 169.062 37.4023 167.964 38.2007C166.866 38.9991 165.968 39.9971 165.369 41.0949C164.671 42.2926 164.371 43.6898 164.371 45.2866C164.371 47.1828 164.771 48.58 165.569 49.6778C166.367 50.7756 167.266 51.574 168.463 52.1728C169.661 52.7716 170.858 53.1708 172.256 53.4702C173.653 53.7696 174.85 53.9692 176.048 54.3684C177.246 54.6678 178.144 55.067 178.942 55.566C179.741 56.065 180.14 56.7636 180.14 57.7616C180.14 58.3604 179.94 58.8594 179.641 59.2586C179.341 59.6578 178.942 60.057 178.443 60.3564C177.944 60.6558 177.445 60.8554 176.846 60.9552C176.248 61.055 175.749 61.1548 175.25 61.1548C173.753 61.1548 172.455 60.8554 171.357 60.1568C170.26 59.4582 169.262 58.6598 168.363 57.562L163.473 62.1528C164.97 63.8494 166.667 65.047 168.563 65.6458C170.459 66.2446 172.555 66.6438 174.85 66.6438C176.248 66.6438 177.645 66.544 179.142 66.2446L187.425 57.9612C187.425 57.7616 187.425 57.562 187.425 57.3624C187.325 55.2666 186.926 53.7696 186.128 52.6718Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M33.8322 17.3425L26.0478 37.5022H25.948L18.2634 17.3425L12.6746 22.9313L22.1556 46.085H29.8402L40.9181 18.1409V46.085H48.2035V17.3425H33.8322Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                  <path
                    d="M108.483 34.4084V29.4183C108.483 28.7197 108.483 27.9213 108.383 27.0231C108.383 26.1249 108.184 25.1269 107.984 24.2287C107.785 23.2307 107.385 22.3325 106.886 21.3345C106.387 20.4363 105.689 19.5381 104.691 18.8395C103.793 18.1409 102.595 17.5421 101.198 17.0431C99.8005 16.5441 98.0041 16.3445 96.0081 16.3445C93.7127 16.3445 91.5171 16.7437 89.3215 17.4423C87.1258 18.1409 85.2296 19.3385 83.6328 21.0351L87.4252 24.8275C88.4233 23.9293 89.5211 23.1309 90.9183 22.6319C92.2157 22.1329 93.7127 21.8335 95.2097 21.8335C97.1059 21.8335 98.7027 22.3325 100 23.2307C101.298 24.1289 101.896 25.5261 101.896 27.3225V28.1209H100.1C98.9023 28.1209 97.6049 28.1209 96.2077 28.2207C94.8105 28.3205 93.5131 28.4203 92.1159 28.6199C90.7187 28.8195 89.4213 29.2187 88.2237 29.6179C86.9262 30.0171 85.8284 30.6159 84.9302 31.4143C83.9322 32.1129 83.2336 33.1109 82.6348 34.2087C82.036 35.3066 81.8364 36.7038 81.8364 38.2008C81.8364 39.6978 82.1358 40.8954 82.7346 41.9932C83.3334 43.091 84.1318 43.9892 85.1298 44.6878C86.1278 45.3864 87.2256 45.9852 88.523 46.2846C89.8205 46.6838 91.1179 46.7836 92.4153 46.7836C94.0121 46.7836 95.4093 46.584 96.8065 46.085L108.483 34.4084ZM101.497 34.7078C101.497 36.8036 100.898 38.4004 99.7007 39.598C98.5031 40.7956 96.7067 41.3944 94.1119 41.3944C93.5131 41.3944 92.9143 41.2946 92.3155 41.1948C91.7167 41.095 91.1179 40.7956 90.7187 40.4962C90.2197 40.1968 89.8205 39.7976 89.5211 39.2986C89.2217 38.7996 89.0221 38.3006 89.0221 37.602C89.0221 36.5042 89.4213 35.7058 90.2197 35.107C91.0181 34.5082 91.9163 34.109 93.0141 33.8096C94.1119 33.5101 95.3095 33.3105 96.5071 33.2107C97.8045 33.1109 98.9023 33.1109 99.9003 33.1109H101.397V34.7078H101.497Z"
                    fill="currentColor"
                    className="fill-gray-800 dark::fill-gray-200"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full rounded-xl"
            src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export const Hero9 = () => {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <div>
          <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark::text-white">
            <span>Start your journey with </span>
            <span className="text-blue-600">Preline</span>
          </h1>
          <p className="mt-3 text-lg text-gray-800 dark::text-gray-400">
            Hand-picked professionals and expertly crafted components, designed
            for any kind of entrepreneur.
          </p>
          <div className="mt-7 grid gap-3 w-full sm:inline-flex">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark::focus:ring-offset-gray-800"
              href="#"
            >
              <span>Get started </span>
              <span className="w-fit">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </span>
            </Link>
            <Link
              className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark::border-gray-800 dark::hover:border-gray-600 dark::shadow-slate-700/[.7] dark::text-white dark::focus:ring-gray-700 dark::focus:ring-offset-gray-800"
              href="#"
            >
              Contact sales team
            </Link>
          </div>
          <div className="mt-6 lg:mt-10 grid grid-cols-2 gap-x-5">
            <div className="py-5">
              <div className="flex space-x-1">
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-800 dark::text-gray-200">
                <span className="font-bold">4.6</span>
                <span>/5 - from 12k reviews</span>
              </p>
              <div className="mt-5">
                <span className="w-fit">
                  <svg
                    className="h-auto w-16 text-gray-800 dark::text-white"
                    width="80"
                    height="27"
                    viewBox="0 0 80 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.558 9.74046H11.576V12.3752H17.9632C17.6438 16.0878 14.5301 17.7245 11.6159 17.7245C7.86341 17.7245 4.58995 14.7704 4.58995 10.6586C4.58995 6.62669 7.70373 3.51291 11.6159 3.51291C14.6498 3.51291 16.4063 5.42908 16.4063 5.42908L18.2426 3.51291C18.2426 3.51291 15.8474 0.878184 11.4961 0.878184C5.94724 0.838264 1.67578 5.50892 1.67578 10.5788C1.67578 15.5289 5.70772 20.3592 11.6558 20.3592C16.8854 20.3592 20.7177 16.8063 20.7177 11.4969C20.7177 10.3792 20.558 9.74046 20.558 9.74046Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M27.8621 7.78442C24.1894 7.78442 21.5547 10.6587 21.5547 14.012C21.5547 17.4451 24.1096 20.3593 27.9419 20.3593C31.415 20.3593 34.2094 17.7645 34.2094 14.0918C34.1695 9.94011 30.896 7.78442 27.8621 7.78442ZM27.902 10.2994C29.6984 10.2994 31.415 11.7764 31.415 14.0918C31.415 16.4072 29.7383 17.8842 27.902 17.8842C25.906 17.8842 24.3491 16.2874 24.3491 14.0519C24.3092 11.8962 25.8661 10.2994 27.902 10.2994Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M41.5964 7.78442C37.9238 7.78442 35.2891 10.6587 35.2891 14.012C35.2891 17.4451 37.844 20.3593 41.6763 20.3593C45.1493 20.3593 47.9438 17.7645 47.9438 14.0918C47.9038 9.94011 44.6304 7.78442 41.5964 7.78442ZM41.6364 10.2994C43.4328 10.2994 45.1493 11.7764 45.1493 14.0918C45.1493 16.4072 43.4727 17.8842 41.6364 17.8842C39.6404 17.8842 38.0835 16.2874 38.0835 14.0519C38.0436 11.8962 39.6004 10.2994 41.6364 10.2994Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M55.0475 7.82434C51.6543 7.82434 49.0195 10.7784 49.0195 14.0918C49.0195 17.8443 52.0934 20.3992 54.9676 20.3992C56.764 20.3992 57.6822 19.7205 58.4407 18.8822V20.1198C58.4407 22.2754 57.1233 23.5928 55.1273 23.5928C53.2111 23.5928 52.2531 22.1557 51.8938 21.3573L49.4587 22.3553C50.297 24.1517 52.0135 26.0279 55.0874 26.0279C58.4407 26.0279 60.9956 23.9122 60.9956 19.481V8.18362H58.3608V9.26147C57.6423 8.38322 56.5245 7.82434 55.0475 7.82434ZM55.287 10.2994C56.9237 10.2994 58.6403 11.7365 58.6403 14.1317C58.6403 16.6068 56.9636 17.9241 55.2471 17.9241C53.4507 17.9241 51.774 16.4471 51.774 14.1716C51.8139 11.6966 53.5305 10.2994 55.287 10.2994Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M72.8136 7.78442C69.62 7.78442 66.9453 10.2994 66.9453 14.0519C66.9453 18.004 69.9393 20.3593 73.093 20.3593C75.7278 20.3593 77.4044 18.8822 78.3625 17.6048L76.1669 16.1277C75.608 17.006 74.6499 17.8443 73.093 17.8443C71.3365 17.8443 70.5381 16.8862 70.0192 15.9281L78.4423 12.4152L78.0032 11.3772C77.1649 9.46107 75.2886 7.78442 72.8136 7.78442ZM72.8934 10.2196C74.0511 10.2196 74.8495 10.8184 75.2487 11.5768L69.6599 13.9321C69.3405 12.0958 71.097 10.2196 72.8934 10.2196Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M62.9531 19.9999H65.7076V1.47693H62.9531V19.9999Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <div className="py-5">
              <div className="flex space-x-1">
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="w-fit">
                  <svg
                    className="h-4 w-4 text-gray-800 dark::text-gray-200"
                    width="51"
                    height="51"
                    viewBox="0 0 51 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z"
                      fill="transparent"
                    ></path>
                    <path
                      d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-800 dark::text-gray-200">
                <span className="font-bold">4.8</span>
                <span>/5 - from 5k reviews</span>
              </p>
              <div className="mt-5">
                <span className="w-fit">
                  <svg
                    className="h-auto w-16 text-gray-800 dark::text-white"
                    width="110"
                    height="28"
                    viewBox="0 0 110 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M66.6601 8.35107C64.8995 8.35107 63.5167 8.72875 62.1331 9.48265C62.1331 5.4582 62.1331 1.81143 62.2594 0.554199L53.8321 2.06273V2.81736L54.7124 2.94301C55.8433 3.19431 56.2224 3.82257 56.4715 5.33255C56.725 8.35107 56.5979 24.4496 56.4715 27.0912C58.7354 27.5945 61.1257 27.9722 63.5159 27.9722C70.1819 27.9722 74.2064 23.8213 74.2064 17.281C74.2064 12.1249 70.9366 8.35107 66.6601 8.35107ZM63.7672 26.5878C63.2639 26.5878 62.6342 26.5878 62.258 26.4629C62.1316 24.7023 62.0067 17.281 62.1316 10.7413C62.8862 10.4893 63.3888 10.3637 64.0185 10.3637C66.7872 10.3637 68.2965 13.6335 68.2965 17.6572C68.2957 22.6898 66.4088 26.5878 63.7672 26.5878ZM22.1363 1.0568H0V2.18838L1.25796 2.31403C2.89214 2.56533 3.52184 3.57127 3.77242 5.9608C4.15082 10.4886 4.02445 18.6646 3.77242 22.5619C3.52112 24.9522 2.89287 26.0845 1.25796 26.2087L0 26.4615V27.4674H14.2123V26.4615L12.703 26.2087C11.0681 26.0838 10.4392 24.9522 10.1879 22.5619C10.0615 20.9263 9.93583 18.2847 9.93583 15.0156L12.9543 15.1413C14.8413 15.1413 15.7208 16.6505 16.0985 18.7881H17.2308V9.86106H16.0985C15.7201 11.9993 14.8413 13.5078 12.9543 13.5078L9.93655 13.6342C9.93655 9.35773 10.0622 5.33328 10.1886 2.94374H14.59C17.9869 2.94374 19.7475 5.08125 21.0047 8.85513L22.2626 8.47745L22.1363 1.0568Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M29.3053 8.09998C35.5944 8.09998 38.7385 12.3764 38.7385 18.0358C38.7385 23.4439 35.2167 27.9731 28.9276 27.9731C22.6393 27.9731 19.4951 23.6959 19.4951 18.0358C19.4951 12.6277 23.0162 8.09998 29.3053 8.09998ZM28.9276 9.35793C26.1604 9.35793 25.4058 13.1311 25.4058 18.0358C25.4058 22.8149 26.6637 26.7137 29.1796 26.7137C32.0703 26.7137 32.8264 22.9405 32.8264 18.0358C32.8264 13.2567 31.5699 9.35793 28.9276 9.35793ZM75.8403 18.1622C75.8403 13.0054 79.1101 8.09998 85.5248 8.09998C90.8057 8.09998 93.3224 11.9995 93.3224 17.1555H81.6253C81.4989 21.8089 83.7628 25.2051 88.2913 25.2051C90.3038 25.2051 91.3098 24.7033 92.5685 23.8223L93.0703 24.4505C91.8124 26.2111 89.0459 27.9731 85.5248 27.9731C79.8647 27.9724 75.8403 23.9479 75.8403 18.1622ZM81.6253 15.7726L87.5366 15.6463C87.5366 13.1311 87.159 9.35793 85.0214 9.35793C82.8839 9.35793 81.7502 12.8791 81.6253 15.7726ZM108.291 9.10663C106.782 8.47693 104.77 8.09998 102.506 8.09998C97.8538 8.09998 94.9594 10.8665 94.9594 14.137C94.9594 17.4075 97.0955 18.7904 100.118 19.7971C103.261 20.9279 104.142 21.8089 104.142 23.3182C104.142 24.8275 103.01 26.2103 100.997 26.2103C98.6084 26.2103 96.8464 24.8275 95.4635 21.0536L94.5825 21.3063L94.7089 26.84C96.2181 27.4683 98.9846 27.9724 101.375 27.9724C106.28 27.9724 109.425 25.4557 109.425 21.5576C109.425 18.9161 108.041 17.4075 104.771 16.1489C101.249 14.766 99.992 13.8857 99.992 12.2501C99.992 10.6152 101.126 9.48286 102.635 9.48286C104.897 9.48286 106.407 10.8665 107.54 14.2627L108.42 14.0114L108.291 9.10663ZM55.0883 8.6033C52.9508 7.3468 49.1769 7.97433 47.1651 12.5028L47.29 8.1007L38.8642 9.73561V10.4902L39.7444 10.6159C40.8775 10.7423 41.3794 11.3705 41.5057 13.0062C41.757 16.0247 41.6314 21.3078 41.5057 23.9486C41.3794 25.4564 40.8775 26.2111 39.7444 26.3374L38.8642 26.4638V27.4697H50.5606V26.4638L49.0513 26.3374C47.7941 26.2111 47.4164 25.4564 47.29 23.9486C47.0387 21.5584 47.0387 16.7793 47.1651 13.7608C47.7933 12.8798 50.5606 12.1259 53.0757 13.7608L55.0883 8.6033Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative ml-4">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full rounded-md"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
          />
          <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark::from-slate-800 dark::via-slate-900/0 dark::to-slate-900/0"></div>
          <div className="absolute bottom-0 left-0">
            <span className="w-fit">
              <svg
                className="w-2/3 ml-auto h-auto text-white dark::text-slate-900"
                width="630"
                height="451"
                viewBox="0 0 630 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="531"
                  y="352"
                  width="99"
                  height="99"
                  fill="currentColor"
                ></rect>
                <rect
                  x="140"
                  y="352"
                  width="106"
                  height="99"
                  fill="currentColor"
                ></rect>
                <rect
                  x="482"
                  y="402"
                  width="64"
                  height="49"
                  fill="currentColor"
                ></rect>
                <rect
                  x="433"
                  y="402"
                  width="63"
                  height="49"
                  fill="currentColor"
                ></rect>
                <rect
                  x="384"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                ></rect>
                <rect
                  x="531"
                  y="328"
                  width="50"
                  height="50"
                  fill="currentColor"
                ></rect>
                <rect
                  x="99"
                  y="303"
                  width="49"
                  height="58"
                  fill="currentColor"
                ></rect>
                <rect
                  x="99"
                  y="352"
                  width="49"
                  height="50"
                  fill="currentColor"
                ></rect>
                <rect
                  x="99"
                  y="392"
                  width="49"
                  height="59"
                  fill="currentColor"
                ></rect>
                <rect
                  x="44"
                  y="402"
                  width="66"
                  height="49"
                  fill="currentColor"
                ></rect>
                <rect
                  x="234"
                  y="402"
                  width="62"
                  height="49"
                  fill="currentColor"
                ></rect>
                <rect
                  x="334"
                  y="303"
                  width="50"
                  height="49"
                  fill="currentColor"
                ></rect>
                <rect x="581" width="49" height="49" fill="currentColor"></rect>
                <rect x="581" width="49" height="64" fill="currentColor"></rect>
                <rect
                  x="482"
                  y="123"
                  width="49"
                  height="49"
                  fill="currentColor"
                ></rect>
                <rect
                  x="507"
                  y="124"
                  width="49"
                  height="24"
                  fill="currentColor"
                ></rect>
                <rect
                  x="531"
                  y="49"
                  width="99"
                  height="99"
                  fill="currentColor"
                ></rect>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Hero10 = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-md py-12 px-4 sm:px-6 md:max-w-screen-xl md:py-20 lg:py-32 md:px-8">
        <div className="md:pr-8 md:w-1/2 xl:pr-0 xl:w-5/12">
          <h1 className="text-3xl text-gray-800 font-bold md:text-4xl md:leading-tight lg:text-5xl dark::text-gray-200">
            <span>Solving problems for every </span>
            <span className="text-blue-600 dark::text-blue-500">team</span>
          </h1>
          <p className="mt-3 text-base text-gray-500">
            Built on standard web technology, teams use Preline to build
            beautiful cross-platform hybrid apps in a fraction of the time.
          </p>
          <div className="mt-8 grid">
            <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800">
              <span className="w-fit">
                <svg
                  className="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  ></path>
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  ></path>
                </svg>
              </span>
              <span>Sign up with Google</span>
            </button>
          </div>
          <p className="py-6 flex items-center text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:mr-6 after:flex-[1_1_0%] after:border-t after:ml-6 dark::text-gray-500 dark::before:border-gray-600 dark::after:border-gray-600">
            Or
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium dark::text-white">
                <span className="sr-only">Full name</span>
              </label>
              <input
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark::bg-slate-900 dark::border-gray-700 dark::text-gray-400"
                name=""
                placeholder="Full name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium dark::text-white">
                <span className="sr-only">Email address</span>
              </label>
              <input
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark::bg-slate-900 dark::border-gray-700 dark::text-gray-400"
                name=""
                placeholder="Email address"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium dark::text-white">
                <span className="sr-only">Password</span>
              </label>
              <input
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 dark::bg-slate-900 dark::border-gray-700 dark::text-gray-400"
                name=""
                placeholder="Password"
              />
            </div>
            <div className="grid">
              <button className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark::focus:ring-offset-gray-800 sm:p-4">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')] bg-no-repeat bg-center bg-cover"></div>
    </div>
  );
};
