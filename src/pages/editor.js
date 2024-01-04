import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const UIEditor = () => {
  const [code, setCode] = useState(`() => {
  return (
    <div className="max-h-full sm:relative sm:py-5">
      <div className="z-0 absolute bottom-2/3 h-80 inset-0 bg-primary sm:w-1/2 sm:h-full"></div>
      <img
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
};`);
  const handlChangecode = (value) => {
    setCode(value);
  };

  if (!code) {
    return "loading...";
  }
  return (
    <div className="grid grid-cols-1">
      <div className="h-[50vh] overflow-y-auto">
        <LiveProvider code={code}>
          {/* <LiveEditor onChange={handlChangecode} /> */}
          <LiveError />
          <LivePreview />
        </LiveProvider>
      </div>
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue={code}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: {
            enabled: true,
            size: "proportional",
          },
          contextmenu: true,
        }}
        onChange={handlChangecode}
      />
    </div>
  );
};

export default UIEditor;
