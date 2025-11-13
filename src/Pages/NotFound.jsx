import React from "react";
import { PiNumberFourBold } from "react-icons/pi";
import { TbMoodSad } from "react-icons/tb";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-base-100 min-h-screen flex justify-center items-center">
      <div className="flex items-center flex-col justify-center">
        <div className="flex ">
          <PiNumberFourBold size={105} />
          <TbMoodSad size={105} />
          <PiNumberFourBold size={105} />
        </div>
        <h1 className="text-5xl mt-3 font-bold">Page Not Found</h1>
        <p className="text-lg text-gray-800 mt-2">
          The page you are looking for doesn't exist
        </p>
        <Link to={"/"} className="btn btn-primary mt-4 px-6">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
