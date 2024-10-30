import React from "react";
import { FaPlus } from "react-icons/fa";

const AddButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex flex-row px-4 py-[6px] bg-blue-500 hover:bg-blue-400 rounded-md items-center text-white">
      <FaPlus className="mr-2" size={15} />
      {children}
    </button>
  );
};

export default AddButton;
