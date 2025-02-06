import React from "react";
import { useEffect, useContext } from "react";
import { MainContext } from "../App";
import Note from "./Note";
import { createButtonCSS, plusCSS } from "../assets/css";

const ContentsWindow = () => {
  const { notes, setNotes, isModalOpen, setIsModalOpen } =
    useContext(MainContext);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isModalOpen]);
  /* LOGIC TO HIDE SCROLLBAR */
  return (
    <div className="flex flex-col items-center justify-start h-full text-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-auto w-11/12 max-w-[800px] lg:max-w-[1400px] mb-12">
        <button
          onClick={() => setIsModalOpen(true)}
          className={
            createButtonCSS +
            (notes.length === 1 ? " sm:hidden" : "") +
            (notes.length < 3 ? " hidden sm:block" : "")
          }
        >
          Create Note
        </button>
        {notes.map((note) => (
          <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
        ))}
        <div className="flex flex-col min-w-72 sm:min-w-0 w-full h-52 sm:h-64 mx-auto">
          <svg
            onClick={() => setIsModalOpen(true)}
            className={plusCSS}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ContentsWindow;
