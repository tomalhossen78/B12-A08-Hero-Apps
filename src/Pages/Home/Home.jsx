import React from "react";
import Navbar from "../../Componets/Header/Navbar";
import Banner from "../../Componets/Banner/Banner";
import TrendingApps from "../../Componets/TrendingApps/TrendingApps";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../Loading/Loading";

const Home = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  // console.log(data);
  return (
    <div className="">
      {navigation.state === "loading" ? (
        <Loading />
      ) : (
        <div>
          <Banner />
          <TrendingApps data={data} />
        </div>
      )}
    </div>
  );
};

export default Home;
