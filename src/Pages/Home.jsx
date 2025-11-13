import React, { useContext, useEffect, useState } from "react";
import Banner from "../Components/Home/Banner";
import RecentHabits from "../Components/Home/RecentHabits";
import WhyBuildHabits from "../Components/Home/WhyBuildHabits";
import Feedback from "../Components/Home/Feedback";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import WhyChooseUs from "../Components/Home/WhyChooseUs";

const Home = () => {
  const { loading } = useContext(AuthContext);
  const [latestHabits, setLatestHabits] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/latest-habits`)
      .then((data) => setLatestHabits(data.data))
      .catch((err) =>
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        })
      );
  }, []);

  return (
    <div className="bg-base-100 ">
      {loading ? (
        <div className="flex items-center justify-center min-h-[87vh] ">
          <span className="loading text-black loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="">
          <Banner></Banner>

          <RecentHabits latestHabits={latestHabits}></RecentHabits>
          <WhyBuildHabits></WhyBuildHabits>
          <Feedback></Feedback>
          <WhyChooseUs></WhyChooseUs>
        </div>
      )}
    </div>
  );
};

export default Home;
