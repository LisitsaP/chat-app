import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const { signup } = useSignup();
  const handleCheckboxChange = (gender) => {
    setInput({ ...inputs, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sine Op <snap className="text-accent">ChatApp</snap>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <snap className="text-white label-text">Full Name</snap>
            </label>
            <input
              className="w-full input input-accent input-bordered h-10 "
              type="text"
              placeholder="Your name"
              value={inputs.fullName}
              onChange={(e) =>
                setInput({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <snap className="text-white label-text">Username</snap>
            </label>
            <input
              className="w-full input input-accent input-bordered h-10 "
              type="text"
              placeholder="Your username"
              value={inputs.username}
              onChange={(e) =>
                setInput({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <snap className="text-white label-text">Password</snap>
            </label>
            <input
              className="w-full input input-accent input-bordered h-10 "
              type="password"
              placeholder="Password"
              value={inputs.password}
              onChange={(e) =>
                setInput({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <snap className="text-white label-text">Confirm Password</snap>
            </label>
            <input
              className="w-full input input-accent input-bordered h-10 "
              type="password"
              placeholder="Confirm Password"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInput({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox
            onCheckboxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/login"}
            className="text-sm text-neutral-content hover:underline hover:text-accent mt-2 h-10inline block"
          >
            {"Don't"}Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-outline btn-accent text-hover-white ">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
