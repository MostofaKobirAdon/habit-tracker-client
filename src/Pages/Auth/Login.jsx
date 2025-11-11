import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

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
      <div className="max-w-lg mx-auto">
        <h1 className="text-center mb-6 text-2xl text-blue-900 font-semibold">
          Log In To Your Account
        </h1>
        <div className="card-body shadow-lg bg-blue-50 rounded-2xl flex items-center py-10 justify-center">
          <form onSubmit={handleLogin} className="fieldset w-[350px] ">
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
          <div className="divider w-[350px] mx-auto">OR</div>
          <div className="w-[350px]">
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
