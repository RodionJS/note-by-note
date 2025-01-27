import React from "react";

const DotMenu = ({ menuRef, note, copied, setCopied, handleDelete }) => {
  return (
    <div
      ref={menuRef}
      className="absolute top-1 right-[5px] bg-white border rounded shadow-md px-3 py-1.5 divide-gray-400 divide-y-[1px] flex flex-col"
    >
      <button className="text-black text-xs font-semibold text-left py-1.5 group relative group/button">
        📋
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
          className="group-hover/button:text-shadow-hoverBlack duration-500"
        >
          Copy
        </span>
      </button>
      <button className="text-black text-xs font-semibold text-left py-1.5 group relative group/button">
        ✏️
        <span className="group-hover/button:text-shadow-hoverBlack duration-500">
          Edit
        </span>
      </button>
      <button
        onClick={handleDelete}
        className="text-black text-xs font-semibold text-left py-1.5 group relative group/button"
      >
        🗑️
        <span className="group-hover/button:text-shadow-red duration-500">
          Delete
        </span>
      </button>
    </div>
  );
};

export default DotMenu;
