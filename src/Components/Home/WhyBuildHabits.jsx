import React from "react";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { LuBrain, LuDumbbell } from "react-icons/lu";
import { RxRocket } from "react-icons/rx";

const WhyBuildHabits = () => {
  return (
    <div className="mt-20 mb-20 ">
      <div className="">
        <div className="text-center  md:max-w-6xl max-w-11/12 mx-auto">
          <h1 className="  text-2xl text-base-content font-semibold">
            Why Build a Habit?
          </h1>
          <p className="text-gray-600 ">
            Small daily actions create big transformations. Discover the power
            of consistency and growth
          </p>
        </div>
        <div className="bg-gradient-to-b text-gray-800 py-10 from-blue-base  to-sky-200">
          <div className=" md:max-w-6xl max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-2 rounded-3xl p-4">
              <div className="flex items-center justify-center">
                <LuBrain size={90} />
              </div>
              <h2 className="text-2xl mt-2 text-center font-bold">
                Better Focus
              </h2>
              <p className="text-sm mt-1 font-medium text-center text-gray-700">
                Building habits helps train your mind to stay on task, reducing
                distractions and improving concentration.
              </p>
            </div>
            <div className="border-2 rounded-3xl p-4">
              <div className="flex items-center justify-center">
                <FaRegFaceSmileBeam size={90} />
              </div>
              <h2 className="text-2xl mt-2 text-center font-bold">
                Reduced Stress
              </h2>
              <p className="text-sm mt-1 font-medium text-center text-gray-700">
                Daily routines reduce decision fatigue and bring structure,
                lowering anxiety and stress levels.
              </p>
            </div>
            <div className="border-2 rounded-3xl p-4">
              <div className="flex items-center justify-center">
                <LuDumbbell size={90} />
              </div>
              <h2 className="text-2xl mt-2 text-center font-bold">
                Improved Health{" "}
              </h2>
              <p className="text-sm mt-1 font-medium text-center text-gray-700">
                Tracking wellness habits like sleep, exercise, and hydration
                leads to long-term physical and mental health benefits.
              </p>
            </div>
            <div className="border-2 rounded-3xl p-4">
              <div className="flex items-center justify-center">
                <RxRocket size={90} />
              </div>
              <h2 className="text-2xl mt-2 text-center font-bold">
                Get Productive
              </h2>
              <p className="text-sm mt-1 font-medium text-center text-gray-700">
                Consistent habits turn goals into actions, helping you achieve
                more with less effort over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBuildHabits;
