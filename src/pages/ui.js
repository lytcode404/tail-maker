import AllComps from "@/components/AllComps";
import Header from "@/components/Header";
import React, { useState } from "react";

const UI = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="bg-white text-black">
      <Header setSearchText={setSearchText} />
      <AllComps searchText={searchText} />
    </div>
  );
};

export default UI;
