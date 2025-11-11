import React, { use } from "react";
import Card from "../Card";

const RecentHabits = ({ latestHabitPromise }) => {
  const latestHabits = use(latestHabitPromise).data;
  console.log(latestHabits);
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-16 mb-10">
        <div className="text-center">
          <h1 className="  text-2xl text-base-content font-semibold">
            Discover New Habits
          </h1>
          <p className="text-gray-600 ">
            “Explore the latest public habits created by our community and get
            inspired to start your own.”
          </p>
        </div>
        <div className="grid grid-cols-3 gap-15 mt-8">
          {latestHabits.map((habit) => (
            <Card key={habit._id} data={habit}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentHabits;
