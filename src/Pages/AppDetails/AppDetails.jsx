import React, { useEffect, useState } from "react";
import downlaodImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Container from "../../Componets/Container/Container";
import { useLoaderData } from "react-router-dom";
import { addToLs, getDataToLs } from "../../Utility/addToLS";
import { ToastContainer, toast } from "react-toastify";
import RatingBarChart from "../../Componets/RatingBarChart/RatingBarChart";
const AppDetails = () => {
  const app = useLoaderData();
  const [install, setInstall] = useState(false);
  useEffect(() => {
    const storedId = getDataToLs();
    const alreadyInstall = storedId.includes(app.id);
    setInstall(alreadyInstall);
  }, [app.id]);

  const {
    companyName,
    description,
    downloads,
    image,
    id,
    ratingAvg,
    reviews,
    size,
    title,
    ratings,
  } = app;
  const handleClickInstall = (id) => {
    toast.success(`${app.title} is installed Succesfully!`, {
      autoClose: 2000,
    });
    setInstall(true);
    addToLs(id);
  };
  const barChartData = [...ratings].reverse();
  return (
    <Container>
      <div className="md:flex items-center justify-start gap-10 my-10 mx-8 space-y-10">
        <img
          className="shadow-xl w-[300px] rounded-xl dark:bg-white md:p-0 p-4"
          src={image}
        />
        <div>
          <div className="border-b-2 border-gray-300 pb-4">
            <h3 className="text-[#001931] dark:text-white md:text-3xl text-2xl font-bold">
              {title}
            </h3>
            <p className="text-[#627382] dark:text-white text-left">
              Developed by :{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex justify-start gap-4 md:gap-10 items-center py-6">
            <div className="flex flex-col justify-center items-center gap-1">
              <img className="w-8" src={downlaodImg} alt="" />
              <h3>Downlaods</h3>
              <p className="text-3xl font-extrabold">{downloads / 1000000}M</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <img className="w-8" src={ratingsImg} alt="" />
              <h3>Average Ratings</h3>
              <p className=" text-3xl font-extrabold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <img className="w-8" src={reviewImg} alt="" />
              <h3>Total Reviews</h3>
              <p className="text-3xl font-extrabold">
                {(reviews / 1000).toFixed(0)}K
              </p>
            </div>
          </div>
          <div className="text-left">
            <button
              disabled={install}
              onClick={() => handleClickInstall(id)}
              className={`btn bg-[#00D390] text-white`}
            >
              {install ? "Installed" : `Install Now(${size}MB)`}
            </button>
          </div>
        </div>
      </div>
      <div className="text-left border-t-2 border-gray-300 py-6 mb-10 px-6 md:px-0">
        <h2 className="font-semibold text-2xl pb-4">Description</h2>
        <p className="text-[#627382] dark:text-white">{description}</p>
      </div>
      <div className="px-6 md:px-0">
        <RatingBarChart barChartData={barChartData} />
      </div>
      <ToastContainer />
    </Container>
  );
};

export default AppDetails;
