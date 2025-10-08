import React from "react";
import logo from "../../assets/logo.png";
import Container from "../../Componets/Container/Container";
const Loading = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-6xl font-medium text-[#627382] animate-pulse">
            L{" "}
          </h1>
          <img className="w-30 p-4 animate-spin" src={logo} alt="" />
          <span className="text-6xl font-medium text-[#627382] animate-pulse">
            {" "}
            ODING
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Loading;
