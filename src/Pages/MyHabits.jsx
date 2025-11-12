import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";
import { data } from "react-router";

const MyHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const modalRef = useRef();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/habits?email=${user.email}`)
      .then((data) => setHabits(data.data))

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
  }, [user]);

  const handleDeleteHabit = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/habits/${id}`)
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your habit has been deleted.",
              icon: "success",
            });
            const filteredHabits = habits.filter((habit) => habit._id !== id);
            setHabits(filteredHabits);
          });
      }
    });
  };

  const handleOpenModal = () => {
    modalRef.current.showModal();
  };

  <div className="flex items-center justify-center min-h-[87vh] ">
    <span className="loading text-black loading-bars loading-xl"></span>
  </div>;

  return (
    <div>
      <div className="  md:max-w-6xl max-w-11/12 mx-auto pt-28 pb-16">
        <div className="">
          {!loading ? (
            <div className="">
              <h1 className="text-center mb-8 text-3xl font-semibold text-blue-800">
                My Habit
              </h1>
              <div className="">
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Current Streak</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {habits.map((habit) => (
                        <tr>
                          <th>1</th>
                          <td>{habit.title}</td>
                          <td>
                            <span className="badge badge-ghost badge-sm">
                              {habit.category}
                            </span>
                          </td>
                          <td>
                            <div className="badge badge-sm bg-emerald-600">
                              Primary
                            </div>
                          </td>
                          <td>{habit.createdAt.split("T")[0]}</td>
                          <th>
                            <div className="gap-2 flex">
                              <button
                                onClick={() => handleDeleteHabit(habit._id)}
                                className="btn btn-warning btn-xs"
                              >
                                Delete
                              </button>
                              <button
                                onClick={handleOpenModal}
                                className="btn btn-primary  btn-xs"
                              >
                                Update
                              </button>
                              <button className="btn btn-outline btn-primary  btn-xs">
                                Mark Complete
                              </button>
                            </div>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center min-h-[55vh] ">
              <span className="loading text-black loading-bars loading-xl"></span>
            </div>
          )}
        </div>

        <dialog
          ref={modalRef}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-xl text-center">Update Your Habit</h3>
            <div className="">
              <form className="">
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
                <div className="grid md:grid-cols-2 gap-8 mt-2">
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
                <div className="mt-2 ">
                  <label className="label">Description</label>
                  <textarea
                    required
                    name="description"
                    className="textarea textarea-bordered w-full bg-white h-28"
                    placeholder="Write a short description of your habit..."
                  ></textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-8 mt-2">
                  <div className=" ">
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
                <button className="btn btn-outline btn-primary mt-3">
                  Update Habit
                </button>
              </form>
            </div>
            <div className="modal-action abso">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default MyHabits;
