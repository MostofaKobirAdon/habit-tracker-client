import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "../Components/Card";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/habits`)
      .then((res) => setHabits(res.data))
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <div className="flex items-center justify-center min-h-[87vh] ">
            <span className="loading text-black loading-bars loading-xl"></span>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto mt-20 mb-10">
            <div className="text-center">
              <h1 className="  text-2xl text-base-content font-semibold">
                All Public Habits
              </h1>
              <p className="text-gray-600 ">
                Explore the habits people are building every day.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-15 mt-8">
              {habits.map((habit) => (
                <Card key={habit._id} data={habit}></Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicHabits;
