import React from "react";
import { useState, useEffect } from "react";
import Note from "./Note";
import CreateWidget from "./CreateWidget";
import { createButtonCSS, plusCSS } from "../assets/css";

const ContentsWindow = ({ notes, setNotes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* STATE FOR NOTE CREATING WINDOW */
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
    <div className="flex flex-col items-center justify-center h-full text-center mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mx-auto w-11/12 sm:w:3/4 2xl:w-1/2 mb-12">
        {notes.length > 2 && (
          <button
            onClick={() => setIsModalOpen(true)}
            className={createButtonCSS}
          >
            Create Note
          </button>
        )}
        {notes.map((note) => (
          <Note key={note.id} note={note} notes={notes} setNotes={setNotes} />
        ))}
        <div className="flex flex-col min-w-72 sm:min-w-0 w-full h-52 sm:h-64 mx-auto">
          <button onClick={() => setIsModalOpen(true)} className={plusCSS}>
            +
          </button>
        </div>
      </div>
      {isModalOpen && (
        <CreateWidget
          notes={notes}
          setNotes={setNotes}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default ContentsWindow;
