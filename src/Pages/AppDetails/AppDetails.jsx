import React, { useEffect, useState } from "react";
import downlaodImg from "../../assets/icon-downloads.png";
import ratingsImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import Container from "../../Componets/Container/Container";
import { useLocation } from "react-router-dom";
import { addToLs, getDataToLs } from "../../Utility/addToLS";
const AppDetails = () => {
  const [install, setInstall] = useState(false);
  const app = useLocation().state;
  useEffect(() => {
    const storedId = getDataToLs();
    const alreadyInstall = storedId.includes(app.id);
    // console.log(alreadyInstall);
    setInstall(alreadyInstall);
  }, []);

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
  } = app;
  const handleClickInstall = (id) => {
    // const alreadyInstall = storedId.includes(app.id);
    setInstall(true);
    addToLs(id);
  };
  return (
    <Container>
      <div className="flex items-center justify-start gap-10 my-10">
        <img className="shadow-2xl w-[300px] rounded-xl" src={image} />
        <div>
          <div className="border-b-2 border-gray-300 pb-4">
            <h3 className="text-[#001931] text-2xl font-bold">{title}</h3>
            <p className="text-[#627382] text-left">
              Developed by :{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex justify-start gap-10 items-center py-6">
            <div className="flex flex-col justify-center items-start gap-1">
              <img className="w-8" src={downlaodImg} alt="" />
              <h3>Downlaods</h3>
              <p className="text-3xl font-extrabold">{downloads / 1000000}M</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <img className="w-8" src={ratingsImg} alt="" />
              <h3>Average Ratings</h3>
              <p className=" text-3xl font-extrabold">{ratingAvg.toFixed(2)}</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
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
      <div className="text-left border-t-2 border-gray-300 py-6 mb-10">
        <h2 className="font-semibold text-2xl pb-4">Description</h2>
        <p className="text-[#627382]">{description}</p>
      </div>
    </Container>
  );
};

export default AppDetails;
