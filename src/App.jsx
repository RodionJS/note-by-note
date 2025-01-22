import { useEffect, useState } from "react";
import EmptyWindow from "./Components/EmptyWindow";
import ContentsWindow from "./Components/ContentsWindow";
/* MADE BY RODION KUZNETSOV */
/* BELGRADE, SINGIDUNUM UNIVERSITY */
const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      {notes.length === 0 ? (
        <EmptyWindow notes={notes} setNotes={setNotes} />
      ) : (
        <ContentsWindow notes={notes} setNotes={setNotes} />
      )}
    </>
  );
};

export default App;
