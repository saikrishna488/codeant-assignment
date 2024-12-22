import React from "react";
import Logo from "../components/Logo";
import Aside from "./Aside";
import Main from "./Main";
import Navbar from "./Navbar";

const page = () => {
  return (
    <div className="h-full flex flex-row">
        <Navbar/>
        <Aside/>
        <Main/>
    </div>
  );
};

export default page;
