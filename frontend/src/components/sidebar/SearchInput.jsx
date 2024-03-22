import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversations from "../../hooks/useGetConversations";
export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full bg-gray-700"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
