import React, { useState, useRef, useEffect } from "react";
import "prismjs/themes/prism.css"; // Import Prism CSS
import Prism from "prismjs"; // Import Prism
import ResizeBox from "@/components/ResizeBox";
import MediaResize from "@/components/MediaResize";
const ResizableBox = () => {
  const [mediaDimensions, setMediaDimensions] = useState({});
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  const [formattedCode, setFormattedCode] = useState(
    `<div className="media query w-[${mediaDimensions.width}px] h-[${mediaDimensions.height}px]"></div>`
  );

  useEffect(() => {
    setFormattedCode(
      `<div className="media query w-[${mediaDimensions.width}px] h-[${
        mediaDimensions.height
      }px]">
    ${mediaDimensions?.boxes
      ?.map((box, i) =>
        i == 0
          ? `<div key="${box.id}" className="box w-[${box.width}px] h-[${box.height}px]"></div>`
          : `    <div key="${box.id}" className="box w-[${box.width}px] h-[${box.height}px]"></div>`
      )
      .join("\n")}
</div>`
    );
  }, [mediaDimensions]);

  const highlightedCode = Prism.highlight(
    formattedCode,
    Prism.languages.html,
    "html"
  );

  return (
    <div
      className="flex items-start justify-between w-[100vw] mt-4"
      id="container"
    >
      <div className="border relative w-[20vw] min-w-[20vw] ">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsPlusClicked(true)}
        >
          +
        </button>
      </div>
      <div className="border w-[80vw] h-[90vh]">
        <div className="w-full overflow-auto h-full relative">
          <MediaResize
            mediaDimensions={mediaDimensions}
            setMediaDimensions={setMediaDimensions}
            initialDimensions={{
              width: 800, // You can set the initial width as needed
              height: 550, // You can set the initial height as needed
            }}
            isPlusClicked={isPlusClicked}
            setIsPlusClicked={setIsPlusClicked}
          />
        </div>
      </div>
      <div className="border w-[20vw] min-w-[20vw] flex-col justify-start items-start overflow-auto">
        <p className="mb-2">Resulting JSX Code:</p>
        <pre className="line-numbers">
          <code
            className="language-html"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </div>
    </div>
  );
};

export default ResizableBox;
