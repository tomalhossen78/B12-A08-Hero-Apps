import React from "react";
import Container from "../../Componets/Container/Container";
import InstalledApps from "../../Componets/InstalledApps/InstalledApps";
import { useLoaderData } from "react-router-dom";

const Installation = () => {
  const data = useLoaderData();
  return (
    <Container>
      <div className="text-center space-y-4 my-16 min-h-[60vh]">
        <div className="space-y-2">
          <h1 className="text-4xl  text-[#001931] dark:text-white font-bold">
            Your Installed Apps
          </h1>
          <p className="text-xl text-[#627382] dark:text-gray-300">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <InstalledApps data={data} />
      </div>
    </Container>
  );
};

export default Installation;
