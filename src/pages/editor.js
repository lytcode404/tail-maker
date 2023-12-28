import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { db } from "@/db/firebase";
import { collection, getDocs } from "firebase/firestore";

const UIEditor = () => {
  const [code, setCode] = useState("");
  const [allComps, setAllComps] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const compCollection = collection(db, "allComps");
        const compSnapshot = await getDocs(compCollection);
        const compData = compSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllComps(compData);
        setCode(compData[0].comp);
        // console.log(compData[0].comp);
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast.error("Error fetching data. Please try again.");
      }
    };

    fetchData();
  }, []);

  const handlChangecode = (value) => {
    setCode(value);
  };

  if (!code) {
    return "loading...";
  }

  return (
    <div className="grid grid-cols-2">
      <Editor
        height="100vh"
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
      <LiveProvider code={code}>
        {/* <LiveEditor /> */}
        <LiveError />
        <LivePreview />
      </LiveProvider>
    </div>
  );
};

export default UIEditor;
