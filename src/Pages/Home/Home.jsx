import React from "react";
import Navbar from "../../Componets/Header/Navbar";
import Banner from "../../Componets/Banner/Banner";
import TrendingApps from "../../Componets/TrendingApps/TrendingApps";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div className="">
      <Banner />
      <TrendingApps data={data} />
    </div>
  );
};

export default Home;
