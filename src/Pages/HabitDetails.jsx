import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const HabitDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/habits/${id}`)
      .then((data) => setData(data.data))
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
  }, [id]);
  const { image, title, description, category, creator_name, creator_email } =
    data || {};

  return (
    <div className="pt-28 pb-15">
      {loading ? (
        <div className="flex items-center justify-center min-h-[87vh] ">
          <span className="loading text-black loading-bars loading-xl"></span>
        </div>
      ) : (
        <div className=" bg-primary/20 p-4 shadow-2xl rounded-2xl max-w-6xl mx-auto">
          <div className="w-full flex gap-9">
            <img
              src={image}
              alt=""
              className="w-1/3 rounded-lg h-110 object-cover overflow-hidden"
            />
            <div className="w-2/3">
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
                    <span className="font-semibold">Name :</span> {creator_name}
                  </p>
                  <p className="text-black">
                    <span className="font-semibold">Emial :</span>{" "}
                    {creator_email}
                  </p>
                </div>
              </div>
              <div className="w-full mt-3">
                <div className="">
                  <span className="font-semibold">Description :</span>
                </div>
                <p className="text-gray-700">{description}</p>
              </div>
              <div className="mt-3">
                <span className="font-semibold">Progress:</span>
                <br />
                <progress
                  className="progress mt-2 rounded-full progress-primary h-5 w-120"
                  value={15}
                  max="30"
                ></progress>
              </div>
              <button className="btn btn-primary px-10 mt-4 btn-outline">
                Mark Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HabitDetails;
