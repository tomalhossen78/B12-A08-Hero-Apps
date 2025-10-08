import React from "react";
import Container from "../Container/Container";
import logo from "../../../src/assets/logo.png";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const menu = (
    <>
      <NavLink to="/" className="mr-6">
        Home
      </NavLink>
      <NavLink to="/apps" className="mr-6">
        Apps
      </NavLink>
      <NavLink to="/installation" className="mr-6">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-md">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menu}
              </ul>
            </div>

            <a
              href="/"
              className="py-6 btn btn-ghost text-xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
            >
              <img className="w-10" src={logo} alt="logo" /> HERO.IO
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/tomalhossen78/B12-A08-Hero-Apps"
              className="btn text-white bg-gradient-to-tl from-[#9F62F2] to-[#632EE3]"
            >
              <FaGithub />
              Contribute
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
