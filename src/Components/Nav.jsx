import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";
import logo from "../assets/logoFull.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to={"/"}
        className="hover:cursor-pointer text-[16px] font-medium hover:scale-101 hover:text-primary"
      >
        Home
      </NavLink>
      <NavLink
        to={"/add-habit"}
        className="hover:cursor-pointer text-[16px] font-medium hover:scale-101 hover:text-primary"
      >
        Add Habit
      </NavLink>
      <NavLink
        to={"/my-habits"}
        className="hover:cursor-pointer text-[16px] font-medium hover:scale-101 hover:text-primary"
      >
        My Habit
      </NavLink>
      <NavLink
        to={"/habits"}
        className="hover:cursor-pointer text-[16px] font-medium hover:scale-101 hover:text-primary"
      >
        Public Habits
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Signed out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="bg-secondary/90 shadow-sm fixed z-10 left-0 right-0 top-0">
      <div className="navbar max-w-11/12 md: lg:max-w-6xl md:max-w-[700px] max-w-11/12 mx-auto">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img src={logo} alt="" className="h-full w-26" />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-4 text-[#212121] menu-horizontal px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="h-12 w-12 hover:scale-105 duration-75"
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user.displayName || "User"}
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="h-full w-full rounded-full border-2 object-cover overflow-hidden border-primary"
                />
              </div>

              <Tooltip id="user-tooltip" place="top" effect="solid" />

              <div
                tabIndex="-1"
                className="dropdown-content text-center bg-base-100 rounded-box z-1 min-w-52 p-3 shadow-sm"
              >
                <h1 className="text-xl font-bold">{user.displayName}</h1>
                <p className="font-medium">{user.email}</p>
                <button
                  onClick={handleSignOut}
                  className="btn btn-primary mt-2"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
