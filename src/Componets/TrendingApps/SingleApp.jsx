import React from "react";
import download from "../../assets/icon-downloads.png";
import ratings from "../../assets/icon-ratings.png";
const SingleApp = ({ app }) => {
  const { downloads, ratingAvg, title, image } = app;
  return (
    <div>
      <div className="bg-white p-4  space-y-3 h-full text-center">
        <div className="flex items-center justify-center pt-2">
          <img className="rounded-lg" src={image} alt="" />
        </div>
        <p className="text-[#001931] font-medium text-lg">{title}</p>
        <div className="flex justify-between gap-10">
          <div className="bg-[#F1F5E8] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
            <img className="w-4" src={download} alt="" />
            <p className="text-[#00D390] font-medium">{downloads / 1000000}M</p>
          </div>
          <div className="bg-[#FFF0E1] flex items-center justify-between py-2 px-3 gap-2 rounded-lg">
            <img className="w-4" src={ratings} alt="" />
            <p className="text-[#FF8811] font-medium">{ratingAvg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleApp;
