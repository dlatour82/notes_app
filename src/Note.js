import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function Note({ notes, deleteNote }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === Number(id));

  if (!note) {
    return <div>Note not found</div>;
  }

  const handleDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Note;
