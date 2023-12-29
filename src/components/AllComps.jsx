import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "@/db/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

const AllComps = ({ searchText }) => {
  const [allComps, setAllComps] = useState([]);
  const [isHoveredComp, setIsHoveredComp] = useState(false);
  const [isShowCodeClicked, setIsShowCodeClicked] = useState(false);
  const [isCodeChanged, setIsCodeChanged] = useState(false);
  const [selectedCodeIndex, setSelectedCodeIndex] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const compCollection = collection(db, "allComps");
        const compSnapshot = await getDocs(compCollection);
        const compData = compSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log(compData[0].comp);
        setAllComps(compData);
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  const handleUpdateCode = async (id, i) => {
    setIsCodeChanged(false);
    setIsShowCodeClicked(false);
    try {
      const compDocRef = doc(db, "allComps", id);
      await updateDoc(compDocRef, { comp: allComps[i].comp });

      toast.success("Code updated successfully!");
    } catch (error) {
      console.error("Error updating code: ", error);
      toast.error("Error updating code. Please try again.");
    }
  };

  const handleChangeCode = (i, value) => {
    setIsCodeChanged(true);
    setAllComps((prev) => {
      const updatedComps = [...prev];
      updatedComps[i].comp = value;
      return updatedComps;
    });
  };

  if (!allComps.length) {
    return "loading...";
  }

  // const [filterComps, setFilterComps] = useState({});
  // useEffect(() => {
  //   const filteredKeys = Object.keys(comps).filter((comp) =>
  //     comp.toLowerCase().includes(searchText.toLowerCase())
  //   );

  //   const filteredComps = Object.fromEntries(
  //     filteredKeys.map((key) => [key, comps[key]])
  //   );

  //   setFilterComps(filteredComps);
  // }, [searchText]);

  return (
    <div className="pt-40">
      {allComps.map((comp, i) => {
        return (
          <div key={i} className={`grid grid-cols-1`}>
            <div
              className="relative w-full hover:border hover:border-blue-500"
              onMouseEnter={() => setIsHoveredComp(true)}
              onMouseLeave={() => setIsHoveredComp(false)}
            >
              <LiveProvider code={comp.comp}>
                {/* <LiveEditor /> */}
                <LiveError />
                <LivePreview />
              </LiveProvider>
              {isHoveredComp && (
                <button
                  onClick={() => {
                    setIsShowCodeClicked(!isShowCodeClicked);
                    setSelectedCodeIndex(i);
                  }}
                  className="absolute top-2 right-3 bg-gray-900 text-white z-20 border rounded px-2 py-2"
                >
                  {"show code"}
                </button>
              )}

              {isHoveredComp && isCodeChanged && selectedCodeIndex === i && (
                <button
                  onClick={() => handleUpdateCode(comp.id, i)}
                  className="absolute top-2 left-3 bg-blue-500 text-white z-20 border rounded px-2 py-2"
                >
                  {"Update Code"}
                </button>
              )}
            </div>

            {isShowCodeClicked && selectedCodeIndex === i && (
              <Editor
                height="70vh"
                defaultLanguage="javascript"
                defaultValue={comp.comp || "<div>hello</div>"}
                theme="vs-dark"
                options={{
                  fontSize: 14,
                  minimap: {
                    enabled: true,
                    size: "proportional",
                  },
                  contextmenu: true,
                }}
                onChange={(value) => handleChangeCode(i, value)}
              />
            )}
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default AllComps;
{
  /* <div className="pt-20 flex flex-col gap-2 px-4">
  {Object.keys(filterComps).map((comp) => (
    <CodeViewer key={comp} component={comps[comp]} />
  ))}
</div>; */
}
