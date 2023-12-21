import React, { useState } from "react";

const ResizeBox = () => {
  const [dimensions, setDimensions] = useState({
    width: 200,
    height: 200,
  });

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

  return (
    <div className="p-16">
      <div
        className="border border-gray-500 relative w-64 h-64"
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-300 w-4 h-4 text-center cursor-ew-resize"
          onMouseDown={(e) => handleMouseDown(e, "right")}
        ></div>
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-blue-300 w-4 h-4 text-center cursor-ns-resize"
          onMouseDown={(e) => handleMouseDown(e, "bottom")}
        ></div>

        <div className="p-4 text-center">
          width: {dimensions.width} height: {dimensions.height}
        </div>
      </div>
    </div>
  );
};

export default ResizeBox;
