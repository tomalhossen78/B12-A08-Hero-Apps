import React, { useState } from "react";
import Container from "../../Componets/Container/Container";
import { useLoaderData, useNavigate } from "react-router-dom";
import SingleApp from "../../Componets/TrendingApps/SingleApp";

const Apps = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const term = search.trim().toLowerCase();
  const searchedData = term
    ? data.filter((item) => item.title.trim().toLowerCase().includes(term))
    : data;

  const conditionalData = (
    <>
      <h1 className="text-4xl font-bold py-30">No Apps Found</h1>
      <button
        onClick={() => window.location.reload()}
        className="btn px-6 text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
      >
        Show All Apps
      </button>
    </>
  );
  return (
    <Container>
      <div className="text-center space-y-4 my-16">
        <div className="space-y-2">
          <h1 className="text-4xl text-[#001931] font-bold">
            Our All Applications
          </h1>
          <p className="text-xl text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xl font-medium text-[#001931]">
            {searchedData.length} Apps found
          </p>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
        {searchedData.length === 0 && conditionalData}
        <div className="grid grid-cols-4 gap-6 justify-around">
          {searchedData.map((app) => (
            <SingleApp key={app.id} app={app} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Apps;
