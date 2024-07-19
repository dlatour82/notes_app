import React, { useState } from "react";
import { Link } from "react-router-dom";

function NotesList({ notes, addNote, deleteNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddNote = () => {
    if (title.trim() && body.trim()) {
      addNote(title, body);
      setTitle("");
      setBody("");
    }
  };

  return (
    <div className="notes-list">
      <div className="note-input">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <div className="notes">
        {notes.map((note) => (
          <div key={note.id} className="note-summary">
            <Link to={`/note/${note.id}`}>
              <h2>{note.title}</h2>
            </Link>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotesList;
