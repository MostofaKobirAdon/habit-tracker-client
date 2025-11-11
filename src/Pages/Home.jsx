import React, { useContext } from "react";
import Banner from "../Components/Home/Banner";
import RecentHabits from "../Components/Home/RecentHabits";
import WhyBuildHabits from "../Components/Home/WhyBuildHabits";
import Feedback from "../Components/Home/Feedback";
import AuthContext from "../Context/AuthContext";
import axios from "axios";

const latestHabitPromise = axios(
  `${import.meta.env.VITE_API_URL}/latest-habits`
);
const Home = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="bg-base-100 ">
      {loading ? (
        <div className="flex items-center justify-center min-h-[87vh] ">
          <span className="loading text-black loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="">
          <Banner></Banner>

          <RecentHabits latestHabitPromise={latestHabitPromise}></RecentHabits>
          <WhyBuildHabits></WhyBuildHabits>
          <Feedback></Feedback>
        </div>
      )}
    </div>
  );
};

export default Home;
