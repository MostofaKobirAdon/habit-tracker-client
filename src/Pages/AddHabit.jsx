import React from "react";
import { Link } from "react-router";

const AddHabit = () => {
  return (
    <div className="bg-base-100 min-h-screen py-b py-26">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center mb-8 text-3xl font-semibold text-blue-800">
          Add a Habit
        </h1>

        <div className="bg-blue-50 shadow-xl rounded-2xl p-10">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="form-control">
                <label className="label">Habit Title</label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-white"
                  placeholder="Title"
                />
              </div>

              <div className="form-control">
                <label className="label">Category</label>
                <select
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
                  type="text"
                  className="input input-bordered w-full bg-white"
                  placeholder="User Name"
                />
              </div>

              <div className="form-control">
                <label className="label">User Email</label>
                <input
                  type="email"
                  className="input input-bordered w-full bg-white"
                  placeholder="User Email"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">Description</label>
              <textarea
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
                  type="text"
                  placeholder="Add an image related to your habit"
                  className="input input-bordered bg-white w-full"
                />
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary w-full md:w-1/2">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;
