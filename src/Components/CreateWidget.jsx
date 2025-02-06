import React, { useContext, useState } from "react";
import { MainContext } from "../App";

const CreateWidget = () => {
  const { notes, setNotes, setIsModalOpen } = useContext(MainContext);

  const [input, setInput] = useState({
    theme: "",
    content: "",
    date: "",
    id: undefined,
  });
  /* STATE FOR CURRENT INPUT */

  const handelCreateNote = () => {
    if (input.theme === "" || input.content === "")
      return alert("Fill all fields!");

    const newNote = {
      theme: input.theme,
      content: input.content,
      date: new Date(),
      id: Math.random(),
    };

    setNotes([...notes, newNote]);
    setInput({ theme: "", content: "", date: "", id: undefined });
    setIsModalOpen(false);
  };
  /* FUNCTION TO CREATE NEW NOTE */

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white px-8 py-12 sm:py-4 rounded shadow-lg h-screen max-w-[900px] w-screen sm:h-5/6 sm:w-5/6 md:w-4/5 xl:w-3/4 2xl:w-2/3 flex flex-col relative">
        <button
          className="rotate-45 absolute top-7 sm:top-0 right-1 text-4xl font-light duration-300 sm:opacity-50 hover:opacity-100"
          onClick={() => setIsModalOpen(false)}
        >
          +
        </button>
        <h3 className="text-xl font-semibold mb-4">New note</h3>
        <p className="mb-4">Create your note!</p>
        <form className="flex flex-1 flex-col">
          <input
            value={input.theme}
            maxLength={18}
            className="w-full p-2 mb-4 border-2 rounded transition-colors duration-200 focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="Theme"
            onChange={(e) => setInput({ ...input, theme: e.target.value })}
          />
          <textarea
            value={input.content}
            maxLength={1000}
            className="w-full flex-1 resize-none p-2 mb-10 border-2 rounded transition-colors duration-200 focus:border-gray-500 focus:outline-none"
            placeholder="Type your note here..."
            onChange={(e) => setInput({ ...input, content: e.target.value })}
          ></textarea>
        </form>
        <div className="flex justify-center gap-2 mb-5">
          <button
            className="px-4 py-2 text-white rounded duration-300 bg-blue-500 hover:bg-blue-600 active:scale-95"
            onClick={handelCreateNote}
          >
            Create
          </button>
          <button
            className="px-4 py-2 text-white rounded duration-300 bg-red-500 hover:bg-red-600 active:scale-90"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateWidget;
