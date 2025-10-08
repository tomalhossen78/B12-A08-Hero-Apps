import React from "react";
import Container from "../../Componets/Container/Container";
import { useLoaderData } from "react-router-dom";
import SingleApp from "../../Componets/TrendingApps/SingleApp";

const Apps = () => {
  const data = useLoaderData();
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
          <p className="text-xl font-medium text-[#001931]">Apps found</p>
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
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <div className="grid grid-cols-4 gap-6 justify-around">
          {data.map((app) => (
            <SingleApp key={app.id} app={app} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Apps;
