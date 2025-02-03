import React from "react";
import { useState } from "react";
import { editTextAreaCSS } from "../assets/css";

const EditWidget = ({ note, notes, setNotes, setIsEditVisible }) => {
  const [input, setInput] = useState(note.content);
  /* STATE FOR CURRENT INPUT */

  const handelEditNote = () => {
    if (input.content === "")
      return setNotes(notes.filter((item) => item.id !== note.id));

    const editedNote = {
      theme: note.theme,
      content: input,
      date: note.date,
      id: note.id,
    };

    setNotes(
      notes.map((item) => (item.id === editedNote.id ? editedNote : item))
    );
    setInput("");
    setIsEditVisible(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-8 py-12 sm:py-4 rounded shadow-lg h-screen max-w-[900px] w-screen sm:h-5/6 sm:w-5/6 md:w-4/5 xl:w-3/4 2xl:w-2/3 flex flex-col relative">
        <button
          className="rotate-45 absolute top-7 sm:top-0 right-1 text-4xl font-light duration-300 sm:opacity-50 hover:opacity-100"
          onClick={() => setIsEditVisible(false)}
        >
          +
        </button>
        <h3 className="text-xl font-semibold my-4">Edit Note</h3>
        <form className="flex flex-1 flex-col">
          <input
            value={note.theme}
            maxLength={18}
            className="w-full p-2 mb-4 border-2 rounded pointer-events-none"
            type="text"
            readOnly
          />
          <textarea
            value={input}
            placeholder="Saving will delete the note if content is empty !"
            maxLength={1000}
            className={editTextAreaCSS}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </form>
        <div className="flex justify-center gap-2 mb-5">
          <button
            className="px-6 py-2 text-white rounded duration-300 bg-blue-500 hover:bg-blue-600 active:scale-95"
            onClick={handelEditNote}
          >
            Save
          </button>
          <button
            className="px-4 py-2 text-white rounded duration-300 bg-red-500 hover:bg-red-600 active:scale-90"
            onClick={() => setIsEditVisible(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditWidget;
