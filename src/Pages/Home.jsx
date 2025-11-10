import React from "react";
import Banner from "../Components/Home/Banner";
import RecentHabits from "../Components/Home/RecentHabits";
import WhyBuildHabits from "../Components/Home/WhyBuildHabits";
import Feedback from "../Components/Home/Feedback";

const Home = () => {
  return (
    <div className="bg-base-100">
      <Banner></Banner>
      <RecentHabits></RecentHabits>
      <WhyBuildHabits></WhyBuildHabits>
      <Feedback></Feedback>
    </div>
  );
};

export default Home;
