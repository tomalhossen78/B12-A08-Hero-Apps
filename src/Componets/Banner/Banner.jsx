import React from "react";
import Container from "../Container/Container";
import bannerImg from "../../assets/hero.png";

const Banner = () => {
  return (
    <>
      <div className="my-10 space-y-4">
        <h1 className="text-center mx-auto text-6xl font-bold max-w-[557px]">
          We Build{" "}
          <span className="font-black text-transparent bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-xl/8 text-center max-w-4xl mx-auto text-[#627382]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex justify-center items-center gap-6">
          <button className="border-[#D2D2D2] border-1 py-6 btn">
            <div className="flex justify-between items-center gap-2">
              <img
                className="w-8"
                src="https://cdn-icons-png.flaticon.com/512/300/300218.png"
                alt=""
              />
              <h1 className="text-[#001931] font-semibold text-xl">
                Google Play
              </h1>
            </div>
          </button>
          <button className="border-[#D2D2D2] border-1 py-6 btn">
            <div className="flex justify-between items-center gap-2">
              <img
                className="w-8"
                src="https://e7.pngegg.com/pngimages/566/36/png-clipart-app-store-iphone-apple-app-store-icon-blue-text-thumbnail.png"
                alt=""
              />
              <h1 className="text-[#001931] font-semibold text-xl">
                Google Play
              </h1>
            </div>
          </button>
        </div>
        <div>
          <img className="mx-auto w-3xl" src={bannerImg} alt="" />
          <div className="bg-gradient-to-tl from-[#9F62F2] to-[#632EE3] text-white py-12">
            <Container>
              <h1 className="text-4xl font-bold text-center mb-10">
                Trusted by Millions, Built for You
              </h1>
              <div className="flex justify-around items-center">
                <div className="space-y-2 text-center">
                  <p>Total Downloads</p>
                  <h1 className="text-7xl font-extrabold">29.6M</h1>
                  <p>21% more than last month</p>
                </div>
                <div className="space-y-2 text-center">
                  <p>Total Reviews</p>
                  <h1 className="text-7xl font-extrabold">906K</h1>
                  <p>46% more than last month</p>
                </div>
                <div className="space-y-2 text-center">
                  <p>Active Apps</p>
                  <h1 className="text-7xl font-extrabold">132+</h1>
                  <p>31 more will Launch</p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
