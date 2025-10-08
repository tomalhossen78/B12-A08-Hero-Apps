import React from "react";
import Container from "../../Componets/Container/Container";
import InstalledApps from "../../Componets/InstalledApps/InstalledApps";

const Installation = () => {
  return (
    <Container>
      <div className="text-center space-y-4 my-16">
        <div className="space-y-2">
          <h1 className="text-4xl text-[#001931] font-bold">
            Your Installed Apps
          </h1>
          <p className="text-xl text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium text-[#001931]">Apps found</p>
          <label>
            <select className="select" name="" id="">
              <option value="none">Sort By Size</option>
              <option value="none">Low-High</option>
              <option value="none">High-Low</option>
            </select>
          </label>
        </div>
        <InstalledApps />
      </div>
    </Container>
  );
};

export default Installation;
