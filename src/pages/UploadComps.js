import { db } from "@/db/firebase";
import React, { useState } from "react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadComps = () => {
  const [inputText, setInputText] = useState("");
  const [compTags, setCompTags] = useState("#");
  const [textareaRows, setTextareaRows] = useState(4); // Initial number of rows

  const handleInputChange = (e) => {
    const calculatedRows = Math.max(e.target.value.split("\n").length, 4);
    setTextareaRows(calculatedRows);
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputText.trim() === "" || compTags.trim() === "") {
      toast.warning("field cannot be empty!");
    } else {
      const compRef = collection(db, "allComps");
      await addDoc(compRef, { comp: inputText, compTags: compTags });
      toast.success("Data uploaded successfully!", {
        autoClose: 1000,
      });
      setInputText("");
      // setCompTags("#");
      setTextareaRows(4);
    }
  };

  return (
    <div className="m-4">
      <input
        type="text"
        className="border p-2 w-full mb-4"
        placeholder="Enter comp tags text here"
        value={compTags}
        onChange={(e) => setCompTags(e.target.value)}
      />
      <textarea
        className="border p-2 w-full"
        rows={textareaRows}
        placeholder="Enter text here"
        value={inputText}
        onChange={handleInputChange}
      ></textarea>
      <button
        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default UploadComps;
