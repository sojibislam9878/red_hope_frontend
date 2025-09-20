import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../i18n"

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen lg:pt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
