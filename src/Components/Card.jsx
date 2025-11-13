import React from "react";
import { Link } from "react-router";

const Card = ({ data }) => {
  const { title, description, creator_name, image, _id, completionHistory } =
    data;

  const shortDescription = (text) => {
    if (!text) return "";
    if (text.length <= 74) {
      return text;
    }
    return text.slice(0, 90) + " ...";
  };

  const calculateCurrentStreak = (history = []) => {
    if (!history || history.length === 0) return 0;

    const dates = history
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

  const currentStreak = calculateCurrentStreak(completionHistory);

  return (
    <div className="shadow-[0px_0px_8px_1px_#757575] hover:scale-101 rounded-xl brightness-99 bg-base-200 h-80 relative">
      <img
        src={image}
        alt=""
        className="h-full w-full rounded-xl object-cover"
      />
      <div className="absolute rounded-b-xl bottom-0 bg-linear-to-b right-0 left-0 h-70 from-transparent to-base-100">
        <div className="absolute bottom-0 p-3">
          <h2 className="text-black text-xl font-semibold">{title}</h2>
          <p className="text-sm text-gray-800 mt-1 h-10">
            {shortDescription(description)}
          </p>
          <p className="text-sm mt-1 text-gray-800">
            <span className="font-bold">Creator: {creator_name}</span>
          </p>
          <p>
            Current Streak:{" "}
            <span className="badge badge-primary text-[16.5px] font-medium">
              {currentStreak} {currentStreak === 1 ? "day" : "days"}
            </span>
          </p>
          <Link to={`/habits/${_id}`} className="btn-primary btn w-full mt-2">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
