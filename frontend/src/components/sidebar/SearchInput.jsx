import { IoSearchSharp } from "react-icons/io5";
export default function SearchInput() {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-gray-700"
      />
      <button
        type="submit"
        className="btn btn-circle btn-outline btn-accent text-white"
      >
        <IoSearchSharp className="w-6 h-6 outline-none text-white" />
      </button>
    </form>
  );
}
