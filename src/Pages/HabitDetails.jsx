import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Swal from "sweetalert2";
import { TbMoodSad } from "react-icons/tb";

const HabitDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showErr, setShowErr] = useState(false);

  const calculateStreak = (completionHistory = []) => {
    if (completionHistory.length === 0) return 0;

    const dates = completionHistory
      .map((d) => new Date(d).setHours(0, 0, 0, 0))
      .sort((a, b) => b - a);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (dates[0] !== today.getTime() && today - dates[0] > 86400000) return 0;

    let streak = 1;
    for (let i = 1; i < dates.length; i++) {
      const diff = (dates[i - 1] - dates[i]) / (1000 * 60 * 60 * 24);
      if (diff === 1) streak++;
      else break;
    }
    return streak;
  };

  const calculate30DaysProgress = (completionHistory = []) => {
    const last30Days = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      return date.toDateString();
    });

    const completedDates = completionHistory.map((d) =>
      new Date(d).toDateString()
    );
    const completedCount = last30Days.filter((day) =>
      completedDates.includes(day)
    ).length;

    return completedCount;
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/habits/${id}`)
      .then((res) => setData(res.data))
      .catch(() => setShowErr(true))
      .finally(() => setLoading(false));
  }, [id]);

  const {
    image,
    title,
    description,
    category,
    creator_name,
    creator_email,
    completionHistory = [],
  } = data || {};

  const streak = calculateStreak(completionHistory);
  const progress = calculate30DaysProgress(completionHistory);

  const handleMarkComplete = () => {
    if (!data) return;

    const today = new Date().toISOString().split("T")[0];

    const alreadyMarked = (completionHistory || []).some(
      (d) => new Date(d).toISOString().split("T")[0] === today
    );
    if (alreadyMarked) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Already marked as complete today!",
        showConfirmButton: false,
        timer: 1700,
      });
      return;
    }

    setData((prev) => ({
      ...prev,
      completionHistory: [...(prev.completionHistory || []), today],
    }));

    axios
      .patch(`${import.meta.env.VITE_API_URL}/habits/${id}/completionHistory`, {
        date: today,
      })
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Marked as complete",
          showConfirmButton: false,
          timer: 1700,
        });
        setData((prev) => ({
          ...prev,
          completionHistory:
            res.data.completionHistory || prev.completionHistory,
        }));
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.response?.data?.message || err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
        setData((prev) => ({
          ...prev,
          completionHistory: prev.completionHistory.filter((d) => d !== today),
        }));
      });
  };

  return (
    <div className="pt-28 pb-15">
      {loading ? (
        <div className="flex items-center justify-center min-h-[87vh] ">
          <span className="loading text-black loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="">
          {showErr ? (
            <div className="bg-primary/20 p-4 shadow-2xl rounded-2xl py-10  lg:max-w-6xl md:max-w-[700px] max-w-11/12 mx-auto flex flex-col items-center justify-center">
              <TbMoodSad size={130} />
              <h1 className="font-bold text-5xl my-2">Oops!</h1>
              <h2 className="text-2xl font-semibold text-gray-800 mt-0.5">
                Data Not Found
              </h2>
              <div className="md:flex-row flex-col gap-3 flex md:gap-3 mt-3">
                <Link to="/" className="btn btn-primary w-48  ">
                  Go to Home
                </Link>
                <Link to="/habits" className="btn btn-primary w-48">
                  Browse Public Habits
                </Link>
              </div>
            </div>
          ) : (
            <div className=" bg-primary/20 p-4 shadow-2xl rounded-2xl   lg:max-w-6xl md:max-w-[700px] max-w-11/12 mx-auto">
              <div className="w-full md:flex gap-9">
                <img
                  src={image}
                  alt=""
                  className="lg:w-1/3 md:w-1/2 w-full rounded-lg h-110 object-cover overflow-hidden"
                />
                <div className="md:w-1/2 lg:w-2/3 w-full">
                  <h1 className="text-3xl font-bold">{title}</h1>
                  <div className="flex items-center gap-3 my-2">
                    <p className="text-black">
                      <span className="font-semibold">Category :</span>
                    </p>
                    <div className="badge badge-primary">{category}</div>
                  </div>
                  <div className="border-2  rounded-xl">
                    <div className="border-b border-gray-500 px-1">
                      <h1 className="font-semibold ">Creator :</h1>
                    </div>
                    <div className="py-1 px-2">
                      <p className="text-black">
                        <span className="font-semibold">Name :</span>{" "}
                        {creator_name}
                      </p>
                      <p className="text-black">
                        <span className="font-semibold">Email :</span>{" "}
                        {creator_email}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-3">
                    <div className="">
                      <span className="font-semibold">Description :</span>
                    </div>
                    <p className="text-gray-800">{description}</p>
                  </div>
                  <div className="mt-3">
                    <span className="font-semibold">Progress:</span>
                    <br />
                    <progress
                      className="progress mt-2 rounded-full progress-primary h-5 w-full md:w-80 lg:w-120"
                      value={progress}
                      max="30"
                    ></progress>
                    <p className="text-sm text-gray-700 mt-1">
                      Current Streak: {streak} {streak === 1 ? "day" : "days"}
                    </p>
                  </div>
                  <button
                    onClick={handleMarkComplete}
                    className="btn btn-primary px-10 mt-4 btn-outline"
                  >
                    Mark Complete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HabitDetails;
