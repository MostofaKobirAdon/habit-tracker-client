import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import goals from "../../assets/goals.jpg";

const Login = () => {
  const location = useLocation();
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state || "/"}`);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Logged in successfully`,
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(`${location.state || "/"}`);
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };
  return (
    <div className="bg-base-100 pb-15 pt-30">
      <div className="max-w-11/12  lg:max-w-6xl md:max-w-[700px] mx-auto flex flex-col lg:flex-row bg-blue-50 shadow-lg rounded-2xl lg:h-[483px]">
        <div className="relative md:h-65">
          <img
            src={goals}
            alt=""
            className="lg:w-150  md:w-full  lg:rounded-l-2xl rounded-t-2xl h-full lg:h-full object-cover overflow-hidden"
          />
          <div className="absolute top-0 text-white p-4">
            <h1 className="text-2xl  lg:text-4xl font-bold">
              Build Your Best Life. One Habit at a Time.
            </h1>
          </div>
        </div>
        <div className="card-body   rounded-2xl flex items-center py-10 justify-center">
          <h1 className="text-center mb-6 text-2xl text-blue-900 font-semibold">
            Log In To Your Account
          </h1>
          <form onSubmit={handleLogin} className="fieldset w-full ">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input  w-full bg-white"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              required
              type="password"
              className="input w-full bg-white"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
          </form>
          <div className="divider w-full lg:w-[350px] mx-auto">OR</div>
          <div className="w-full lg:w-[350px]">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary w-full"
            >
              <FaGoogle></FaGoogle> Login with Google
            </button>
          </div>
          <div className="w-[350px] mx-auto text-[13px]">
            <p className="">
              Dont Have An Account ?{" "}
              <Link
                state={location.state}
                to={"/register"}
                className="text-blue-600 hover:cursor-pointer hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
