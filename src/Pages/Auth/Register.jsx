import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="bg-base-100 pb-15 pt-30">
      <div className="max-w-lg mx-auto">
        <h1 className="text-center mb-6 text-2xl text-blue-900 font-semibold">
          Sign Up To Your Account
        </h1>
        <div className="card-body shadow-lg bg-blue-50 rounded-2xl flex items-center py-10 justify-center">
          <form className="fieldset w-[350px] ">
            <label className="label">Name</label>
            <input
              type="text"
              className="input  w-full bg-white"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input  w-full bg-white"
              placeholder="Email"
            />
            <label className="label">PhotoURL</label>
            <input
              type="text"
              className="input  w-full bg-white"
              placeholder="PhotoURL"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full bg-white"
              placeholder="Password"
            />

            <button className="btn btn-primary mt-4">Sign Up</button>
          </form>
          <div className="divider w-[350px] mx-auto">OR</div>
          <div className="w-[350px]">
            <button className="btn btn-outline btn-primary w-full">
              <FaGoogle></FaGoogle> Sign Up with Google
            </button>
          </div>
          <div className="w-[350px] mx-auto text-[13px]">
            <p className="">
              Already Have An Account ?{" "}
              <Link
                to={"/login"}
                className="text-blue-600 hover:cursor-pointer hover:underline"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
