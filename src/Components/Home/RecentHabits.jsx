import React from "react";
import Card from "../Card";

const RecentHabits = ({ latestHabits }) => {
  return (
    <div>
      <div className="lg:max-w-6xl md:max-w-[700px] max-w-11/12   mx-auto mt-16 mb-10">
        <div className="text-center">
          <h1 className="  text-2xl text-base-content font-semibold">
            Discover New Habits
          </h1>
          <p className="text-gray-700 ">
            Explore the latest public habits created by our community and get
            inspired to start your own.
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-15 mt-8">
          {latestHabits.map((habit) => (
            <Card key={habit._id} data={habit}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentHabits;
