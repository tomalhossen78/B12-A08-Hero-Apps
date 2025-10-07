import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../../Componets/Header/Navbar";
import Footer from "../../Componets/Footer/Footer";

const Root = () => {
  return (
    <div className="inter bg-[#D9D9D950]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
