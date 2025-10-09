import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../Componets/Header/Navbar";
import Footer from "../../Componets/Footer/Footer";
import ScrollToTop from "../../Componets/ScrollToTop/ScrollToTop";
import Loading from "../Loading/Loading";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div className="inter bg-[#D9D9D950] flex flex-col min-h-screen">
      <ScrollToTop />
      {navigation.state === "loading" && <Loading />}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
