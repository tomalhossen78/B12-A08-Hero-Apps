import React from "react";
import downlaodImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import appImg from "../../assets/demo-app (1).webp";
const InstalledApps = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-white p-4">
        <div className="flex items-center justify-between gap-6">
          <img className="w-[80px] rounded-lg" src={appImg} alt="" />
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-[#001931]">
              Forest: Focus for Productivity
            </h3>
            <div className="flex justify-start gap-2 items-center">
              <div className="flex justify-center items-center gap-1">
                <img className="w-3" src={downlaodImg} alt="" />
                <p className="text-[#00D390]">4.9M</p>
              </div>
              <div className="flex justify-center items-center gap-1">
                <img className="w-3" src={ratingsImg} alt="" />
                <p className="text-[#FF8811]">5</p>
              </div>
              <p className="text-[#627382]">300 MB</p>
            </div>
          </div>
        </div>
        <button className="btn bg-[#00D390] text-white">Uninstall</button>
      </div>
    </div>
  );
};

export default InstalledApps;
