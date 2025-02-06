import React from "react";
import { useContext } from "react";
import { NoteContext } from "./Note";

const DotMenu = ({ menuRef, copied, setCopied, setMenuVisible }) => {
  const { note, setIsEditVisible, handleDelete } = useContext(NoteContext);

  return (
    <div
      ref={menuRef}
      className="absolute top-1 right-[5px] bg-white border rounded shadow-md px-3 py-1.5 divide-gray-400 divide-y-[1px] flex flex-col"
    >
      <button
        onClick={() => {
          setMenuVisible(false);
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
        }} /* LOGIC FOR "COPIED TO CLIPBOARD" WINDOW TO SHOW FOR 1 SECOND */
        className="text-black text-xs font-semibold text-left py-1.5 group relative group/button"
      >
        📋
        <span className="group-hover/button:text-blue-700 duration-500 ml-0.5">
          Copy
        </span>
      </button>
      <button
        onClick={() => setIsEditVisible(true)}
        className="text-black text-xs font-semibold text-left py-1.5 group relative group/button"
      >
        ✏️
        <span className="group-hover/button:text-blue-700 duration-500 ml-0.5">
          Edit
        </span>
      </button>
      <button
        onClick={handleDelete}
        className="text-black text-xs font-semibold text-left py-1.5 group relative group/button"
      >
        🗑️
        <span className="group-hover/button:text-red-600 duration-500 ml-0.5">
          Delete
        </span>
      </button>
    </div>
  );
};

export default DotMenu;
