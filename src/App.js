import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NotesList from "./NotesList";
import Note from "./Note";
import "./styles.css";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, body) => {
    const newNote = { id: Date.now(), title, body };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <h1>Notes Application</h1>
        <Link to="/">Home</Link>
        <Routes>
          <Route
            path="/"
            element={
              <NotesList
                notes={notes}
                addNote={addNote}
                deleteNote={deleteNote}
              />
            }
          />
          <Route
            path="/note/:id"
            element={<Note notes={notes} deleteNote={deleteNote} />}
          />
        </Routes>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
