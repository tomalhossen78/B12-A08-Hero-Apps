import React from "react";
import Container from "../Container/Container";
import SingleApp from "./SingleApp";
import { useNavigate } from "react-router-dom";
const TrendingApps = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  const sliceData = data.slice(0, 8);
  return (
    <Container>
      <div className="space-y-4 my-10">
        <h1 className="text-[#001931] text-center font-bold text-4xl">
          Trending Apps
        </h1>
        <p className="text-[#627382] text-lg text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-4 gap-4  justify-around">
          {sliceData.map((app) => (
            <SingleApp key={app.id} app={app} />
          ))}
        </div>
        <div className="flex items-center justify-center p-4">
          <button
            onClick={() => navigate("/apps")}
            className="btn px-6 text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
          >
            Show All
          </button>
        </div>
      </div>
    </Container>
  );
};

export default TrendingApps;
