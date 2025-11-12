import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";
import { data } from "react-router";

const MyHabits = () => {
  const [habits, setHabits] = useState([]);
  const [lading, setLoading] = useState(false);
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
        }).finally(() => setLoading(false));
      });
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
          });
      }
    });
  };

  console.log(habits);

  // <div className="flex items-center justify-center min-h-[87vh] ">
  //           <span className="loading text-black loading-bars loading-xl"></span>
  //         </div>

  return (
    <div>
      <div className=" max-w-6xl mx-auto pt-28 pb-16">
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
                        <button className="btn btn-primary  btn-xs">
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
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            open modal
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box w-3/5">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default MyHabits;
