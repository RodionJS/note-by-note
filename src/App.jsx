import { createContext, useEffect, useState } from "react";
import EmptyWindow from "./Components/EmptyWindow";
import ContentsWindow from "./Components/ContentsWindow";
import CreateWidget from "./Components/CreateWidget";
/* MADE BY RODION KUZNETSOV */
/* BELGRADE, SINGIDUNUM UNIVERSITY */
export const MainContext = createContext();

const App = () => {
  const [isModalOpen, setIsModalOpen] =
    useState(false); /* CREATE WINDOW STATE */

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  /* NOTES STATE */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  /* NOTES STORAGE */

  return (
    <MainContext.Provider
      value={{ notes, setNotes, isModalOpen, setIsModalOpen }}
    >
      {notes.length === 0 ? <EmptyWindow /> : <ContentsWindow />}
      {isModalOpen && <CreateWidget />}
    </MainContext.Provider>
  );
};

export default App;
