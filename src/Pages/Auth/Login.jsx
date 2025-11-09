import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="bg-base-100 pb-15 pt-30">
      <div className="max-w-lg mx-auto">
        <h1 className="text-center mb-6 text-2xl text-blue-900 font-semibold">
          Log In To Your Account
        </h1>
        <div className="card-body shadow-lg bg-blue-50 rounded-2xl flex items-center py-10 justify-center">
          <form className="fieldset w-[350px] ">
            <label className="label">Email</label>
            <input
              type="email"
              className="input  w-full bg-white"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full bg-white"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
          </form>
          <div className="divider w-[350px] mx-auto">OR</div>
          <div className="w-[350px]">
            <button className="btn btn-outline btn-primary w-full">
              <FaGoogle></FaGoogle> Login with Google
            </button>
          </div>
          <div className="w-[350px] mx-auto text-[13px]">
            <p className="">
              Dont Have An Account ?{" "}
              <span className="text-blue-600 hover:cursor-pointer hover:underline">
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
