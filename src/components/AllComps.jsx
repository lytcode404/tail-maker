import { Navigation1 } from "@/ui components/Navbars";
import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import "prismjs/themes/prism.css"; // Import Prism CSS
import Prism from "prismjs"; // Import Prism
import ClipboardJS from "clipboard";
import { comps } from "./Comps";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Editor from "@monaco-editor/react";

React.useLayoutEffect = React.useEffect;
const CodeViewer = ({ component }) => {
  const [jsxCode, setJsxCode] = useState("");
  const [isHoveredComp, setIsHoveredComp] = useState(false);
  const [isHoveredCode, setIsHoveredCode] = useState(false);
  const [isShowCodeClicked, setIsShowCodeClicked] = useState(false);
  const [highlightedCode, setHighlightedCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const buttonRef = useRef(null);
  const [code, setCode] = useState("");
  useEffect(() => {
    const jscode = ReactDOMServer.renderToString(component()).toString();
    setHighlightedCode(Prism.highlight(jscode, Prism.languages.html, "html"));
    setJsxCode(jscode);
    setCode(jscode);
  }, [component]);

  const handlChangecode = (value) => {
    setCode(value);
  };

  const handleCopyClick = () => {
    // Check if a copy operation is already in progress
    if (isCopied) {
      return;
    }

    const clipboard = new ClipboardJS(buttonRef.current, {
      text: () => jsxCode,
    });

    clipboard.on("success", (e) => {
      e.clearSelection();
      setIsCopied(true);
      console.log("Text copied successfully:", jsxCode);
      setTimeout(() => {
        setIsCopied(false);
        clipboard.destroy(); // Destroy the instance after the success timeout
        console.log("ClipboardJS instance destroyed");
      }, 5000);
    });

    clipboard.on("error", (e) => {
      console.error("Copy error:", e);
      setIsCopied(false);
      clipboard.destroy(); // Destroy the instance in case of an error
      console.log("ClipboardJS instance destroyed due to error");
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative hover:border hover:border-blue-500"
        onMouseEnter={() => setIsHoveredComp(true)}
        onMouseLeave={() => setIsHoveredComp(false)}
      >
        {/* {component()} */}
        <LiveProvider code={jsxCode}>
          <LivePreview />
        </LiveProvider>
        {isHoveredComp && (
          <button
            onClick={() => setIsShowCodeClicked(!isShowCodeClicked)}
            className="absolute top-2 right-3 bg-gray-900 text-white z-20 border rounded px-2 py-2"
          >
            {"show code"}
          </button>
        )}
      </div>
      {isShowCodeClicked && (
        <div
          onClick={() => setIsShowCodeClicked(false)}
          className="fixed top-0 left-0 right-0 bottom-0 w-[100vw] h-[100vh] bg-transparent"
        ></div>
      )}
      {isShowCodeClicked && (
        <div
          className="relative z-20 p-4 bg-slate-200 w-full overflow-x-auto"
          onMouseEnter={() => setIsHoveredCode(true)}
          onMouseLeave={() => setIsHoveredCode(false)}
        >
          {/* <pre className="line-numbers">
            <code
              className="language-html"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre> */}
          <Editor
            height="100vh"
            defaultLanguage="javascript"
            defaultValue={component()}
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
          {isHoveredCode && (
            <button
              ref={buttonRef}
              onClick={handleCopyClick}
              className="absolute top-2 right-3 bg-gray-900 text-white z-20 border rounded px-2 py-2"
            >
              {isCopied ? "Copied!" : "</> copy code"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const AllComps = ({ searchText }) => {
  const [filterComps, setFilterComps] = useState({});
  useEffect(() => {
    const filteredKeys = Object.keys(comps).filter((comp) =>
      comp.toLowerCase().includes(searchText.toLowerCase())
    );

    const filteredComps = Object.fromEntries(
      filteredKeys.map((key) => [key, comps[key]])
    );

    setFilterComps(filteredComps);
  }, [searchText]);

  return (
    <div className="pt-20 flex flex-col gap-2 px-4">
      {Object.keys(filterComps).map((comp) => (
        <CodeViewer key={comp} component={comps[comp]} />
      ))}
    </div>
  );
};

export default AllComps;
