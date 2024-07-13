import React from 'react';

function NoteList({ notes, deleteNote }) {
  return (
    <div>
      {notes.map(note => (
        <div key={note.id} className="card my-2">
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
            <button className="btn btn-danger" onClick={() => deleteNote(note.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
