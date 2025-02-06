import React from "react";
import { useState, useContext } from "react";
import { copiedCSS } from "../assets/css";
import { NoteContext } from "./Note";

const ViewWidget = ({ setViewVisible }) => {
  const { note, setIsEditVisible, handleDelete } = useContext(NoteContext);
  const [copied, setCopied] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white px-8 py-12 sm:py-4 rounded shadow-lg h-screen max-w-[900px] w-screen sm:h-fit sm:w-5/6 md:w-4/5 xl:w-3/4 2xl:w-2/3 flex flex-col relative">
        <div
          className={
            copiedCSS +
            " top-1.5 left-10 scale-110" +
            (copied ? " sm:opacity-100" : "")
          }
        >
          Copied to clipboard
        </div>
        <button
          className="rotate-45 absolute top-7 sm:top-0 right-1 text-4xl font-light duration-300 sm:opacity-50 hover:opacity-100 select-none"
          onClick={() => setViewVisible(false)}
        >
          +
        </button>

        <h1 className="w-full p-2 mb-4 text-2xl">{note.theme}</h1>

        <div className="flex-1 flex flex-col">
          <textarea
            value={note.content}
            readOnly
            className="w-full flex-1 min-h-56 resize-none p-2 mb-7 border-2 rounded transition-colors duration-200 focus:border-gray-500 focus:outline-none"
          ></textarea>
        </div>

        {/* COPY EDIT DELETE ELEMENT */}
        <div className="scale-110 sm:scale-100 sm:absolute sm:top-9 sm:left-10 text-xl sm:text-lg">
          <span
            onClick={() => {
              navigator.clipboard
                .writeText(note.content)
                .then(() => {
                  if (!copied) {
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false);
                    }, 1000);
                  }
                })
                .catch((err) => {
                  console.error("Failed to copy content: ", err);
                });
            }}
            className="mr-4 sm:mr-3 opacity-50 hover:opacity-100 duration-300 select-none cursor-pointer"
          >
            Copy
          </span>
          <span
            onClick={() => {
              setIsEditVisible(true);
              setViewVisible(false);
            }}
            className="mr-4 sm:mr-3 opacity-50 hover:opacity-100 duration-300 select-none cursor-pointer"
          >
            Edit
          </span>
          <span
            onClick={handleDelete}
            className="opacity-50 hover:text-red-500 hover:opacity-100 duration-300 select-none cursor-pointer"
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewWidget;
