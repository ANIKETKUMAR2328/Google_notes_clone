import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import ToggleSwitch from './components/ToggleSwitch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  // Retrieve notes from localStorage or initialize with an empty array
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // State for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Apply the dark mode class to the body element
  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';
  }, [darkMode]);

  // Function to add a new note
  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  // Function to delete a note by its ID
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-3">
        <h1>Google Keep Clone</h1>
        <ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
