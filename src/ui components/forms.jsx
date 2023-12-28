import Image from "next/image";
import Link from "next/link";

export const Form1 = () => {
  return (
    <>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto sm:max-w-md">
          <h1 className="text-3xl font-bold text-center text-primary-500">
            Get started today
          </h1>
          <p className="max-w-md mx-auto mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>
          <form className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl dark::shadow-slate-800">
            <p className="text-lg font-medium">Sign in to your account</p>
            <div className="flex flex-col gap-y-3">
              <div>
                <label className="text-sm font-medium">
                  <p>Email</p>
                </label>
                <div className="relative mt-1">
                  <input className="w-full p-3 pr-12 text-sm shadow-sm border border-gray-200 rounded-global dark::bg-slate-900 dark::border-gray-700" />
                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <span className="w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">
                  <p>Password</p>
                </label>
                <div className="relative mt-1">
                  <input className="w-full p-3 pr-12 text-sm shadow-sm border border-gray-200 rounded-global dark::bg-slate-900 dark::border-gray-700" />
                  <span className="absolute inset-y-0 inline-flex items-center right-4">
                    <span className="w-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <button
                className="block w-full px-5 py-3 text-sm font-medium text-white bg-primary-500 rounded-global mt-3 hover:bg-primary-700"
                type="submit"
              ></button>
            </div>
            <div className="flex items-center gap-x-1.5 justify-center">
              <p className="text-sm text-center text-gray-500">No Account? </p>
              <Link className="underline text-sm" href="">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export const Form2 = () => {
  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="absolute inset-0 object-cover w-full h-full bg-blue-100"
            src="https://images.unsplash.com/photo-1507206130118-b5907f817163?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          />
        </div>
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Sign in to SyrBookeepping
            </h1>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>
          <form className="max-w-xl mx-auto mt-8 mb-0 space-y-4">
            <div>
              <label className="sr-only">
                <p>Email</p>
              </label>
              <div className="relative">
                <input className="w-full p-3 pr-12 text-sm rounded-global shadow-sm border-2" />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <label className="sr-only">
                <p>Password</p>
              </label>
              <div className="relative">
                <input className="w-full p-3 pr-12 text-sm rounded-global shadow-sm border-2" />
                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <span className="w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-sm text-gray-500">No account?</p>
                <Link className="underline text-sm ml-2" href="">
                  Sign up
                </Link>
              </div>
              <button className="inline-block px-10 py-2 ml-3 text-sm font-medium text-white bg-blue-500 rounded-global">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export const Form3 = () => {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-7xl md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Get in touch
            </h2>
            <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          <form className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto">
            <div>
              <p className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                First name*
              </p>
              <input className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div>
              <p className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Last name*
              </p>
              <input className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div className="sm:col-span-2">
              <p className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Company
              </p>
              <input className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div className="sm:col-span-2">
              <p className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Email*
              </p>
              <input className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div className="sm:col-span-2">
              <p className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Subject*
              </p>
              <input className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
            </div>
            <div className="sm:col-span-2">
              <p className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                Message*
              </p>
              <textarea className="w-full h-64 bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
            </div>
            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Send
              </button>
              <span className="text-gray-500 text-sm">*Required</span>
            </div>
            <p className="text-gray-400 text-xs">
              <span>By signing up to our newsletter you agree to our </span>
              <Link
                className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
                href="#"
              >
                Privacy Policy
              </Link>
              <span>.</span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export const Form4 = () => {
  return (
    <>
      <div className="py-9">
        <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md dark::bg-transparent xl:rounded-global">
          <h2 className="text-3xl font-bold text-center">Get in touch</h2>
          <p className="mt-3 text-center text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <Link
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark::text-gray-200 hover:bg-blue-200 dark::hover:bg-blue-500"
              href="#"
            >
              <span className="w-fit">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              <span className="mt-2">
                <p>121 Street, NY</p>
              </span>
            </Link>
            <Link
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark::text-gray-200 hover:bg-blue-200 dark::hover:bg-blue-500"
              href="#"
            >
              <span className="w-fit">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </span>
              <span className="mt-2">
                <p>+2499999666600</p>
              </span>
            </Link>
            <Link
              className="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark::text-gray-200 hover:bg-blue-200 dark::hover:bg-blue-500"
              href="#"
            >
              <span className="w-fit">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </span>
              <span className="mt-2">
                <p>example@example.com</p>
              </span>
            </Link>
          </div>
          <div className="mt-6">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark::text-gray-200">
                  <p>Name</p>
                </label>
                <input className="block px-4 py-2 text-gray-700 bg-white border rounded-global w-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 dark::bg-gray-800 dark::text-gray-300 dark::border-gray-600 dark::focus:border-blue-300" />
              </div>
              <div className="w-full mx-2 mt-4 box-border md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark::text-gray-200">
                  <p>E-mail</p>
                </label>
                <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-global focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 dark::bg-gray-800 dark::text-gray-300 dark::border-gray-600 dark::focus:border-blue-300" />
              </div>
            </div>
            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark::text-gray-200">
                <p>Message</p>
              </label>
              <textarea className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-global border-gray-200 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark::bg-gray-800 dark::text-gray-300 dark::border-gray-600 dark::focus:border-blue-300"></textarea>
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-4 py-2 text-white transition-colors duration-200 transform rounded-global focus:outline-none focus:bg-gray-600 bg-primary">
                <p>Send Message</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
