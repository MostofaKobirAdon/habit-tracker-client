import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Context/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Register = () => {
  const location = useLocation();
  const [error, setError] = useState("");
  const { createUser, setUser, updateUser, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const lowercasePattern = /[a-z]/;
  const uppercasePattern = /[A-Z]/;
  const lengthPattern = /^.{6,}$/;
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    if (!lengthPattern.test(password)) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!lowercasePattern.test(password)) {
      setError("Password must have a Lowercase letter");
      return;
    } else if (!uppercasePattern.test(password)) {
      setError("Password must have an Uppercase letter");
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const updatedInfo = {
          displayName: name,
          photoURL,
        };
        updateUser(updatedInfo)
          .then(() => {
            setUser({ ...user, ...updatedInfo });
            toast.success("created account successfully");
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
          Sign Up To Your Account
        </h1>
        <div className="card-body shadow-lg bg-blue-50 rounded-2xl flex items-center py-10 justify-center">
          <form onSubmit={handleSignUp} className="fieldset w-[350px] ">
            <label className="label">Name</label>
            <input
              name="name"
              required
              type="text"
              className="input  w-full bg-white"
              placeholder="Name"
            />
            <label className="label">Email</label>
            <input
              name="email"
              required
              type="email"
              className="input  w-full bg-white"
              placeholder="Email"
            />
            <label className="label">PhotoURL</label>
            <input
              name="photoURL"
              required
              type="text"
              className="input  w-full bg-white"
              placeholder="PhotoURL"
            />
            <label className="label">Password</label>
            <input
              name="password"
              required
              type="password"
              className="input w-full bg-white"
              placeholder="Password"
            />
            {error && <p className="text-error ">{error}</p>}
            <button type="submit" className="btn btn-primary mt-4">
              Sign Up
            </button>
          </form>
          <div className="divider w-[350px] mx-auto">OR</div>
          <div className="w-[350px]">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary w-full"
            >
              <FaGoogle></FaGoogle> Sign Up with Google
            </button>
          </div>
          <div className="w-[350px] mx-auto text-[13px]">
            <p className="">
              Already Have An Account ?{" "}
              <Link
                state={location.state}
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
