import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../Context/AuthContext";
import Swal from "sweetalert2";

const MyHabits = () => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const modalRef = useRef();
  const { user } = useContext(AuthContext);

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

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/habits?email=${user.email}`)
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
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your habit has been deleted.",
              icon: "success",
            });
            setHabits((prev) => prev.filter((habit) => habit._id !== id));
          });
      }
    });
  };

  const handleOpenModal = (habit) => {
    setSelectedHabit(habit);
    modalRef.current.showModal();
  };

  const handleUpdateHabit = (e) => {
    modalRef.current.close();
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const description = form.description.value;
    const reminder_time = form.reminderTime.value;
    const image = form.image.value;

    const updatedHabit = {
      title,
      category,
      description,
      reminder_time,
      image,
      creator_name: selectedHabit.creator_name,
      creator_email: selectedHabit.creator_email,
      createdAt: selectedHabit.createdAt,
      completionHistory: selectedHabit.completionHistory,
    };

    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/habits/${selectedHabit._id}`,
        updatedHabit
      )
      .then(() => {
        setHabits((prev) =>
          prev.map((habit) =>
            habit._id === selectedHabit._id
              ? { ...updatedHabit, _id: selectedHabit._id }
              : habit
          )
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Habit Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
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
  };

  const handleMarkComplete = (habit) => {
    const today = new Date().toISOString().split("T")[0];

    if (
      habit.completionHistory?.some(
        (d) => new Date(d).toISOString().split("T")[0] === today
      )
    ) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Already marked as complete today!",
        showConfirmButton: false,
        timer: 1700,
      });
      return;
    }

    const updatedCompletionHistory = [
      ...(habit.completionHistory || []),
      today,
    ];
    setHabits((prev) =>
      prev.map((h) =>
        h._id === habit._id
          ? { ...h, completionHistory: updatedCompletionHistory }
          : h
      )
    );

    axios
      .patch(
        `${import.meta.env.VITE_API_URL}/habits/${habit._id}/completionHistory`,
        { date: today }
      )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Marked as complete!",
          showConfirmButton: false,
          timer: 1700,
        });
        if (res.data?.completionHistory) {
          setHabits((prev) =>
            prev.map((h) =>
              h._id === habit._id
                ? { ...h, completionHistory: res.data.completionHistory }
                : h
            )
          );
        }
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.response?.data?.message || err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
        setHabits((prev) =>
          prev.map((h) =>
            h._id === habit._id
              ? { ...h, completionHistory: habit.completionHistory || [] }
              : h
          )
        );
      });
  };

  return (
    <div>
      <div className="lg:max-w-6xl md:max-w-[700px] max-w-11/12 mx-auto pt-28 pb-16">
        {!loading ? (
          <>
            <h1 className="text-center mb-8 text-2xl font-semibold text-blue-800">
              My Habits
            </h1>
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
                  {habits.map((habit, index) => (
                    <tr key={habit._id}>
                      <th>{index + 1}</th>
                      <td>{habit.title}</td>
                      <td>
                        <span className="badge badge-ghost badge-sm">
                          {habit.category}
                        </span>
                      </td>
                      <td>
                        <div className="badge badge-sm bg-emerald-600">
                          {calculateStreak(habit.completionHistory)}{" "}
                          {calculateStreak(habit.completionHistory) === 1
                            ? "day"
                            : "days"}
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
                            onClick={() => handleOpenModal(habit)}
                            className="btn btn-primary btn-xs"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => handleMarkComplete(habit)}
                            className="btn btn-outline btn-primary btn-xs"
                          >
                            Mark Complete
                          </button>
                        </div>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center min-h-[55vh] ">
            <span className="loading text-black loading-bars loading-xl"></span>
          </div>
        )}

        <dialog
          ref={modalRef}
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box max-w-3xl">
            <h3 className="font-bold text-xl text-center">Update Your Habit</h3>
            <form onSubmit={handleUpdateHabit}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="label">Habit Title</label>
                  <input
                    required
                    name="title"
                    type="text"
                    defaultValue={selectedHabit?.title}
                    className="input input-bordered w-full bg-white"
                  />
                </div>
                <div>
                  <label className="label">Category</label>
                  <select
                    required
                    name="category"
                    defaultValue={selectedHabit?.category}
                    className="select select-bordered w-full bg-white"
                  >
                    <option disabled hidden value="">
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
              <div className="grid md:grid-cols-2 gap-8 mt-1">
                <div>
                  <label className="label">User Name</label>
                  <input
                    value={user.displayName}
                    readOnly
                    type="text"
                    className="input input-bordered w-full bg-white"
                  />
                </div>
                <div>
                  <label className="label">User Email</label>
                  <input
                    value={user.email}
                    readOnly
                    type="email"
                    className="input input-bordered w-full bg-white"
                  />
                </div>
              </div>
              <div className="mt-1">
                <label className="label">Description</label>
                <textarea
                  required
                  name="description"
                  defaultValue={selectedHabit?.description}
                  className="textarea textarea-bordered w-full bg-white h-28"
                ></textarea>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-1">
                <div>
                  <label className="label">Reminder Time</label>
                  <input
                    defaultValue={selectedHabit?.reminder_time}
                    required
                    type="time"
                    name="reminderTime"
                    className="input input-bordered bg-white w-full"
                  />
                </div>
                <div>
                  <label className="label">Photo URL</label>
                  <input
                    required
                    name="image"
                    defaultValue={selectedHabit?.image}
                    type="text"
                    className="input input-bordered bg-white w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-outline btn-primary mt-2"
              >
                Update Habit
              </button>
            </form>
            <div className="modal-action">
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
