import React from "react";
import { Link, NavLink } from "react-router";

const Nav = () => {
  const links = (
    <>
      <NavLink to={"/"} className="hover:cursor-pointer">
        Home
      </NavLink>
      <NavLink to={"add-habit"} className="hover:cursor-pointer">
        Add Habit
      </NavLink>
    </>
  );
  return (
    <div className="bg-secondary/30 shadow-sm absolute z-10 left-0 right-0 top-0">
      <div className="navbar  max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h1 className=" text-xl">
            <span className="font-bold text-blue-500">HABIT</span>TRACKER
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 text-[#212121] menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            to={"/login"}
            className="btn btn-primary btn-outline hover:text-white"
          >
            Log In
          </Link>
          <Link to={"/register"} className="btn btn-primary text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
