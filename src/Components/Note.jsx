import React, { useState, useEffect, useRef } from "react";
import { copiedCSS, noteCSS, viewButtonCSS } from "../assets/css";
import ViewWidget from "./ViewWidget";
import DotMenu from "./DotMenu";
import EditWidget from "./EditWidget";

const Note = ({ note, notes, setNotes }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [viewVisible, setViewVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  note.date = new Date(note.date);
  const mons = note.date.getMonth() + 1;
  const days = note.date.getDate();
  const hors = note.date.getHours();
  const mins = note.date.getMinutes();
  const date =
    (days > 9 ? "" : "0") +
    days +
    "." +
    (mons > 9 ? "" : "0") +
    mons +
    "." +
    note.date.getFullYear();
  const time =
    (hors > 9 ? "" : "0") + hors + ":" + (mins > 9 ? "" : "0") + mins;
  /* LOGIC TO PARSE DATE */

  const handleDelete = () => {
    setNotes(notes.filter((item) => item.id !== note.id));
  };
  /* FUNCTION TO DELETE NOTE */

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
    }
  };
  /* REMOVE "DELETE/EDIT" MENU ON CLICK OUTSIDE */
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  /* EVENT LISTENER FOR OUTSIDE CLICK */

  useEffect(() => {
    if (viewVisible) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [viewVisible]);
  /* LOGIC TO HIDE SCROLLBAR */

  return (
    <div key={note.id} className={noteCSS}>
      <button
        ref={buttonRef}
        className="ml-auto rotate-90 absolute top-2.5 right-[3px] text-xl hover:text-blue-700 hover:scale-x-125 duration-500"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        ...
      </button>

      <span
        className={
          copiedCSS + " top-1.5 right-[5px]" + (copied ? " sm:opacity-100" : "")
        }
      >
        Copied to clipboard
      </span>

      {menuVisible && (
        <DotMenu
          menuRef={menuRef}
          note={note}
          setIsEditVisible={setIsEditVisible}
          copied={copied}
          setCopied={setCopied}
          handleDelete={handleDelete}
          setMenuVisible={setMenuVisible}
        />
      )}

      <h3 className="text-xl font-semibold mb-2">{note.theme}</h3>
      <p className="text-md break-words px-3 line-clamp-4 sm:line-clamp-6 text-left">
        {note.content}
      </p>

      <div className="flex flex-row mt-auto">
        <p className="text-xs text-gray-500">{date}</p>
        <p className="text-xs text-gray-500 ml-auto">{time}</p>
      </div>
      <button onClick={() => setViewVisible(true)} className={viewButtonCSS}>
        View
      </button>
      {viewVisible && (
        <ViewWidget
          setViewVisible={setViewVisible}
          note={note}
          setIsEditVisible={setIsEditVisible}
          handleDelete={handleDelete}
        />
      )}
      {isEditVisible && (
        <EditWidget
          note={note}
          notes={notes}
          setNotes={setNotes}
          setIsEditVisible={setIsEditVisible}
        />
      )}
    </div>
  );
};

export default Note;
