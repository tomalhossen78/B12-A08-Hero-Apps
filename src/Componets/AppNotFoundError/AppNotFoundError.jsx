import React from "react";
import errorImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router-dom";
import Container from "../Container/Container";
const AppNotFoundError = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <Container>
        <div className="flex flex-col justify-center items-center space-y-4 my-4">
          <img className="p-6" src={errorImg} alt="" />
          <h1 className="text-4xl text-[#001931] font-semibold">
            OPPS!! APP NOT FOUND
          </h1>
          <p className="text-[#627382]">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <button
            onClick={() => navigate(-1)}
            className="btn px-8 text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
          >
            Go Back
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AppNotFoundError;
