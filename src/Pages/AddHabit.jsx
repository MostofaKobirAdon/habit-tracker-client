import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddHabit = () => {
  const { user } = useContext(AuthContext);
  const handleAddHabit = (e) => {
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
      });
  };
  return (
    <div className="bg-base-100 min-h-screen py-b py-26">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-8 text-3xl font-semibold text-blue-800">
          Add a Habit
        </h1>

        <div className="bg-blue-50 shadow-xl rounded-2xl p-10">
          <form onSubmit={handleAddHabit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">Habit Title</label>
                <input
                  name="title"
                  type="text"
                  className="input input-bordered w-full bg-white"
                  placeholder="Title"
                />
              </div>

              <div className="form-control">
                <label className="label">Category</label>
                <select
                  name="category"
                  defaultValue="Select Category"
                  className="select select-bordered w-full bg-white"
                >
                  <option disabled>Select Category</option>
                  <option>Morning</option>
                  <option>Work</option>
                  <option>Fitness</option>
                  <option>Evening</option>
                  <option>Study</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">User Name</label>
                <input
                  value={user.displayName}
                  readOnly
                  type="text"
                  className="input input-bordered w-full bg-white"
                  placeholder="User Name"
                />
              </div>

              <div className="form-control">
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

            <div className="form-control">
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full bg-white h-28"
                placeholder="Write a short description of your habit..."
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">Reminder Time</label>
                <input
                  type="time"
                  name="reminderTime"
                  className="input input-bordered bg-white w-full"
                />
              </div>

              <div className="form-control">
                <label className="label">Upload Image</label>
                <input
                  name="image"
                  type="text"
                  placeholder="Add an image related to your habit"
                  className="input input-bordered bg-white w-full"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary w-full md:w-1/2">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
