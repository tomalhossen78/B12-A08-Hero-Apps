import React from "react";
import Container from "../Container/Container";
import img1 from "../../assets/demo-app (1).webp";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
const TrendingApps = () => {
  return (
    <Container>
      <div className="space-y-4 my-10">
        <h1 className="text-[#001931] text-center font-bold text-4xl">
          Trending Apps
        </h1>
        <p className="text-[#627382] text-lg text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex gap-4  justify-around">
          <div className="bg-white p-4  space-y-3">
            <img className="rounded-lg" src={img1} alt="" />
            <p className="text-[#001931] font-medium text-lg">
              Forest: Focus for Productivity
            </p>
            <div className="flex justify-between">
              <div className="bg-[#F1F5E8] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={download} alt="" />
                <p className="text-[#00D390] font-medium">9M</p>
              </div>
              <div className="bg-[#FFF0E1] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={ratings} alt="" />
                <p className="text-[#FF8811] font-medium">9M</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4  space-y-3">
            <img className="rounded-lg" src={img1} alt="" />
            <p className="text-[#001931] font-medium text-lg">
              Forest: Focus for Productivity
            </p>
            <div className="flex justify-between">
              <div className="bg-[#F1F5E8] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={download} alt="" />
                <p className="text-[#00D390] font-medium">9M</p>
              </div>
              <div className="bg-[#FFF0E1] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={ratings} alt="" />
                <p className="text-[#FF8811] font-medium">9M</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4  space-y-3">
            <img className="rounded-lg" src={img1} alt="" />
            <p className="text-[#001931] font-medium text-lg">
              Forest: Focus for Productivity
            </p>
            <div className="flex justify-between">
              <div className="bg-[#F1F5E8] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={download} alt="" />
                <p className="text-[#00D390] font-medium">9M</p>
              </div>
              <div className="bg-[#FFF0E1] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={ratings} alt="" />
                <p className="text-[#FF8811] font-medium">9M</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4  space-y-3">
            <img className="rounded-lg" src={img1} alt="" />
            <p className="text-[#001931] font-medium text-lg">
              Forest: Focus for Productivity
            </p>
            <div className="flex justify-between">
              <div className="bg-[#F1F5E8] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={download} alt="" />
                <p className="text-[#00D390] font-medium">9M</p>
              </div>
              <div className="bg-[#FFF0E1] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
                <img className="w-4" src={ratings} alt="" />
                <p className="text-[#FF8811] font-medium">9M</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-4">
          <button className="btn px-6 text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
            Show All
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TrendingApps;
