import React, { useContext, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddHabit = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleAddHabit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const reminder_time = form.reminderTime.value;
    const image = form.image.value;

    const newHabit = {
      title,
      category,
      description,
      reminder_time,
      image,
      creator_name: user.displayName,
      creator_email: user.email,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/habits`, newHabit)
      .then((data) => {
        form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your habit has been added.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Faild to add havit",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="bg-base-100 min-h-screen py-b py-26">
      {loading ? (
        <div className="flex items-center justify-center min-h-[87vh] ">
          <span className="loading text-black loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className="  lg:max-w-6xl md:max-w-[700px] max-w-11/12 mx-auto">
          <h1 className="text-center mb-8 text-2xl font-semibold text-blue-800">
            Add a Habit
          </h1>
          <p className="text-gray-700">Start Adding Your Habits</p>

          <div className="bg-blue-50 shadow-xl rounded-2xl p-10">
            <form onSubmit={handleAddHabit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className=" ">
                  <label className="label">Habit Title</label>
                  <input
                    required
                    name="title"
                    type="text"
                    className="input input-bordered w-full bg-white"
                    placeholder="Title"
                  />
                </div>

                <div className=" ">
                  <label className="label">Category</label>
                  <select
                    required
                    name="category"
                    defaultValue=""
                    className="select select-bordered w-full bg-white"
                  >
                    <option disabled hidden value={""}>
                      Select Category
                    </option>
                    <option>Morning</option>
                    <option>Work</option>
                    <option>Fitness</option>
                    <option>Evening</option>
                    <option>Study</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className=" ">
                  <label className="label">User Name</label>
                  <input
                    value={user.displayName}
                    readOnly
                    type="text"
                    className="input input-bordered w-full bg-white"
                    placeholder="User Name"
                  />
                </div>

                <div className=" ">
                  <label className="label">User Email</label>
                  <input
                    value={user.email}
                    readOnly
                    type="email"
                    className="input input-bordered w-full bg-white"
                    placeholder="User Email"
                  />
                </div>
              </div>

              <div className="">
                <label className="label">Description</label>
                <textarea
                  required
                  name="description"
                  className="textarea textarea-bordered w-full bg-white h-28"
                  placeholder="Write a short description of your habit"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="">
                  <label className="label">Reminder Time</label>
                  <input
                    required
                    type="time"
                    name="reminderTime"
                    className="input input-bordered bg-white w-full"
                  />
                </div>

                <div className=" ">
                  <label className="label">Upload Image</label>
                  <input
                    required
                    name="image"
                    type="text"
                    placeholder="Add an image related to your habit"
                    className="input input-bordered bg-white w-full"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary w-full md:w-1/2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddHabit;
