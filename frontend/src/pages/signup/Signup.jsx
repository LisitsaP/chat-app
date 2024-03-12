import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sine Op <snap className="text-accent">ChatApp</snap>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <snap className="text-white label-text">Full Name</snap>
            </label>
            <input
              className="w-full input input-accent input-bordered h-10 "
              type="text"
              placeholder="Your name"
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
            />
          </div>
          <GenderCheckbox />
          <a
            href="#"
            className="text-sm text-neutral-content hover:underline hover:text-accent mt-2 h-10inline block"
          >
            {"Don't"}Already have an account?
          </a>
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
