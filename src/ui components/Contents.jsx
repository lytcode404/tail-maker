import Link from "next/link";
import Image from "next/image";

export const Content1 = () => {
  return (
    <div className="max-h-full sm:relative sm:py-5">
      <div className="z-0 absolute bottom-2/3 h-80 inset-0 bg-primary sm:w-1/2 sm:h-full"></div>
      <Image
        height="500"
        width="500"
        alt="alt"
        className="w-11/12 mx-auto my-4 rounded-global relative object-fit bg-blue-100 "
        src="https://picsum.photos/900/240"
      />
      <div className="grid relative sm:grid-cols-2 ">
        <div className="py-7 px-5  sm:flex sm:flex-col sm:justify-center sm:px-7 lg:px-20">
          <h1 className="text-3xl font-bold sm:text-4xl">Content 1</h1>
          <p className="mt-3 leading-5 text-lg">
            With the Tailwind CSS editor you can edit and customize content
            visually, so there is no need for a backend content system. Once you
            haveve finished the customizations, you can export and publish your
            website.
          </p>
        </div>
        <div>
          <div className="flex flex-col p-3 gap-y-2 px-4 md:px-10">
            <span className="w-fit">
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
            </span>
            <p className="font-medium text-lg text-slate-900 dark::text-slate-100">
              Change the style globally
            </p>
            <p className="font-thin leading-snug text-sm">
              Startup generator offers a valid Bootstrap page and automatically
              writes the semantic HTML code of the template.
            </p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 px-4 md:px-1">
            <span className="w-fit">
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
            </span>
            <p className="font-medium text-lg text-slate-900 dark::text-slate-100">
              Change the style globally
            </p>
            <p className="font-thin leading-snug text-sm">
              Startup generator offers a valid Bootstrap page and automatically
              writes the semantic HTML code of the template.
            </p>
          </div>
          <div className="flex flex-col p-3 gap-y-2 px-4 md:px-10">
            <span className="w-fit">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M383.8 351.7c2.5-2.5 105.2-92.4 105.2-92.4l-17.5-7.5c-10-4.9-7.4-11.5-5-17.4 2.4-7.6 20.1-67.3 20.1-67.3s-47.7 10-57.7 12.5c-7.5 2.4-10-2.5-12.5-7.5s-15-32.4-15-32.4-52.6 59.9-55.1 62.3c-10 7.5-20.1 0-17.6-10 0-10 27.6-129.6 27.6-129.6s-30.1 17.4-40.1 22.4c-7.5 5-12.6 5-17.6-5C293.5 72.3 255.9 0 255.9 0s-37.5 72.3-42.5 79.8c-5 10-10 10-17.6 5-10-5-40.1-22.4-40.1-22.4S183.3 182 183.3 192c2.5 10-7.5 17.5-17.6 10-2.5-2.5-55.1-62.3-55.1-62.3S98.1 167 95.6 172s-5 9.9-12.5 7.5C73 177 25.4 167 25.4 167s17.6 59.7 20.1 67.3c2.4 6 5 12.5-5 17.4L23 259.3s102.6 89.9 105.2 92.4c5.1 5 10 7.5 5.1 22.5-5.1 15-10.1 35.1-10.1 35.1s95.2-20.1 105.3-22.6c8.7-.9 18.3 2.5 18.3 12.5S241 512 241 512h30s-5.8-102.7-5.8-112.8 9.5-13.4 18.4-12.5c10 2.5 105.2 22.6 105.2 22.6s-5-20.1-10-35.1 0-17.5 5-22.5z"></path>
              </svg>
            </span>
            <p className="font-medium text-lg text-slate-900 dark::text-slate-100">
              Change the style globally
            </p>
            <p className="font-thin leading-snug text-sm">
              Startup generator offers a valid Bootstrap page and automatically
              writes the semantic HTML code of the template.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content2 = () => {
  return (
    <section className="py-10">
      <div className="mx-auto">
        <div className="flex flex-wrap w-full px-4 pb-5">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-3xl title-font mb-2 text-gray-900 font-bold dark::text-slate-100 sm:text-4xl">
              Content 2
            </h1>
            <div className="h-1 rounded bg-primary w-14">
              <div className="p-2"></div>
            </div>
          </div>
          <p className="w-full text-lg leading-snug font-light font-body lg:w-1/2">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="bg-gray-50 dark::bg-gray-900">
              <Link href="#">
                <Image
                  height="500"
                  width="500"
                  alt="alt"
                  className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                  src="https://images.unsplash.com/photo-1635324944940-0c0a9c8f9bf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBzcXVhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                />
              </Link>
              <div className="p-6 rounded-lg dark::divide-undefined">
                <h2 className="text-lg text-gray-900 title-font mb-0 font-heading font-semibold dark::divide-undefined dark::divide-undefined dark::text-gray-200">
                  Ceviche de palmito
                </h2>
                <h3 className="tracking-widest text-xs font-medium title-font text-primary mb-2">
                  SUBTITLE
                </h3>
                <p>
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="bg-gray-50 dark::bg-gray-900">
              <Image
                height="500"
                width="500"
                alt="alt"
                className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="p-6 rounded-lg dark::divide-undefined">
                <h2 className="text-lg text-gray-900 title-font mb-0 font-semibold dark::text-gray-200 dark::divide-undefined">
                  Chicken spaghetti
                </h2>
                <h3 className="tracking-widest text-xs font-medium title-font text-primary mb-2">
                  SUBTITLE
                </h3>
                <p>
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="bg-gray-50 dark::bg-gray-900">
              <Image
                height="500"
                width="500"
                alt="alt"
                className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                src="https://images.unsplash.com/photo-1633783156075-a01661455344?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="p-6 rounded-lg dark::divide-undefined">
                <h2 className="text-lg text-gray-900 title-font font-semibold mb-0 dark::text-gray-200">
                  Green Salad
                </h2>
                <h3 className="tracking-widest text-xs font-medium title-font text-primary mb-2">
                  SUBTITLE
                </h3>
                <p>
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/2 xl:w-1/4">
            <div className="bg-gray-50 dark::bg-gray-900">
              <Image
                height="500"
                width="500"
                alt="alt"
                className="h-40 rounded w-full object-cover object-center mb-2 xl:mb-0"
                src="https://images.unsplash.com/photo-1631700611307-37dbcb89ef7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
              />
              <div className="p-6 rounded-lg dark::divide-undefined">
                <h2 className="text-lg text-gray-900 title-font font-semibold mb-0 dark::text-gray-200">
                  Grilled Barbecue
                </h2>
                <h3 className="tracking-widest text-xs title-font text-primary mb-2 font-medium">
                  SUBTITLE
                </h3>
                <p className="text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content3 = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Content 3
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          <Link
            className="group h-80 flex items-end bg-gray-100 overflow-hidden shadow-lg relative p-4 rounded-global"
            href="#"
          >
            <Image
              height="500"
              width="500"
              alt="alt"
              className="object-cover w-full h-full object-center absolute inset-0 group-hover:scale-110 transition duration-200 bg-gray-50"
              src="https://images.unsplash.com/photo-1655635949348-953b0e3c140a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3308&q=80"
            />
            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
            <div className="flex flex-col relative">
              <span className="text-gray-300">Home</span>
              <span className="text-white text-lg lg:text-xl font-semibold">
                Bicycle
              </span>
            </div>
          </Link>
          <Link
            className="group h-80 flex items-end overflow-hidden shadow-lg relative p-4 rounded-global bg-gray-50"
            href="#"
          >
            <Image
              height="500"
              width="500"
              alt="alt"
              className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              src="https://images.unsplash.com/photo-1655635131607-3202827a52a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
            />
            <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>
            <div className="flex flex-col relative">
              <span className="text-gray-300">Modern</span>
              <span className="text-white text-lg lg:text-xl font-semibold">
                e-Bike
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Content4 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div>
          <Image
            height="500"
            width="500"
            alt="alt"
            className="object-cover w-full h-56 sm:h-96"
            src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-900 dark::text-slate-100 sm:text-4xl sm:leading-none">
              <span>Content 4</span>
              <br />
              <span>When you have to explain it, it’s bad.</span>
            </h2>
            <p className="text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="border-l-4">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-slate-900 dark::text-slate-100">
                  I&apos;ll be sure to note that in my log
                </h6>
                <p className="text-sm">
                  Lookout flogging bilge rat main sheet bilge water nipper fluke
                  to go on account heave down.
                </p>
              </div>
            </div>
            <div className="shadow-sm border-l-4">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5 text-slate-900 dark::text-slate-100">
                  A business big enough that it could be listed
                </h6>
                <p className="text-sm">
                  Those options are already baked in with this model shoot me an
                  email clear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content5 = () => {
  return (
    <div>
      <div className=" mx-auto py-12 px-4  text-gray-700">
        <h2 className="font-extrabold text-center text-3xl tracking-tight text-slate-900 sm:px-3 sm:text-4xl  md:mx-auto lg:px-5 ">
          Let&apos;s Talk About Solutions
        </h2>
        <div className="flex mt-5 flex-col lg:flex-row  lg:mx-auto lg:mt-11 xl:items-center">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="rounded-md lg:w-7/12 lg:px-0 lg:mr-5  h-full"
            src="https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          />
          <div className="flex flex-col mt-10 gap-y-10 lg:mt-0 lg:w-5/12 xl:w-4/12">
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    2
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Tax Preparation Services
                </h1>
              </div>
              <p className="mt-4">
                Calculate tax liabilities for individuals and businesses.
                Prepare and file tax returns accurately and on time. Stay
                up-to-date with the latest tax laws and regulations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    3
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Payroll Processing
                </h1>
              </div>
              <p className="mt-4">
                Process employee payroll efficiently and accurately. Calculate
                and file payroll taxes. Prepare W-2s and 1099s for employees.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    1
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Bookkeeping Services
                </h1>
              </div>
              <p className="mt-4">
                Maintain accurate financial records. Reconcile bank accounts
                regularly. Prepare and review financial statements.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    2
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Tax Preparation Services
                </h1>
              </div>
              <p className="mt-4">
                Calculate tax liabilities for individuals and businesses.
                Prepare and file tax returns accurately and on time. Stay
                up-to-date with the latest tax laws and regulations.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-x-4">
                <div>
                  <p className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl bg-primary text-white">
                    3
                  </p>
                </div>
                <h1 className="font-extrabold text-xl text-slate-900 dark::text-slate-100">
                  Payroll Processing
                </h1>
              </div>
              <p className="mt-4">
                Process employee payroll efficiently and accurately. Calculate
                and file payroll taxes. Prepare W-2s and 1099s for employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content6 = () => {
  return (
    <div className="py-11">
      <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl">
        <p className="text-lg dark::text-gray-300">Get Started</p>
        <h1 className="font-bold text-3xl text-slate-900 dark::text-gray-100 sm:text-4xl">
          Content 6
        </h1>
        <p className="text-lg dark::text-gray-400">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms.
        </p>
      </div>
    </div>
  );
};

export const Content7 = () => {
  return (
    <div className="py-12 dark::divide-undefined">
      <div className="md:flex md:items-center lg:flex-row lg: lg:mx-auto lg:grid lg:grid-cols-2 xl:gap-x-14">
        <div className="px-4 lg:col-span-1">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full"
            src="https://picsum.photos/505"
          />
        </div>
        <div className="px-4 mt-5 md:flex md:flex-col md:gap-y-3 md:ml-2 lg:col-span-1">
          <div className="flex items-baseline">
            <h1 className="font-black text-8xl text-primary-500">20</h1>
            <p className="font-black text-6xl text-primary-500">+</p>
            <p className="xl:ml-3 2xl:font-bold 2xl:text-gray-500">Content 7</p>
          </div>
          <h1 className="font-bold text-3xl my-5 tracking-tight text-slate-900 dark::text-slate-100 dark::divide-undefined sm:text-5xl md:my-1">
            More about us
          </h1>
          <p className="dark::divide-undefined dark::text-gray-300">
            Diam quis enim lobortis scelerisque fermentum dui faucibus in.
            Dictumst quisque sagittis purus sit amet. Dignissim cras tincidunt
            lobortis feugiat vivamus at augue. Venenatis tellus in metus
            vulputate eu. Quisque id diam vel quam elementum pulvinar etiam non.
            Maecenas volutpat blandit aliquam etiam. Lacus laoreet non curabitur
            gravida arcu. Dui accumsan sit amet nulla facilisi morbi tempus.
          </p>
          <Link
            className="bg-blue-600 text-white px-8 py-2 bg-primary-500 text-center w-44 rounded-global block mt-6 md:mt-2"
            href="#"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Content8 = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className="md:w-5/6 md:mx-auto md:max-w-2xl">
          <h1 className="text-black text-3xl text-center font-bold dark::text-white sm:text-4xl">
            Content 8
          </h1>
          <p className="text-center text-lg mt-2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
        </div>
      </div>
    </div>
  );
};

export const Content9 = () => {
  return (
    <div className="py-10 lg:py-12 dark::bg-gray-900">
      <div className=" mx-auto px-4 lg:flex xl:items-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark::text-gray-100 sm:text-4xl lg:w-1/2">
          Content 9
        </h1>
        <p className="text-lg mt-3 dark::text-gray-400 sm:mt-2 lg:w-1/2 lg:pl-20">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form.
        </p>
      </div>
    </div>
  );
};

export const Content10 = () => {
  return (
    <div className="py-10 text-center">
      <div className="px-4 xl: xl:mx-auto">
        <h1 className="font-black tracking-normal text-3xl dark::text-slate-100 sm:text-4xl sm:text-slate-900">
          Content 10
        </h1>
        <p className="mt-3 text-lg dark::text-gray-300 sm:max-w-lg sm:mx-auto">
          To request multiple images of the same size in your browser
        </p>
        <div className="grid grid-cols-2 gap-2 mt-7 sm:px-16 lg:grid-cols-8 lg:grid-rows-2 lg:gap-3">
          <div className="col-span-2 lg:col-span-4 lg:row-span-2">
            <Image
              height="500"
              width="500"
              alt="alt"
              className="w-full bg-blue-50"
              src="https://picsum.photos/502"
            />
          </div>
          <div className="lg:col-span-2">
            <Image
              height="500"
              width="500"
              alt="alt"
              className="w-full bg-blue-50"
              src="https://picsum.photos/300"
            />
          </div>
          <div className="lg:col-span-2">
            <Image
              height="500"
              width="500"
              alt="alt"
              className="w-full bg-blue-50"
              src="https://picsum.photos/303"
            />
          </div>
          <div className="col-span-2 lg:block lg:col-span-4">
            <Image
              height="500"
              width="500"
              alt="alt"
              className="w-full bg-blue-50"
              src="https://picsum.photos/602/296"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content11 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-slate-900 dark::text-slate-100 sm:text-4xl sm:leading-none">
              <span> Content 11</span>
              <br className="hidden md:block" />
              <span>the</span>
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"></div>
                <span className="relative inline-block text-primary">
                  speed of light
                </span>
              </span>
            </h2>
            <p className="text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <p className="mb-4 text-sm font-bold tracking-widest uppercase">
            Features
          </p>
          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                </span>
                <span> A slice of heaven </span>
              </li>
              <li className="flex">
                <span className="mr-1">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                </span>
                <span> Disrupt inspire </span>
              </li>
              <li className="flex">
                <span className="mr-1">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                </span>
                <span> Preliminary thinking </span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex">
                <span className="mr-1">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                </span>
                <span> Flipboard curmudgeon </span>
              </li>
              <li className="flex">
                <span className="mr-1">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                </span>
                <span> Storage shed </span>
              </li>
              <li className="flex">
                <span className="mr-1">
                  <span className="w-fit">
                    <svg
                      className="w-5 h-5 mt-px text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      ></polygon>
                    </svg>
                  </span>
                </span>
                <span> Satoshi Nakamoto </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            height="500"
            width="500"
            alt="alt"
            className="object-cover w-full h-56 sm:h-96"
            src="https://images.unsplash.com/photo-1459356067573-0a190eb1fcf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzV8SDZYWDJSTUFmX018fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          />
        </div>
      </div>
    </div>
  );
};

export const Content12 = () => {
  return (
    <div className="py-11 ">
      <div className="text-center flex flex-col gap-y-3 px-2 sm:mx-auto sm:max-w-xl ">
        {/* <p className="dark::text-gray-300">Get Started</p> */}
        <h1 className="font-extrabold text-center text-3xl tracking-tight text-slate-900 dark::text-slate-100 sm:px-3 sm:text-4xl  md:mx-auto lg:px-5 ">
          Tailored Solutions
        </h1>
        <p className="max-w-lg text-xl leading-relaxed text-gray-600">
          we offer financial analysis services to help you gain valuable
          insights into your business
        </p>
      </div>
      <div className="grid grid-cols-2 mt-5 gap-y-5 sm:gap-y-0 lg:mx-auto ">
        <div className="col-span-2 sm:col-span-1">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full bg-gray-50"
            src="https://picsum.photos/552"
          />
        </div>
        <div className="col-span-2 px-3 pb-3 dark::border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:border-t lg:border-r">
          <h1 className="font-extrabold text-xl text-slate-900">Bookkeeping</h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Our bookkeeping service provides comprehensive financial management
            support for small businesses in the USA. We offer a range of
            bookkeeping services tailored to meet your specific needs. Our team
            of experts will work with you to ensure that your financial records
            are up-to-date with all relevant regulations. We use latest
            technology to consolidate your financial data in a place, providing
            you with a clear snapshot of your financial position. With our
            service, you can stay on top of your financial health.
          </p>
        </div>
        <div className="col-span-2 px-3 pb-3 order-3 dark::border-slate-700 border-gray-50 sm:col-span-1 sm:flex sm:flex-col sm:justify-center sm:pl-7 sm:order-none sm:border-b lg:border-l">
          <h1 className="font-extrabold text-xl text-slate-900">
            Financial Analysis
          </h1>
          <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
            Financial dashboards are transforming decision-making for businesses
            by enabling the visualization of key data. Tools consolidate a
            companys Key performance indicators in one place while presenting a
            real-time snapshot of financial position, helping to inform future
            planning. Visuals that dashboards create not only makes it easier
            for everyone in the organization to understand exactly what is going
            on, but also highlights actionable steps that can be taken to boost
            performance.
          </p>
        </div>
        <div className="col-span-2 order-2 sm:col-span-1 sm:order-none">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="w-full bg-gray-50"
            src="https://picsum.photos/542"
          />
        </div>
      </div>
    </div>
  );
};

export const Content13 = () => {
  return (
    <div className="px-5 py-8">
      <div className="flex  mx-auto items-center gap-6 flex-col lg:flex-row">
        <div className="bg-no-repeat flex justify-center bg-center bg-contain py-2 lg:w-1/2 xl:w-3/5">
          <Image
            height="500"
            width="500"
            alt="alt"
            className="py-16 lg:w-5/6 xl:w-3/4 xl:py-0 xl:rounded-md"
            src="https://images.unsplash.com/photo-1617518016627-d73dd26e8ab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          />
        </div>
        <div className="flex flex-col gap-7 sm:text-center lg:w-1/2 lg:text-left">
          <h1 className="font-extrabold tracking-tight text-slate-900 dark::text-slate-100 text-3xl md:text-4xl">
            Don&apos;t worry about failure, you only have to be right once.
          </h1>
          <p className="text-gray-500 xl:py-6 dark::text-gray-300">
            So how did the classical Latin become so incoherent? According to
            McClintock, a 15th century typesetter likely scrambled part of
            Cicero&apos;s De Finibus in order to provide placeholder text to
            mockup various fonts for a type specimen book.
          </p>
          <Link
            className="px-5 py-2 text-white text-center font-bold rounded-global bg-primary-500 hover:transition hover:ease-liner hover:duration-300 hover:scale-105 w-fit sm:mx-auto lg:mx-0"
            href="#"
          >
            Try SYRBookkeeping
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Content14 = () => {
  return (
    <section className="pt-10 overflow-hidden bg-secondary-light md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-5xl">
              <span>Hey I am </span>
              <br className="block sm:hidden" />
              <span>Jenny Carter</span>
            </h2>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-heading sm:text-3xl lg:text-4xl">
              Dedicated Subject Matter Expert
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-text-light md:mt-8">
              Genuine people. Impeccable records. Our group of specialists for
              small enterprises brings in expert bookkeeping.
            </p>
            <div className="mt-4 text-xl text-text-light md:mt-8">
              <div className="relative inline-block">
                <div className="absolute inline-block w-full bottom-0.5 h-2 bg-primary-300"></div>
                <span className="relative">Have a question?</span>
              </div>
              <br className="block sm:hidden" />
              <span>Get Started</span>
            </div>
          </div>
          <div className="relative">
            <Image
              height="500"
              width="500"
              alt="alt"
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
            />
            <Image
              height="500"
              width="500"
              alt="alt"
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content15 = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
        <Link
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark::hover:bg-slate-800"
          href="#"
        >
          <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
            <span className="w-fit">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path>
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark::text-white dark::group-hover:text-gray-400">
              Responsive
            </h3>
            <p className="mt-1 text-gray-600 dark::text-gray-400">
              Responsive, and mobile-first project on the web
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              <span>Learn more </span>
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
          </div>
        </Link>
        <Link
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark::hover:bg-slate-800"
          href="#"
        >
          <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
            <span className="w-fit">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"></path>
                <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"></path>
                <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"></path>
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark::text-white dark::group-hover:text-gray-400">
              Customizable
            </h3>
            <p className="mt-1 text-gray-600 dark::text-gray-400">
              Components are easily customized and extendable
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              <span>Learn more </span>
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
          </div>
        </Link>
        <Link
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark::hover:bg-slate-800"
          href="#"
        >
          <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
            <span className="w-fit">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path>
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path>
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark::text-white dark::group-hover:text-gray-400">
              Documentation
            </h3>
            <p className="mt-1 text-gray-600 dark::text-gray-400">
              Every component and plugin is well documented
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              <span>Learn more </span>
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
          </div>
        </Link>
        <Link
          className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark::hover:bg-slate-800"
          href="#"
        >
          <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
            <span className="w-fit">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
              </svg>
            </span>
          </div>
          <div className="mt-5">
            <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark::text-white dark::group-hover:text-gray-400">
              24/7 Support
            </h3>
            <p className="mt-1 text-gray-600 dark::text-gray-400">
              Contact us 24 hours a day, 7 days a week
            </p>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              <span>Learn more </span>
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
          </div>
        </Link>
      </div>
    </div>
  );
};

export const Content16 = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark::bg-slate-900 dark::border-gray-700 dark::shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
            <span className="w-fit">
              <svg
                className="w-28 h-28"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="10" fill="white"></rect>
                <path
                  d="M20.2819 26.7478C20.1304 26.5495 19.9068 26.4194 19.6599 26.386C19.4131 26.3527 19.1631 26.4188 18.9647 26.5698C18.848 26.6622 18.7538 26.78 18.6894 26.9144L10.6019 43.1439C10.4874 43.3739 10.4686 43.6401 10.5496 43.884C10.6307 44.1279 10.805 44.3295 11.0342 44.4446C11.1681 44.5126 11.3163 44.5478 11.4664 44.5473H22.7343C22.9148 44.5519 23.0927 44.5037 23.2462 44.4084C23.3998 44.3132 23.5223 44.1751 23.5988 44.011C26.0307 38.9724 24.5566 31.3118 20.2819 26.7478Z"
                  fill="url(#paint0_linear_2204_541)"
                ></path>
                <path
                  d="M28.2171 11.9791C26.201 15.0912 25.026 18.6755 24.8074 22.3805C24.5889 26.0854 25.3342 29.7837 26.9704 33.1126L32.403 44.0113C32.4833 44.1724 32.6067 44.3079 32.7593 44.4026C32.912 44.4973 33.088 44.5475 33.2675 44.5476H44.5331C44.6602 44.5479 44.7861 44.523 44.9035 44.4743C45.0209 44.4257 45.1276 44.3543 45.2175 44.2642C45.3073 44.1741 45.3785 44.067 45.427 43.9492C45.4755 43.8314 45.5003 43.7052 45.5 43.5777C45.5001 43.4274 45.4659 43.2791 45.3999 43.1441L29.8619 11.9746C29.7881 11.8184 29.6717 11.6864 29.5261 11.594C29.3805 11.5016 29.2118 11.4525 29.0395 11.4525C28.8672 11.4525 28.6984 11.5016 28.5529 11.594C28.4073 11.6864 28.2908 11.8184 28.2171 11.9746V11.9791Z"
                  fill="#2684FF"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_2204_541"
                    x1="24.734"
                    y1="29.2284"
                    x2="16.1543"
                    y2="44.0429"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0052CC"></stop>
                    <stop offset="0.92" stop-color="#2684FF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark::text-blue-500">
              Atlassian API
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark::text-gray-300 dark::hover:text-white">
              Atlassian
            </h3>
            <p className="mt-3 text-gray-500">
              A software that develops products for software developers and
              developments.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark::border-gray-700 dark::divide-gray-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
              href="#"
            >
              View sample
            </Link>
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
              href="#"
            >
              View API
            </Link>
          </div>
        </div>
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark::bg-slate-900 dark::border-gray-700 dark::shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-rose-500 rounded-t-xl">
            <span className="w-fit">
              <svg
                className="w-28 h-28"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="10" fill="white"></rect>
                <g clip-path="url(#clip0_2204_541)">
                  <path
                    d="M37.0409 28.8697C33.1968 28.8697 30.0811 31.9854 30.0811 35.8288C30.0811 39.6726 33.1968 42.789 37.0409 42.789C40.8843 42.789 44 39.6726 44 35.8288C44 31.9854 40.8843 28.8697 37.0409 28.8697ZM18.9594 28.8701C15.116 28.8704 12 31.9854 12 35.8292C12 39.6726 15.116 42.7886 18.9594 42.7886C22.8032 42.7886 25.9192 39.6726 25.9192 35.8292C25.9192 31.9854 22.8032 28.8701 18.9591 28.8701H18.9594ZM34.9595 20.1704C34.9595 24.0138 31.8438 27.1305 28.0004 27.1305C24.1563 27.1305 21.0406 24.0138 21.0406 20.1704C21.0406 16.3269 24.1563 13.2109 28.0003 13.2109C31.8438 13.2109 34.9591 16.3269 34.9591 20.1704H34.9595Z"
                    fill="url(#paint0_radial_2204_541)"
                  ></path>
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_2204_541"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(28.0043 29.3944) scale(21.216 19.6102)"
                  >
                    <stop stop-color="#FFB900"></stop>
                    <stop offset="0.6" stop-color="#F95D8F"></stop>
                    <stop offset="0.999" stop-color="#F95353"></stop>
                  </radialGradient>
                  <clipPath id="clip0_2204_541">
                    <rect
                      width="32"
                      height="29.5808"
                      fill="white"
                      transform="translate(12 13.2096)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-rose-600 dark::text-rose-500">
              Asana API
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark::text-gray-300 dark::hover:text-white">
              Asana
            </h3>
            <p className="mt-3 text-gray-500">
              Track tasks and projects, use agile boards, measure progress.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark::border-gray-700 dark::divide-gray-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
              href="#"
            >
              View sample
            </Link>
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
              href="#"
            >
              View API
            </Link>
          </div>
        </div>
        <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark::bg-slate-900 dark::border-gray-700 dark::shadow-slate-700/[.7]">
          <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
            <span className="w-fit">
              <svg
                className="w-28 h-28"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="10" fill="white"></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.7326 11.968C21.9637 11.9693 20.5321 13.4049 20.5334 15.1738C20.5321 16.9427 21.965 18.3782 23.7339 18.3795H26.9345V15.1751C26.9358 13.4062 25.5029 11.9706 23.7326 11.968C23.7339 11.968 23.7339 11.968 23.7326 11.968M23.7326 20.5184H15.2005C13.4316 20.5197 11.9987 21.9553 12 23.7242C11.9974 25.4931 13.4303 26.9286 15.1992 26.9312H23.7326C25.5016 26.9299 26.9345 25.4944 26.9332 23.7255C26.9345 21.9553 25.5016 20.5197 23.7326 20.5184V20.5184Z"
                  fill="#36C5F0"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.0001 23.7242C44.0014 21.9553 42.5684 20.5197 40.7995 20.5184C39.0306 20.5197 37.5977 21.9553 37.599 23.7242V26.9312H40.7995C42.5684 26.9299 44.0014 25.4944 44.0001 23.7242ZM35.4666 23.7242V15.1738C35.4679 13.4062 34.0363 11.9706 32.2674 11.968C30.4985 11.9693 29.0656 13.4049 29.0669 15.1738V23.7242C29.0643 25.4931 30.4972 26.9286 32.2661 26.9312C34.035 26.9299 35.4679 25.4944 35.4666 23.7242Z"
                  fill="#2EB67D"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.2661 44.0322C34.035 44.0309 35.4679 42.5953 35.4666 40.8264C35.4679 39.0575 34.035 37.622 32.2661 37.6207H29.0656V40.8264C29.0642 42.594 30.4972 44.0295 32.2661 44.0322ZM32.2661 35.4804H40.7995C42.5684 35.4791 44.0013 34.0436 44 32.2747C44.0026 30.5058 42.5697 29.0702 40.8008 29.0676H32.2674C30.4985 29.0689 29.0656 30.5045 29.0669 32.2734C29.0656 34.0436 30.4972 35.4791 32.2661 35.4804V35.4804Z"
                  fill="#ECB22E"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 32.2746C11.9987 34.0435 13.4316 35.479 15.2005 35.4804C16.9694 35.479 18.4024 34.0435 18.401 32.2746V29.0688H15.2005C13.4316 29.0702 11.9987 30.5057 12 32.2746ZM20.5334 32.2746V40.825C20.5308 42.5939 21.9637 44.0295 23.7326 44.0321C25.5016 44.0308 26.9345 42.5952 26.9332 40.8263V32.2772C26.9358 30.5083 25.5029 29.0728 23.7339 29.0702C21.9637 29.0702 20.5321 30.5057 20.5334 32.2746C20.5334 32.2759 20.5334 32.2746 20.5334 32.2746Z"
                  fill="#E01E5A"
                ></path>
              </svg>
            </span>
          </div>
          <div className="p-4 md:p-6">
            <span className="block mb-1 text-xs font-semibold uppercase text-amber-500">
              Slack API
            </span>
            <h3 className="text-xl font-semibold text-gray-800 dark::text-gray-300 dark::hover:text-white">
              Slack
            </h3>
            <p className="mt-3 text-gray-500">
              Email collaboration and email service desk made easy.
            </p>
          </div>
          <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark::border-gray-700 dark::divide-gray-700">
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
              href="#"
            >
              View sample
            </Link>
            <Link
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark::bg-slate-900 dark::hover:bg-slate-800 dark::border-gray-700 dark::text-gray-400 dark::hover:text-white dark::focus:ring-offset-gray-800"
              href="#"
            >
              View API
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Content17 = () => {
  return (
    <>
      <section class="bg-white dark::bg-gray-900">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark::text-white">
              Building digital <br />
              products & brands.
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark::text-gray-400">
              This free and open-source landing page template was built using
              the utility classes from{" "}
              <a href="https://tailwindcss.com" class="hover:underline">
                Tailwind CSS
              </a>{" "}
              and based on the components from the{" "}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                class="hover:underline"
              >
                Flowbite Library
              </a>{" "}
              and the{" "}
              <a href="https://flowbite.com/blocks/" class="hover:underline">
                Blocks System
              </a>
              .
            </p>
            <div class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="https://github.com/dilshad/ECOMER"
                class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark::text-white dark::border-gray-700 dark::hover:bg-gray-700 dark::focus:ring-gray-800"
              >
                <svg
                  class="w-4 h-4 mr-2 text-gray-500 dark::text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>{" "}
                View on GitHub
              </a>
              <a
                href="https://www.figma.com/community/file/1125744163617429490"
                class="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark::focus:ring-gray-700 dark::bg-gray-800 dark::text-gray-400 dark::border-gray-600 dark::hover:text-white dark::hover:bg-gray-700"
              >
                <svg
                  class="w-4 h-4 mr-2"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 200 300"
                  width="1667"
                  height="2500"
                >
                  <title>Figma.logo</title>
                  <desc>Created using Figma</desc>
                  <path
                    id="path0_fill"
                    class="st0"
                    d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
                  />
                  <path
                    id="path1_fill"
                    class="st1"
                    d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
                  />
                  <path
                    id="path1_fill_1_"
                    class="st2"
                    d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
                  />
                  <path
                    id="path2_fill"
                    class="st3"
                    d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
                  />
                  <path
                    id="path3_fill"
                    class="st4"
                    d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
                  />
                </svg>{" "}
                Get Figma file
              </a>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src="https://picsum.photos/502"
              alt="hero image"
              className="w-full"
              width={740}
              height={74}
            />
          </div>
        </div>
      </section>
    </>
  );
};
