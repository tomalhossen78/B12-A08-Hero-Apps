import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Componets/Header/Navbar";
import Footer from "../../Componets/Footer/Footer";
import ScrollToTop from "../../Componets/ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div className="inter bg-[#D9D9D950] flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
