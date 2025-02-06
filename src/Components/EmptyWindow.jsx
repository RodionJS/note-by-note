import React, { useContext } from "react";
import { MainContext } from "../App";

const EmptyWindow = () => {
  const { setIsModalOpen } = useContext(MainContext);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center mt-20 p-5">
      <h2 className="text-2xl font-semibold mb-4">No notes yet</h2>
      <p className="mb-6">
        You haven't created any notes yet. Start by creating your first note!
      </p>
      <button
        className="px-4 py-2 text-white rounded duration-300 bg-blue-500 hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Create your first note
      </button>
    </div>
  );
};

export default EmptyWindow;
