import Image from "next/image";

export const Step1 = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <div className="relative md:col-span-2">
            <Image height="50" width="50" alt="alt" 
              className="inset-0 object-cover object-bottom w-full h-56 lg:absolute lg:h-full"
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
            <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium text-white rounded bg-primary text-xs">
                  1
                </span>
                <p className="text-lg font-semibold sm:text-base">
                  Read the recipe
                </p>
              </div>
              <p className="text-sm">
                Take a good look at the recipe. Don’t just skim it read it
                through from start to finish. As you read, visualize doing the
                steps which will help when you’re prepping.
              </p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">
                  2
                </span>
                <p className="text-lg font-semibold sm:text-base">
                  Know the assumptions
                </p>
              </div>
              <p className="text-sm">
                All recipes are written using certain conventions, which define
                the characteristics of common ingredients. The rules vary from
                place to place.
              </p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-primary text-white text-xs">
                  3
                </span>
                <p className="text-lg font-semibold sm:text-base">
                  Figure out the timing
                </p>
              </div>
              <p className="text-sm">
                Check the “prep time” and “total time” listed at the top to be
                sure you have enough time to complete the recipe. Look for
                hints, such as the words “meanwhile” .
              </p>
            </div>
            <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
              <div className="flex items-center mb-1">
                <span className="flex items-center justify-center w-4 h-4 mr-2 font-medium rounded bg-secondary text-white text-xs">
                  4
                </span>
                <p className="text-lg font-semibold sm:text-base">Plan ahead</p>
              </div>
              <p className="text-sm">
                Missing a prep instruction can leave you scrambling in the
                middle of a recipe. Keep your eyes peeled for time-consuming
                steps and be careful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Step2 = () => {
  return (
    <>
      <div className="bg-secondary-light pt-16">
        <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto w-full ">
          <h1 className="font-extrabold text-center text-3xl tracking-tight text-slate-900 dark:text-slate-100 sm:px-3 sm:text-3xl md:mx-auto lg:px-5 w-2/3">
            Bespoke Services Transform Your Business
          </h1>
          <p className="text-center text-xl leading-relaxed text-gray-600 w-3/4 mx-auto">
            We are excited to guide you through the seamless process of utilizing
            our bookkeeping and financial analysis service. Here is a step-by-step
            breakdown of how our system operates:
          </p>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <span className="w-fit">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-primary">
                    1.Consultation or Straight Sign-up
                  </p>
                  <p className="text-gray-700">
                    To get started, you have two options. You can either book a
                    free consultation with our team to discuss your specific
                    needs, or you can sign up directly for a free month to
                    experience our services firsthand.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <span className="w-fit">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-primary">
                    2.Personalized Dashboard
                  </p>
                  <p className="text-gray-700">
                    Once you are onboarded, you will gain access to your personalized
                    dashboard. This is where the magic happens! Your dashboard
                    serves as the central hub for all your bookkeeping and
                    financial information.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <span className="w-fit">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-primary">
                    3.Document Upload
                  </p>
                  <p className="text-gray-700">
                    In the “Documents” section of your dashboard, you can easily
                    upload your receipts, invoices, and other relevant documents.
                    This ensures that all your financial data is securely stored
                    in one place, eliminating the hassle of physical paperwork.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <span className="w-fit">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-primary">
                    4.Team Communication
                  </p>
                  <p className="text-gray-700">
                    Need to communicate with our team? No problem! You can
                    interact with us directly through the “Messages” section of
                    your dashboard. Feel free to ask questions, make specific
                    requests, or provide any additional information you deem
                    necessary. Our team is here to assist you every step of the
                    way.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <span className="w-fit">
                        <svg
                          className="w-4 text-gray-600"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <line
                            fill="none"
                            stroke-miterlimit="10"
                            x1="12"
                            y1="2"
                            x2="12"
                            y2="22"
                          ></line>
                          <polyline
                            fill="none"
                            stroke-miterlimit="10"
                            points="19,15 12,22 5,15"
                          ></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300"></div>
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-bold text-primary">
                    5.Custom Solution
                  </p>
                  <p className="text-gray-700">
                    We understand that every client has unique needs and
                    preferences. Under the “Bookkeeping” tab, we provide custom
                    reports tailored to your specific requirements. Additionally,
                    if you have any specific Key Performance Indicators (KPIs)
                    you would like to see on your financial dashboard, we will include
                    them as well. Our goal is to provide you with the insights and
                    data that matter most to your business.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border rounded-full">
                      <span className="w-fit">
                        <svg
                          className="w-6 text-gray-600"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <polyline
                            fill="none"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            points="6,12 10,16 18,8"
                          ></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-1">
                  <p className="mb-2 text-lg font-bold text-primary">Success</p>
                  <p className="text-gray-700">Done</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image height="500" width="500" alt="alt" 
                className="inset-0 object-bottom w-full rounded h-96 object-fill lg:absolute lg:h-full xl:rounded-global"
                src="https://images.unsplash.com/photo-1633636611822-30b3aece0748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const Step3 = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="mb-6 font-sans text-3xl font-bold leading-none tracking-tight max-w-xl text-slate-900 dark:text-slate-100 sm:text-4xl md:mx-auto">
            Motivation is what gets you started. Habit is what keeps you going
          </h2>
          <p className="text-base md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-5 duration-300 transform bg-white border-2 border-dashed shadow-sm hover:-translate-y-2 border-primary-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary-500">
                1
              </p>
              <p className="text-lg font-bold leading-5">Fill her up</p>
            </div>
            <p className="text-sm">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless.
            </p>
          </div>
          <div className="p-5 duration-300 transform bg-white border-2 border-dashed shadow-sm hover:-translate-y-2 border-primary-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary-500">
                2
              </p>
              <p className="text-lg font-bold leading-5">Light it</p>
            </div>
            <p className="text-sm">
              Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
              flail 180 berm.
            </p>
          </div>
          <div className="relative p-5 duration-300 transform bg-white border-2 shadow-sm hover:-translate-y-2 border-primary-500 dark:bg-gray-900 rounded-global">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary-500">
                3
              </p>
              <p className="text-lg font-bold leading-5">Shoot for the stars</p>
            </div>
            <p className="text-sm">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped.
            </p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              <span className="w-fit">
                <svg
                  className="text-white w-7"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polyline
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="6,12 10,16 18,8"
                  ></polyline>
                </svg>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Step4 = () => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How do we create success
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <ul className="max-w-md mx-auto mt-16 space-y-12">
          <li className="relative flex items-start">
            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"></div>
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <span className="w-fit">
                <svg
                  className="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Create a free account
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"></div>
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <span className="w-fit">
                <svg
                  className="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Build your website
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </li>
          <li className="relative flex items-start">
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
              <span className="w-fit">
                <svg
                  className="w-10 h-10 text-fuchsia-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-black">
                Release & launch
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
