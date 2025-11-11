import React from "react";

const Card = ({ data }) => {
  const { title, description, creator_name } = data;
  const shortDescription = (text) => {
    if (text.length <= 74) {
      return text;
    }
    return text.slice(0, 90) + " ...";
  };
  return (
    <div className="shadow-[0px_0px_10px_1px_#757575] rounded-xl  brightness-99 bg-base-200 h-80 relative">
      <img
        src="https://i.ibb.co.com/1f38jjsW/harsh-gupta-n-VDB1-IGq64s-unsplash.jpg"
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
            <span className="font-bold">Creator : {creator_name}</span>
            {}
          </p>
          <button className="btn-primary btn w-full mt-2">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
