import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-top min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-white">
          Login <snap className="text-accent">ChatApp</snap>{" "}
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-white label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-accent h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-white label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-accent h-10"
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm text-neutral-content hover:underline hover:text-accent mt-2 h-10inline block"
          >
            {"Don't"} have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-outline btn-accent text-hover-white ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
