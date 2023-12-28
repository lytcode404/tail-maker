import Image from "next/image";
import Link from "next/link";

export const Testimonial1 = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col items-start mx-auto px-4 relative py-10 lg:items-center lg:max-w-7xl">
          <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-primary-500 uppercase md:text-center md:justify-center lg:items-center">
            Don&apos;t just take our word for it
          </p>
          <h2 className="relative flex items-start justify-start w-full max-w-3xl text-3xl font-bold tracking-tight text-slate-900 dark::text-slate-100 sm:text-4xl md:max-w-lg md:mx-auto lg:justify-center lg:text-center">
            Let here what people have to say about us
          </h2>
          <span className="w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block"
              viewBox="0 0 975.036 975.036"
            >
              <path
                d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"
                id="tails-selected-element"
              ></path>
            </svg>
          </span>
          <div className="items-center justify-center w-full mt-12 mb-4 md:grid md:grid-cols-1 md:px-10 lg:flex">
            <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="object-cover w-full h-full rounded-full bg-slate-50"
                    src="https://picsum.photos/id/237/100/100"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800 dark::text-gray-300 lg:font-black">
                    John Doe
                  </h4>
                  <p className="text-primary-500">CEO of Something</p>
                </div>
              </div>
              <p className="tracking-tight text-base mt-2">
                &quot;This is a no-brainer if you want to take your business to
                the next level. If you are looking for the ultimate toolset,
                this is it!&quot;
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent dark::border-slate-700 lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="object-cover w-full h-full rounded-full bg-slate-50"
                    src="https://picsum.photos/id/227/100/100"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800 dark::text-gray-300 lg:font-black">
                    Jane Doe
                  </h4>
                  <p className="text-primary-500">CTO of Business</p>
                </div>
              </div>
              <p className="tracking-tight text-base mt-2">
                &quot;Thanks for creating this service. My life is so much
                easier. Thanks for making such a great product.&quot;
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 mr-4 overflow-hidden">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="object-cover w-full h-full rounded-full bg-slate-50"
                    src="https://picsum.photos/id/23/100/100"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="font-bold text-gray-800 dark::text-gray-300 lg:font-black">
                    John Smith
                  </h4>
                  <p className="text-primary-500">Creator of Stuff</p>
                </div>
              </div>
              <p className="tracking-tight text-base mt-2">
                &quot;Packed with awesome content and exactly what I was looking
                for. I would highly recommend this to anyone.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Testimonial2 = () => {
  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-8 md:mb-12">
            What others say about us
          </h2>
          <div className="grid gap-4 md:gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center gap-4 px-8 py-6 bg-primary rounded-global md:gap-6">
              <p className="max-w-md text-white lg:text-lg text-center">
                &quot;This is a section of some simple filler text, also known
                as placeholder text&quot;.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  />
                </div>
                <div>
                  <p className="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </p>
                  <p className="text-indigo-200 text-sm text-center sm:text-left">
                    CEO / Datadrift
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 py-6 bg-primary rounded-global md:gap-6">
              <p className="max-w-md text-white lg:text-lg text-center">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                  />
                </div>
                <div>
                  <p className="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">
                    Kate Berg
                  </p>
                  <p className="text-indigo-200 text-sm text-center sm:text-left">
                    CFO / Dashdash
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 py-6 bg-primary rounded-global md:gap-6">
              <p className="max-w-md text-white lg:text-lg text-center">
                “This is a section of some simple filler text, also known as
                placeholder text.”
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                <div className="w-12 md:w-14 h-12 md:h-14 bg-gray-100 border-2 border-indigo-100 rounded-full overflow-hidden">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  />
                </div>
                <div>
                  <p className="text-indigo-50 text-sm md:text-base font-bold text-center sm:text-left">
                    John McCulling
                  </p>
                  <p className="text-indigo-200 text-sm text-center sm:text-left">
                    CEO / Datadrift
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

export const Testimonial3 = () => {
  return (
    <>
      <section>
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="font-bold text-3xl text-slate-900 dark::text-slate-100 lg:text-4xl">
                What People Say About Us?
              </h2>
              <p className="text-coolGray-600">
                Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
                ei diceret alienum, et sit cetero malorum. Et sea iudico
                consequat, est sanctus adipisci ex.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-coolGray-50 dark::bg-gray-900">
                    <p>
                      An audire commodo habemus cum. Ne sed corrumpit
                      repudiandae. Tota aliquip democritum pro in, nec
                      democritum intellegam ne. Propriae volutpat dissentiet ea
                      sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum
                      vocent sensibus reprehendunt.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height="50"
                        width="50"
                        alt="alt"
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-coolGray-500"
                        src="https://source.unsplash.com/51x51/?portrait"
                      />
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-coolGray-50 dark::bg-gray-900">
                    <p>
                      Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                      et, ius cu hinc fabulas. Nam meliore minimum et, regione
                      convenire cum id. Ex pro eros mucius consectetuer, pro
                      magna nulla nonumy ne, eam putent iudicabit consulatu cu.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height="50"
                        width="50"
                        alt="alt"
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-coolGray-500"
                        src="https://source.unsplash.com/52x52/?portrait"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md bg-coolGray-50 dark::bg-gray-900">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi
                      quo, mea id justo errem elaboraret. Agam mollis scripserit
                      ea his, ut nec postea verear persecuti. Ea noster senserit
                      eam, ferri omittantur ei nec. Id mel solet libris
                      efficiantur, commune explicari et eos. Case movet ad est,
                      sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height="50"
                        width="50"
                        alt="alt"
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-coolGray-500"
                        src="https://source.unsplash.com/53x53/?portrait"
                      />
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md bg-coolGray-50 dark::bg-gray-900">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset
                      vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei
                      amet viderer eos. Ea illum labitur mnesarchum pro. Eius
                      meis salutandi ei nam, alterum expetenda et nec. Expetenda
                      intellegat at eum, per mazim sanctus honestatis ad. Ei
                      noluisse invenire vix. Te ancillae patrioque qui, probo
                      bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <Image
                        height="50"
                        width="50"
                        alt="alt"
                        className="w-12 h-12 bg-center bg-cover rounded-full bg-coolGray-500"
                        src="https://source.unsplash.com/54x54/?portrait"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const Testimonial4 = () => {
  return (
    <>
      <section>
        <div className="max-w-7xl px-4 mt-16 mx-auto md:mt-24">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl leading-normal font-semibold">
              What people are saying?
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <ul className="space-y-8">
              <li className="rounded-lg shadow-lg dark::shadow-gray-800 p-6">
                <div className="flex items-center pb-6 border-b border-gray-100 dark::border-gray-800">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="h-16 w-16 rounded-full shadow dark::shadow-gray-800"
                    src="https://shreethemes.in/techwind/layouts/assets/images/client/01.jpg"
                  />
                  <div className="pl-4">
                    <Link
                      className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                      href="#"
                    >
                      Barbara McIntosh
                    </Link>
                    <p className="text-slate-400">C.E.O</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400">
                    I didn&apos;t know a thing about icon design until I read
                    this book. Now I can create any icon I need in no time.
                    Great resource!
                  </p>
                </div>
              </li>
              <li className="rounded-lg shadow-lg dark::shadow-gray-800 p-6">
                <div className="flex items-center pb-6 border-b border-gray-100 dark::border-gray-800">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="h-16 w-16 rounded-full shadow dark::shadow-gray-800"
                    src="https://shreethemes.in/techwind/layouts/assets/images/client/05.jpg"
                  />
                  <div className="pl-4">
                    <Link
                      className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                      href="#"
                    >
                      Barbara McIntosh
                    </Link>
                    <p className="text-slate-400">C.E.O</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400">
                    There are so many things I had to do with my old software
                    that I just don&apos;t do at all with Techwind. Suspicious
                    but I can&apos;t say I don&apos;t love it.
                  </p>
                </div>
              </li>
            </ul>
            <ul className="space-y-8 hidden sm:block">
              <li className="rounded-lg shadow-lg dark::shadow-gray-800 p-6">
                <div className="flex items-center pb-6 border-b border-gray-100 dark::border-gray-800">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="h-16 w-16 rounded-full shadow dark::shadow-gray-800"
                    src="https://shreethemes.in/techwind/layouts/assets/images/client/02.jpg"
                  />
                  <div className="pl-4">
                    <Link
                      className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                      href="#"
                    >
                      Barbara McIntosh
                    </Link>
                    <p className="text-slate-400">C.E.O</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400">
                    The best part about Techwind is every time I pay my
                    employees, my bank balance doesn&apos;t go down like it used
                    to. Looking forward to spending this extra cash when I
                    figure out why my card is being declined.
                  </p>
                </div>
              </li>
              <li className="rounded-lg shadow-lg dark::shadow-gray-800 p-6">
                <div className="flex items-center pb-6 border-b border-gray-100 dark::border-gray-800">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="h-16 w-16 rounded-full shadow dark::shadow-gray-800"
                    src="https://shreethemes.in/techwind/layouts/assets/images/client/04.jpg"
                  />
                  <div className="pl-4">
                    <Link
                      className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                      href="#"
                    >
                      Barbara McIntosh
                    </Link>
                    <p className="text-slate-400">C.E.O</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400">
                    I&apos;m trying to get a hold of someone in support,
                    I&apos;m in a lot of trouble right now and they are saying
                    it has something to do with my books. Please get back to me
                    right away.
                  </p>
                </div>
              </li>
            </ul>
            <ul className="space-y-8 hidden lg:block">
              <li className="rounded-lg shadow-lg dark::shadow-gray-800 p-6">
                <div className="flex items-center pb-6 border-b border-gray-100 dark::border-gray-800">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="h-16 w-16 rounded-full shadow dark::shadow-gray-800"
                    src="https://shreethemes.in/techwind/layouts/assets/images/client/03.jpg"
                  />
                  <div className="pl-4">
                    <Link
                      className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                      href="#"
                    >
                      Barbara McIntosh
                    </Link>
                    <p className="text-slate-400">C.E.O</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400">
                    I used to have to remit tax to the EU and with Techwind I
                    somehow don&apos;t have to do that anymore. Nervous to
                    travel there now though.
                  </p>
                </div>
              </li>
              <li className="rounded-lg shadow-lg dark::shadow-gray-800 p-6">
                <div className="flex items-center pb-6 border-b border-gray-100 dark::border-gray-800">
                  <Image
                    height="50"
                    width="50"
                    alt="alt"
                    className="h-16 w-16 rounded-full shadow dark::shadow-gray-800"
                    src="https://shreethemes.in/techwind/layouts/assets/images/client/03.jpg"
                  />
                  <div className="pl-4">
                    <Link
                      className="text-lg hover:text-indigo-600 duration-500 ease-in-out"
                      href="#"
                    >
                      Barbara McIntosh
                    </Link>
                    <p className="text-slate-400">C.E.O</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-slate-400">
                    This is the fourth email I&apos;ve sent to your support
                    team. I am literally being held in jail for tax fraud.
                    Please answer your damn emails, this is important.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export const Testimonial5 = () => {
  return (
    <div className="overflow-hidden bg-secondary">
      <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
            Loved by business and individuals across the globe
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl dark::bg-slate-900">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800 dark::text-gray-200">
                  Working with SyracuseBookkeeping has been a game-changer for
                  my small business. Their team is incredibly knowledgeable and
                  always available to answer my questions. I highly recommend
                  SyracuseBookkeeping to any small business owner who wants to
                  take their financial management to the next leve
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark::bg-slate-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    />
                  </div>
                  <div className="grow ml-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 dark::text-gray-200">
                      Josh Tyson
                    </p>
                    <p className="text-xs text-gray-500 dark::text-gray-400">
                      Product Manager | Capsule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl dark::bg-slate-900">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800 dark::text-gray-200">
                  As a small business owner, I wear a lot of hats. Bookkeeping
                  was always a struggle for me, and I worried that I was making
                  costly mistakes. But since I started working with
                  SYRBookkeeping, I&apos;ve been relax knowing that my finances
                  are in good hands. Their team is professional, and always on
                  top of the latest regulations and best practices.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark::bg-slate-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    />
                  </div>
                  <div className="grow ml-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 dark::text-gray-200">
                      Luisa
                    </p>
                    <p className="text-xs text-gray-500 dark::text-gray-400">
                      Senior Director of Operations | Fitbit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-auto">
            <div className="flex flex-col bg-white rounded-xl dark::bg-slate-900">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800 dark::text-gray-200">
                  I used to dread tax season every year because I knew I&apos;d
                  be scrambling to get my financial records in order. But since
                  I started working with Syracuse, tax season has become a
                  breeze. They keep my books in order and make sure. Plus, their
                  analysis services have helped me identify new opportunities
                  and improvement in my business.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-b-xl md:px-7 dark::bg-slate-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      height="50"
                      width="50"
                      alt="alt"
                      className="h-8 w-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                    />
                  </div>
                  <div className="grow ml-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 dark::text-gray-200">
                      Alisa Williams
                    </p>
                    <p className="text-xs text-gray-500 dark::text-gray-400">
                      Entrepreneur | Happy customer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Accuracy rate
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              99.95%
            </p>
            <p className="mt-1 text-gray-400">in fulfilling orders</p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Startup businesses
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              2,000+
            </p>
            <p className="mt-1 text-gray-400">partner with Preline</p>
          </div>
          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-white">
              Happy customer
            </h4>
            <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
              85%
            </p>
            <p className="mt-1 text-gray-400">this year alone</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 transform lg:translate-x-32">
          <span className="w-fit">
            <svg
              className="w-40 h-auto sm:w-72"
              width="1115"
              height="636"
              viewBox="0 0 1115 636"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
                fill="currentColor"
                className="fill-orange-500"
              ></path>
              <path
                d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
                fill="currentColor"
                className="fill-cyan-500"
              ></path>
              <path
                d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
                fill="currentColor"
                className="fill-white"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
