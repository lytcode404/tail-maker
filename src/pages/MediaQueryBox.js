import React, { useState } from "react";

const ResizeBox = () => {
  const [dimensions, setDimensions] = useState({
    width: 200,
    height: 200,
  });

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("addElements");
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

  const handleDialogMouseDown = (e) => {
    setDragStart({ x: e.clientX, y: e.clientY });
    document.addEventListener("mousemove", handleDialogMouseMove);
    document.addEventListener("mouseup", handleDialogMouseUp);
  };

  const handleDialogMouseMove = (e) => {
    const deltaX = e.clientX - dragStart.x;
    const deltaY = e.clientY - dragStart.y;

    setDialogPosition({
      x: dialogPosition.x + deltaX,
      y: dialogPosition.y + deltaY,
    });

    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleDialogMouseUp = () => {
    document.removeEventListener("mousemove", handleDialogMouseMove);
    document.removeEventListener("mouseup", handleDialogMouseUp);
  };

  return (
    <div className="p-16 relative">
      {isDialogOpen && (
        <div
          className="fixed top-0 left-0 bg-white w-[100vw] h-[100vh]"
          onClick={() => setDialogOpen(false)}
        ></div>
      )}
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
        <button
          className="absolute bottom-0 right-0 bg-black w-4 h-4 text-center cursor-pointer"
          onClick={openDialog}
        ></button>
        {/* Dialog */}
        {isDialogOpen && (
          <div
            className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2  flex justify-center items-center cursor-move"
            onMouseDown={handleDialogMouseDown}
            style={{
              transform: `translate(${dialogPosition.x}px, ${dialogPosition.y}px)`,
            }}
          >
            <div className="bg-black text-white p-4 rounded-md w-96">
              {/* Tabs */}
              <div className="flex border-b">
                <div
                  className={`cursor-pointer p-4 ${
                    activeTab === "addElements"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("addElements")}
                >
                  Add Elements
                </div>
                <div
                  className={`cursor-pointer p-4 ${
                    activeTab === "properties"
                      ? "border-b-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => handleTabClick("properties")}
                >
                  Properties
                </div>
              </div>
              {activeTab === "addElements" && (
                <div className="flex flex-col justify-between items-start gap-3 text-sm">
                  <h2 className="text-lg font-semibold">Add Elements</h2>
                  <button className="bg-blue-500 text-white px-3 py-1 ">
                    Add Box
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 ">
                    Add Image
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1 ">
                    Add Text
                  </button>
                  <button className="bg-blue-500 text-white px-3 py-1">
                    Add Input Field
                  </button>
                </div>
              )}

              {activeTab === "properties" && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Properties</h2>
                  <label className="block mb-2">
                    Width:
                    <input
                      type="number"
                      value={dimensions.width}
                      onChange={(e) =>
                        setDimensions({
                          ...dimensions,
                          width: parseInt(e.target.value, 10) || 0,
                        })
                      }
                      className="border p-1 w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    Height:
                    <input
                      type="number"
                      value={dimensions.height}
                      onChange={(e) =>
                        setDimensions({
                          ...dimensions,
                          height: parseInt(e.target.value, 10) || 0,
                        })
                      }
                      className="border p-1 w-full"
                    />
                  </label>
                  <label className="block mb-2">
                    Color:
                    <input
                      type="color"
                      value="#000000"
                      onChange={(e) => console.log(e.target.value)}
                      className="border p-1"
                    />
                  </label>
                  {/* Add more property controls as needed */}
                </div>
              )}

              {/* Close button */}
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-500 px-3 py-1 rounded-md"
                  onClick={closeDialog}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResizeBox;
