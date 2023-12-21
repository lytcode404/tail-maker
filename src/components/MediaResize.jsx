import React, { useEffect, useState } from "react";
import ResizeBox from "./ResizeBox";

const MediaResize = ({
  mediaDimensions,
  setMediaDimensions,
  initialDimensions,
  handleButtonClick,
  isPlusClicked,
  setIsPlusClicked,
}) => {
  const [dimensions, setDimensions] = useState(initialDimensions);
  const [boxes, setBoxes] = useState([]);
  const [activeBoxId, setActiveBoxId] = useState(null);

  useEffect(() => {
    setMediaDimensions((prev) => ({
      ...prev,
      width: dimensions.width,
      height: dimensions.height,
    }));
  }, [dimensions]);

  useEffect(() => {
    setMediaDimensions((prev) => ({
      ...prev,
      boxes: boxes,
    }));
  }, [boxes]);

  useEffect(() => {
    if (isPlusClicked) {
      const newBox = {
        id: Date.now(),
        width: 100,
        height: 100,
        color: "",
        backgroundColor: "",
        CornerRadius: "",
        textSize: "",
        display: "",
      };

      setBoxes((prevBoxes) => [...prevBoxes, newBox]);
      setActiveBoxId(newBox.id);
      setIsPlusClicked(false);
    }
  }, [isPlusClicked]);

  const handleMouseDown = (e, direction) => {
    e.preventDefault();

    const initialX = e.clientX;
    const initialY = e.clientY;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - initialX;
      const deltaY = e.clientY - initialY;

      let newWidth = dimensions.width;
      let newHeight = dimensions.height;

      switch (direction) {
        case "right":
          newWidth = Math.max(50, dimensions.width + deltaX);
          break;
        case "left":
          newWidth = Math.max(50, dimensions.width - deltaX);
          break;
        case "bottom":
          newHeight = Math.max(50, dimensions.height + deltaY);
          break;
        case "top":
          newHeight = Math.max(50, dimensions.height - deltaY);
          break;
        default:
          break;
      }

      setDimensions((prevDimensions) => ({
        width: newWidth,
        height: newHeight,
      }));
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMinusClick = (boxId) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== boxId));
    setActiveBoxId(null);
  };

  const handleBoxClick = (boxId) => {
    setActiveBoxId(boxId);
  };

  const handleResize = (boxId, newDimensions) => {
    setBoxes((prevBoxes) =>
      prevBoxes.map((box) =>
        box.id === boxId ? { ...box, ...newDimensions } : box
      )
    );
  };

  return (
    <div className="p-16">
      <div
        className="border border-gray-500 relative w-64 h-64 overflow-auto"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        {/* controls */}
        <>
          <div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-300 w-4 h-4 text-center cursor-ew-resize z-10"
            onMouseDown={(e) => handleMouseDown(e, "right")}
          ></div>
          <div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-300 w-4 h-4 text-center cursor-ns-resize"
            onMouseDown={(e) => handleMouseDown(e, "bottom")}
          ></div>

          <div className="p-4 text-center">
            width: {dimensions.width} height: {dimensions.height}
          </div>
          <div className="absolute bottom-0 right-0 bg-black w-4 h-4 text-center cursor-pointer"></div>
        </>
        {/* boxes, childred */}
        {boxes && (
          <div className="flex flex-col gap-8 max-w-full">
            {boxes?.map((box) => (
              <div
                key={box.id}
                onClick={() => handleBoxClick(box.id)}
                className="max-w-full"
              >
                <ResizeBox
                  width={box.width}
                  height={box.height}
                  onResize={(newDimensions) =>
                    handleResize(box.id, newDimensions)
                  }
                  handleMinusClick={() => {
                    handleMinusClick(box.id);
                  }}
                  isActive={box.id === activeBoxId}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaResize;
