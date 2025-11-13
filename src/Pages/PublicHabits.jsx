import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "../Components/Card";

const PublicHabits = () => {
  const [habits, setHabits] = useState([]); // all data
  const [filteredHabits, setFilteredHabits] = useState([]); // filtered data
  const [loading, setLoading] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  // Load data once
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/habits`)
      .then((res) => {
        setHabits(res.data);
        setFilteredHabits(res.data);
      })
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

  // search handler
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (!value) {
      setFilteredHabits(habits);
      return;
    }
    const filtered = habits.filter((habit) =>
      habit.title.toLowerCase().includes(value)
    );
    setFilteredHabits(filtered);
  };

  // filter by category
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    if (!value) {
      setFilteredHabits(habits);
      return;
    }
    const filtered = habits.filter((habit) => habit.category === value);
    setFilteredHabits(filtered);
  };

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[87vh]">
          <span className="loading text-black loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="lg:max-w-6xl md:max-w-[700px] max-w-11/12 mx-auto mt-20 mb-10">
          <div className="text-center">
            <h1 className="text-2xl text-base-content font-semibold">
              All Public Habits
            </h1>
            <p className="text-gray-600">
              Explore the habits people are building every day.
            </p>
          </div>

          <div className="md:flex-row justify-between flex flex-col md:gap-0 gap-3">
            <div>
              <label className="label">Search For Public Habits</label> <br />
              <label className="input w-80">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  type="search"
                  onChange={handleSearch}
                  placeholder="Search"
                />
              </label>
            </div>

            <div>
              <label className="label">Filter by Category</label> <br />
              <select
                onChange={handleFilter}
                name="category"
                defaultValue=""
                className="select w-80 select-bordered bg-white"
              >
                <option disabled hidden value="">
                  Select Category
                </option>
                <option value="">All</option>
                <option value="Morning">Morning</option>
                <option value="Work">Work</option>
                <option value="Fitness">Fitness</option>
                <option value="Evening">Evening</option>
                <option value="Study">Study</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-8">
            {filteredHabits.map((habit) => (
              <Card key={habit._id} data={habit} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicHabits;
